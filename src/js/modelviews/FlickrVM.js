/**
* FlickrVM manages the retrieving and display of thumbnails from flickr.
*
* The basic operation here is to make an ajax call to Flickr's photo search API and display the first ten results as thumbnails.
**/
var FlickrVM = function() {
	var self = this;
	//The geographic location where we wish to find photos.
	//The initial values are never displayed.
	this.lat = ko.observable("42.105287");
	this.lon = ko.observable("-87.939661");

	/**
	* each time setLocation is called, it triggers the flicrRetriever routine which goes out to flickr and pulls thumbnails for the given location.
	**/
	this.setLocation = function(aLat, aLon) {
		//validate that each input is a string representation of a number where
		// (-90 <= lat <= 90) and (-180 <= lon <= 180). (IE: a valid latitude and longitude.)
		if (-90 <= aLat && aLat <= 90 && -180 <= aLon && aLon <= 180) {
			self.lat(aLat);
			self.lon(aLon);
			self.flickrRetriever();
		}
	};

	// The list of thumbnails that we intend to display. Filled in below...
	this.flickrThumbs = ko.observableArray();

	//How many thumbs do we have to work with?
	this.numFlickrThumbs = ko.computed(function() {
		return self.flickrThumbs().length;
	});

	/**
	* Here's the meat and potatos of this VM. Using the lat/lon that we were just given, go to Flickr and retrieve some thumbnails. We set up the inputs to the Flickr API such that we're grabbing pics from a one mile circle around the lat/lon point representing the lake.
	**/
	this.flickrRetriever = function() {
		var api_method = "flickr.photos.search";
		var api_key = "5851fa6100659e952dc816ed4c670568";

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
				"&lat=" + self.lat() +
				"&lon=" + self.lon() +
				"&radius=" + radius +
				"&radius_units=" + radiusUnits +
				"&extras=" + extras +
				"&per_page=" + perPage +
				"$page=" + whichPage +
				"&format=" + format +
				"&nojsoncallback=" + nojsoncallback;
		//Ok, we've got everything ready, let's go to Flickr
		$.ajax({
			url: searchUrl,
			type: "get",
			dataType: "json",
			success: function(data) {
				//Back from Flickr, let's see what we got...
				var thumbs = [];
				//Only looking for ten or less...
				var numThumbs = 10;
				if (data.photos.total < numThumbs)
					numThumbs = data.photos.total;
				// Build a thumbnail object for each one.
				for (var i = 0; i < numThumbs; i++) {
					var photoInfo = data.photos.photo[i];
					var thumb = {};
					thumb.pic = photoInfo.url_s;
					thumb.height = "50";
					thumb.width = "50";
					thumb.linkBack = "https://www.flickr.com/photos/"+photoInfo.owner+"/"+photoInfo.id;
					thumbs.push(thumb);
				}
				//When we've got them all, stuff them in the KO object so they can be propagated out to the display.
				self.flickrThumbs(thumbs);
				//One last thing... We have to tell the Google Maps API that we want to see our popup window, with the pics in it...
				//mapVM.displayInfo();
			},
			error: function(xhr, stat, thrown) {
				//In reality, we want to swallow this error, and carry on
				// because the app works fine, even without any pictures.
				console.log("xhr.stat:"+xhr.status);
				console.log("xhr.responseText:"+xhr.responseText);
				console.log(stat+":"+thrown);
				//However, what we could try is running the ajax call again,
				//since the most common error we get here is an intermittent error.
				//That's a job for Fishmap 2.0. For now, we'll just drop on down below and tell the user that we have no pics...
			}
		});
		return true;
	};

	/**
	* This neat little bit of code serves two very important purposes.
	* First, it gives credit where credit is due... to the amazing Flickr photographers.
	* Second, if there aren't any pics, it gives the user a heads up that there's nothing to see.
	**/
	this.flickrAttrib = ko.computed(function() {
		if (0 < self.numFlickrThumbs()) {
			return "Pics by flickr users";
		}
		else
		{
			return "No nearby flickr pics available";
		}
	});
};