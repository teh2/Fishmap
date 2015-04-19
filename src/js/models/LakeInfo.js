var LakeInfo = function(nm, ref) {
	var self = this;
	this.name = ko.observable(nm);
	this.href = ko.observable(ref);
	this.county = ko.observable();
	this.latlon = ko.observable();
	this.lat = ko.computed(function() {
		if (typeof self.latlon() === 'undefined') { return 0; }
		if (0 === self.latlon().length) { return 0; }
		var nums = self.latlon().split(",");
		return nums[0];
	});
	this.lon = ko.computed(function() {
		if (typeof self.latlon() === 'undefined') { return 0; }
		if (0 === self.latlon().length) { return 0; }
		var nums = self.latlon().split(",");
		return nums[1];
	});

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
/***************Start flickr *****************/
	// this.numFlickrThumbs = ko.observable(0);
	// this.flickrThumbs = ko.computed(function() {
		// var thumbs = [];
		//Now, before we return the thumbs, let's see if we can actually get some thumbs from Flickr...
		// var api_method = "flickr.photos.search";
		// var api_key = "5851fa6100659e952dc816ed4c670568";

		// var lat = "42.105287";
		// var lon = "-87.939661";
		// if (typeof self.latlon() !== "undefined") {
			// var nums = self.latlon().split(",");
			// var lat = nums[0];
			// var lon = nums[1];
			// if (0 <= lat && lat <= 180 && -90 <= lon && lon <= lon) {
				// var radius = "0.5";
				// var radiusUnits = "mi";
				// var extras = "url_s";
				// var perPage = "10";
				// var whichPage = "1";
				// var format = "json";
				// var nojsoncallback="1";
				// var searchUrl = "https://api.flickr.com/services/rest/" +
						// "?method=" + api_method +
						// "&api_key=" + api_key +
						// "&lat=" + lat +
						// "&lon=" + lon +
						// "&radius=" + radius +
						// "&radius_units=" + radiusUnits +
						// "&extras=" + extras +
						// "&per_page=" + perPage +
						// "$page=" + whichPage +
						// "&format=" + format +
						// "&nojsoncallback=" + nojsoncallback;

				// $.ajax({
					// url: searchUrl,
					// type: "get",
					// dataType: "json",
					// success: function(data) {
//console.log("found thumbs" + data.photos.total);
						// var numThumbs = 10;
						// if (data.photos.total < numThumbs)
							// numThumbs = data.photos.total;
						// self.numFlickrThumbs(numThumbs);
						// for (var i = 0; i < numThumbs; i++) {
							// var photoInfo = data.photos.photo[i];
							// var thumb = {};
							// thumb.pic = photoInfo.url_s;
							// thumb.height = "50";
							// thumb.width = "50";
							// thumb.linkBack = "https://www.flickr.com/photos/"+photoInfo.owner+"/"+photoInfo.id;
//console.log("thumb:");
//console.log(thumb);
							// thumbs.push(thumb);
						// };
					// },
					// error: function(xhr, stat, thrown) {
						// console.log(stat+":"+thrown);
					// }
				// });
			// }
		// }
		// return thumbs;
	// });
	// this.flickrAttrib = ko.computed(function() {
		// if (0 < self.numFlickrThumbs()) {
			// return "Pics by flickr users";
		// }
		// else
		// {
			// return "No nearby flickr pics available"
		// }
	// });
/***************End flickr *****************/
/***************Start Pano *****************/
	// this.pWidget;
	// this.numPanoramioThumbs = ko.observable(0);
	// this.panoramioThumbs = function() {
		// var lat = "42.105287";
		// var lon = "-87.939661";
		// if (typeof self.latlon() !== "undefined") {
			// var nums = self.latlon().split(",");
			// var lat = nums[0];
			// var lon = nums[1];
			// if (0 <= lat && lat <= 180 && -90 <= lon && lon <= lon) {
		// var pRequest = { 'rect': {'sw': {'lat': lat - 0.01, 'lng': lon - 0.01},
									// 'ne': {'lat': lat - 0 + 0.01, 'lng': lon - 0 + 0.01}}};
		// var pOptions = { 'width': 450, 'height': 100, 'columns': 10, 'rows': 1, 'croppedPhotos': true, 'orientation': panoramio.PhotoListWidgetOptions.Orientation.HORIZONTAL };
		// self.pWidget = new panoramio.PhotoListWidget('panoramioPics', pRequest, pOptions);
		// panoramio.events.listen(self.pWidget, panoramio.events.EventType.PHOTO_CHANGED, function(event) {
			// var photos = self.pWidget.getPhotos();
			// console.log("num Pano Photos: "+photos.length);
			// console.log(photos);
			// var counter = 0;
			// for (var i = 0; i < photos.length; i++) {
				// if (null != photos[i]) {
					// counter++;
				// };
			// };
			// console.log("actual number of pano photos: " + counter);
			// self.numPanoramioThumbs(counter);
			// self.panoramioAttrib();
		// });
		// self.pWidget.setPosition(0);
			// }
		// }
	// };
	// this.panoramioAttrib = ko.computed(function() {
// console.log("panoramioAttrib");
		// if (0 < self.numPanoramioThumbs()) {
// console.log("empty");
			// return "";
		// }
		// else
		// {
// console.log("None nearby");
			// return "No nearby Panoramio pics available"
		// }
	// });
/***************End Pano *****************/

	// this.splashThumbs = ko.computed(function() {
		// var thumbs = [
			// {
				// pic: "images/Largemouth bass 1.jpg",
				// height: "77",
				// width: "51",
				// linkBack: "images/Largemouth bass 1.jpg"
			// },
			// {
				// pic:"images/Smallmouth bass.jpg",
				// height:"77",
				// width:"51",
				// linkBack:"images/Smallmouth bass.jpg"
			// },
			// {
				// pic:"images/Largemouth bass 2.jpg",
				// height:"77",
				// width:"51",
				// linkBack:"images/Largemouth bass 2.jpg"
			// },
			// {
				// pic:"images/Muskie 1.jpg",
				// height:"51",
				// width:"77",
				// linkBack:"images/Muskie 1.jpg"
			// },
			// {
				// pic:"images/Muskie 2.jpg",
				// height:"51",
				// width:"77",
				// linkBack:"images/Muskie 2.jpg"
			// },
			// {
				// pic:"images/Walleye.jpg",
				// height:"51",
				// width:"77",
				// linkBack:"images/Walleye.jpg"
			// }
		// ];
		// return thumbs;
	// });
}