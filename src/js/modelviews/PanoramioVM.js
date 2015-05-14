/**
* PanoramioVM manages the retrieving and display of thumbnails from Panoramio.
*
* The trick here is that Panoramio isn't called via ajax directly. Instead, you instantiate
* a Panoramio Widget, and that widget manages the thumbnails for you. It's actually pretty
* slick, because it's got LOTS of options. But we treat it as a fairly basic horizontal
* scrolling ribbon of thumbs.
**/
var PanoramioVM = function() {
	var self = this;
	//The target location for the image search.
	//Note: these original values don't ever actually get used.
	this.lat = ko.observable("42.105287");
	this.lon = ko.observable("-87.939661");

	/**
	* setLocation is the routine that triggers the widget to retrieve new thumbs from
	* Panoramio.
	**/
	this.setLocation = function(aLat, aLon) {
		if (-90 <= aLat && aLat <= 90 && -180 <= aLon && aLon <= 180) {
			self.lat(aLat);
			self.lon(aLon);
			self.panoramioThumbs();
		}
	};

	/**
	* We need some local objects to hold the widget and its contents
	**/
	this.pWidget;
	this.numPanoramioThumbs = ko.observable(0);

	/**
	* initial setup of the Widget. Should run once at startup time.
	**/
	this.init = function() {
		//Where, geographically, are we looking for pics?
		var pRequest = { 'rect':
			{'sw': {'lat': self.lat() - 0.01, 'lng': self.lon() - 0.01},
				'ne': {'lat': self.lat() - 0 + 0.01, 'lng': self.lon() - 0 + 0.01}}};
		//How do we want the widget set up?
		var pOptions = { 'width': 450, 'height': 100, 'columns': 10, 'rows': 1, 'croppedPhotos': true, 'orientation': panoramio.PhotoListWidgetOptions.Orientation.HORIZONTAL };
		//Ok, build the widget.
		self.pWidget = new panoramio.PhotoListWidget('panoramioPics', pRequest, pOptions);
		//Count the number of thumbs we got back (for later use in panoramioAttrib).
		panoramio.events.listen(self.pWidget, panoramio.events.EventType.PHOTO_CHANGED, function(event) {
			var photos = self.pWidget.getPhotos();
			var counter = 0;
			for (var i = 0; i < photos.length; i++) {
				if (null !== photos[i]) {
					counter++;
				}
			}
			self.numPanoramioThumbs(counter);
			self.panoramioAttrib();
		});
		self.pWidget.setPosition(0);
	};
	
	/**
	* panoramioThumbs manages the retrieval and display of thumbnails from Panoramio.
	**/
	this.panoramioThumbs = function() {
		//Where, geographically, are we looking for pics?
		var pRequest = { 'rect':
			{'sw': {'lat': self.lat() - 0.01, 'lng': self.lon() - 0.01},
				'ne': {'lat': self.lat() - 0 + 0.01, 'lng': self.lon() - 0 + 0.01}}};
		self.pWidget.setRequest(pRequest);
		self.pWidget.setPosition(0);
		//One last thing... We have to tell the Google Maps API that we want to see our popup window, with the pics in it...
		//mapVM.displayInfo();
	};

	/**
	* If there aren't any pics to see here, let the user know.
	*
	* Right now, KO often gets confused and refuses to update the page with this info.
	**/
	this.panoramioAttrib = ko.computed(function() {
//console.log("panoramioAttrib");
		if (0 < self.numPanoramioThumbs()) {
			//This part shouldn't ever get displayed, because the widget should override it.
			return "pics";
		}
		else
		{
			return "No nearby Panoramio pics available";
		}
	});
};