var LakeInfo = function(nm, ref) {
	var self = this;
	this.name = ko.observable(nm);
	this.href = ko.observable(ref);
	this.county = ko.observable();
	this.latlon = ko.observable();
	this.area = ko.observable();
	this.species = ko.observableArray();
	this.speciesCount = ko.computed(function() {
		return self.species().length;
	});
	this.displayName = ko.computed(function() {
		return self.name() + "(" + self.speciesCount() + ")";
	});
	this.marker = ko.observable();
	this.place = ko.computed(function() {
		return self.name() + ", " + self.county() + " county";
	});
	this.iFishLink = ko.computed(function() {
		return "<a href='http://www.ifishillinois.org"+self.href()+"'>lake report at ifishillinois.org</a>";
	});
	this.flickrThumbs = ko.computed(function() {
		var thumbs = [
/*
			{
				pic: "images/Largemouth bass 1.jpg",
				height: "77",
				width: "51"
			},
			{
				pic:"images/Smallmouth bass.jpg",
				height:"77",
				width:"51"
			},
			{
				pic:"images/Largemouth bass 2.jpg",
				height:"77",
				width:"51"
			},
			{
				pic:"images/Muskie 1.jpg",
				height:"51",
				width:"77"
			},
			{
				pic:"images/Muskie 2.jpg",
				height:"51",
				width:"77"
			},
			{
				pic:"images/Walleye.jpg",
				height:"51",
				width:"77"
			}
*/
		];
		//Now, before we return the thumbs, let's see if we can actually get some thumbs from Flickr...
		var api_method = "flickr.photos.search";
		var api_key = "5851fa6100659e952dc816ed4c670568";

		var lat = "42.105287";
		var lon = "-87.939661";
		if (typeof self.latlon() !== "undefined") {
			var nums = self.latlon().split(",");
			var lat = nums[0];
			var lon = nums[1];
			if (0 <= lat && lat <= 180 && -90 <= lon && lon <= lon) {
				var radius = "0.5";
				var radiusUnits = "mi";
				var extras = "url_s";
				var perPage = "10";
				var whichPage = "1";
				var format = "json";
				var nojsoncallback="1";
				var searchUrl = "https://api.flickr.com/services/rest/" +
						"?method=" + api_method +
						"&api_key=" + api_key +
						"&lat=" + lat +
						"&lon=" + lon +
						"&radius=" + radius +
						"&radius_units=" + radiusUnits +
						"&extras=" + extras +
						"&per_page=" + perPage +
						"$page=" + whichPage +
						"&format=" + format +
						"&nojsoncallback=" + nojsoncallback;

				$.ajax({
					url: searchUrl,
					type: "get",
					dataType: "json",
					success: function(data) {
//console.log("found thumbs" + data.photos.total);
						var numThumbs = 10;
						if (data.photos.total < numThumbs)
							numThumbs = data.photos.total;
						for (var i = 0; i < numThumbs; i++) {
							var photoInfo = data.photos.photo[i];
							var thumb = {};
							thumb.pic = photoInfo.url_s;
							thumb.height = "50";
							thumb.width = "50";
							thumb.linkBack = "https://www.flickr.com/photos/"+photoInfo.owner+"/"+photoInfo.id;
//console.log("thumb:");
//console.log(thumb);
							thumbs.push(thumb);
						};
					},
					error: function(xhr, stat, thrown) {
						console.log(stat+":"+thrown);
					}
				});
			}
		}
		return thumbs;
	});
}