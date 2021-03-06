/**
* MapVM manages the display of everything that goes on the map.
* That includes the markers and the popup window. So, indirectly, it manages
* the FlickrVM and the PanoramioVM as well, but most of that is done through the
* associated KO bindings.
*
**/
var MapVM = function() {
	var self = this;

	this.map;
	this.infoWindow;
	this.selectedLake;
	this.selectedMarker;

	this.setMap = function(aMap) {
		self.map = aMap;
	};

	/**
	* getIconUrl returns the appropriate icon for the given lake.
	* The icon gets used later as the map marker image.
	*
	* Currently, there are two different images - the regular image, and
	* another one for lakes with unknown species (empty species list).
	*
	* Note: keep this in sync with getSelectedIconUrl.
	**/
	this.getIconUrl = function(aLake) {
		if (0 < aLake.species().length) {
			return "images/fishicon.png";
		}
		else {
			return "images/unkfishicon.png";
		}
	};

	/**
	* get SelectedIconUrl retrns the appropriate icon for the given lake
	* when the lake is selected. The icon gets used later as the map marker image.
	*
	* Currently, there are two different images - the regular image, and
	* another one for lakes with unknown species (empty species list).
	*
	* Note: keep this in sync with getIconUrl.
	**/
	this.getSelectedIconUrl = function(aLake) {
		if (0 < aLake.species().length) {
			return "images/selfishicon.png";
		}
		else {
			return "images/unkselfishicon.png";
		}
	};

	/**
	* buildMarker gathers all of the information necessary to successfully
	* create a google.maps.Marker object.
	**/
	this.buildMarker = function(aLake) {
		if (0 < aLake.latlon().length) {
		// where to put it on the map:
			var nums = aLake.latlon().split(",");
			var ll = new google.maps.LatLng(nums[0], nums[1]);
			//What it looks like:
			var img = {
				url: self.getIconUrl(aLake),
				size: new google.maps.Size(32, 32),
				origin: new google.maps.Point(0,0),
				anchor: new google.maps.Point(20, 16)
			};
			//Build the object:
			var marker = new google.maps.Marker({
				map: null,
				position: ll,
				title: aLake.name(),
				icon: img
			});
			//Last, but not least, hook it up so it works when you click it:
			aLake.marker(marker);
			google.maps.event.addListener(marker, 'click', function() {
				viewModel.setCurrentLake(aLake);
			});
		}
	};

	/**
	* loadMapApi initializes the google.maps API
	*
	* See: https://developers.google.com/maps/documentation/javascript/tutorial
	**/
	this.loadMapApi = function() {
//console.log("loadMapApi");
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC5nj4Q9nLWhbewfJYIjARH-HheRPHCKgE' +
			'&callback=showMap'; //&signed_in=true
		document.body.appendChild(script);
	};

	/**
	* removeMapMarkers pulls all of the pins out of the map when the filters change.
	*
	* Note: this iterates through the full lakes list, not the filtered list, because
	* the filtered list is already updated for the new filter settings by the time this
	* is triggered.
	**/
	this.removeMapMarkers = function() {
		viewModel.lakes().forEach(function(aLake) {
			if (aLake.marker()) {
				aLake.marker().setMap(null);
			}
		});
	};

	/**
	* addMapMarkers puts the appropriate pins on the map to match the current state
	* of the filters.
	*
	* Note: use the filtered lakes list, because the filter settings are updated
	* already by the time this it triggered.
	**/
	this.addMapMarkers = function() {
		var bounds = new google.maps.LatLngBounds();
		bounds.extend(self.map.getCenter());
		viewModel.getFilteredLakes().forEach(function(aLake) {
			if (typeof aLake.marker() !== "undefined") {
				aLake.marker().setMap(self.map);
				bounds.extend(aLake.marker().getPosition());
			}
		});
		self.map.fitBounds(bounds);
	};

	/**
	* wireUpMapMarkers to the filteredLakes list so that when the filter settings
	* change, the pins are pulled and replaced as necessary to match.
	**/
	this.wireUpMapMarkers = function() {
		//This next line is quite a special case. It has to refer to
		//the ko.computed itself, and not the array that is typically
		//returned from it. Decoupling this VM from that one would be
		//significantly more trouble than it's worth.
		lakeListVM.filteredLakes.subscribe(function(newList) {
			self.removeMapMarkers();
			self.addMapMarkers();
		});
	};

	/**
	* setupInfoWindow prepares the information that the popup window will need in
	* the displayInfo routine below.
	**/
	this.setupInfoWindow = function() {
//console.log("setupInfoWindow");
		self.unselectMarker();
		self.selectedLake = viewModel.getCurrentLake();
		self.selectMarker();
		viewModel.setLocation(self.selectedLake.lat(), self.selectedLake.lon());
	};

	/**
	* displayInfo is where the popup actually gets opened up.
	*
	* Note that it's called from the MapVM after the FlickrThumbs are updated.
	* If it gets called too soon, then the thumbs are not displayed until the
	* next lake is clicked.
	**/
	this.displayInfo = function() {
//console.log("displayInfo");
		self.infoWindow.setContent($('#lakeDetails').html());
		self.infoWindow.open(self.map, self.selectedLake.marker());
	};

	/**
	* unselectMarker changes the selected icon's marker back to the unselected image
	* in preparation for a new marker to be selected.
	**/
	this.unselectMarker = function() {
		if (typeof self.selectedMarker === 'undefined') { return; }
		var img = {
			url: self.getIconUrl(self.selectedLake),
			size: new google.maps.Size(32, 32),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(20, 16)
		};
		self.selectedMarker.setIcon(img);
	};

	/**
	* selectMarker changes the selected marker's image to the selected version
	* so the user can easily identify it on the map.
	**/
	this.selectMarker = function() {
		self.selectedMarker = self.selectedLake.marker();
		var img = {
			url: self.getSelectedIconUrl(self.selectedLake),
			size: new google.maps.Size(32, 32),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(20, 16)
		};
		self.selectedMarker.setIcon(img);
	};
};

/**
* showMap isa global function (not scoped to an object) because it's a callback that is
* triggered when the google.maps API is completely loaded and ready to go. (See the
* loadMapApi routine above.)
*
* Note that we also initialize the main controller when the map is fully loaded. It doesn't
* make sense to fire up the main page any earlier, because the map won't be ready yet.
*
* In a blatant selfish move, I've set the initial center of the map to the most important
* spot in the state - my location. Fishmap version 2.0 will sport a "current location"
* button that will recenter the map to the current user's location.
**/
function showMap() {
//console.log("showMap");
	var mapOptions = {
		center: { lat: 42.105287, lng: -87.939661},
		zoom: 8
	};
	var mapView = $('#mapView')[0];
	mapVM.setMap(new google.maps.Map(mapView, mapOptions));
	mapVM.infoWindow = new google.maps.InfoWindow({
		content: $('#lakeDetails').html()
	});
	
	viewModel.init();
};
