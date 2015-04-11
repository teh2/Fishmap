
var ViewModel = function() {
	var self = this;
	self.map; //Note: the map is not an observable. Why?
	self.setMap = function(aMap) {
		self.map = aMap;
	};
	self.lakes = ko.observableArray();
//	self.lakeScraper = new LakeScraper(self.lakes);
	self.currentLake = ko.observable(self.lakes()[0]);
	self.infoWindow;

	self.areaFilters = ko.observable({
		NW: ko.observable(false),
		NE: ko.observable(true),
		WC: ko.observable(false),
		EC: ko.observable(false),
		S: ko.observable(false)
	});

	self.speciesFilters = ko.observableArray();

	self.sortedSpeciesFilters = ko.computed(function() {
		var sorted = self.speciesFilters().sort(function(a,b) {
			var aVal = a().name().valueOf();
			var bVal = b().name().valueOf();
			if (aVal < bVal)
				return -1;
			else if (bVal < aVal)
				return 1;
			else
				return 0;
		});
		return sorted;
	});
	
	self.filteredLakes = ko.computed(function() {
		var filtered = [];
		self.lakes().forEach(function(aLake) {
			if ("" != aLake.area()) {
				if (self.areaFilters()[aLake.area()]()) {
					if (self.hasChosenSpecies(aLake)) {
						filtered[filtered.length] = aLake;
					};
				};
			};
		});
		return filtered;
	});

	self.hasChosenSpecies = function(theLake) {
		if (0 < theLake.species().length) {
			for (var i = 0; i < self.speciesFilters().length; i++) {
				var sFilter = self.speciesFilters()[i];
			//self.speciesFilters().some(function(sFilter) {
//console.log("checking: " + sFilter().name() + " against " + theLake.name());
				if (sFilter().value()) {
					if (-1 != $.inArray(sFilter().name(), theLake.species())) {
//console.log("  found!");
						return true;
					};
				};
				//return false;
			};
		};
		return false;
	};

	self.setCurrentLake = function(theLake) {
		self.currentLake(theLake);
		self.displayInfo();
	};
	// self.dump = function() {
		// var dumpStr = ko.toJSON(self.lakes, ["name", "href", "county", "species"]);
		// console.log("Lake data:");
		// console.log(dumpStr);
	// };
	self.loadLakeData = function() {
		LakeData.forEach(function(aLake) {
//console.log("loading:" + aLake.name);
			var info = new LakeInfo(aLake.name, aLake.href);
			info.county(aLake.county);
			info.latlon(aLake.latlon);
			info.area(aLake.area);
			aLake.species.forEach(function(aSpecies) {
				info.species.push(aSpecies);
				//If not there already, add species to speciesFilters...
				self.addSpeciesFilter(aSpecies);
			});
			self.buildMarker(info);
			self.lakes.push(info);
		});
		self.setInitialSpeciesFilterThreshold(10);
	};

	//Note: only adds it if it's not already there...
	self.addSpeciesFilter = function(name) {
		var foundIt = false;
		self.speciesFilters().forEach(function(sFilter) {
			if (sFilter().name().valueOf() == name.valueOf()) {
				foundIt = true;
				sFilter().count(sFilter().count() + 1);
			};
		});
		if (!foundIt) {
			self.speciesFilters.push(ko.observable(new SpeciesFilter(name, true)));
		};
	};

	self.setInitialSpeciesFilterThreshold = function(max) {
		self.speciesFilters().forEach(function(sFilter) {
			if (sFilter().count() < max) {
				sFilter().value(false);
			};
		});
	};

	self.buildMarker = function(info) {
		var fishSymbol = {
						path: "M 0 5 C 5 0 5 0 20 10 C 17 5 17 5 20 0 C 5 10 5 10 0 5 z",
						fillColor: 'green',
						fillOpacity: 0.5
						};
		if (0 < info.latlon().length) {
			var nums = info.latlon().split(",");
			var ll = new google.maps.LatLng(nums[0], nums[1]);
			var marker = new google.maps.Marker({
				map: null,
				position: ll,
				title: info.name(),
				icon: fishSymbol
			});
			info.marker(marker);
			google.maps.event.addListener(marker, 'click', function() {
				self.setCurrentLake(info);
				self.displayInfo(self.map);
				// var iwContent = "<div>" + info.name() + ", " + info.county() + " county</div>";
				// iwContent = iwContent + "<a href='http://www.ifishillinois.org"+info.href()+"'>lake report at ifishillinois.org</a>"; 
				// self.infoWindow.setContent(iwContent);
				// self.infoWindow.open(map, marker);
			});
		};
	};
	
	self.loadMapApi = function() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC5nj4Q9nLWhbewfJYIjARH-HheRPHCKgE' +
			'&callback=showMap'; //&signed_in=true
		document.body.appendChild(script);
	};


	self.removeMapMarkers = function() {
		self.lakes().forEach(function(aLake) {
			if (aLake.marker()) {
				aLake.marker().setMap(null);
			}
		});
	};

	self.addMapMarkers = function() {
		// var fishSymbol = {
						// path: "M 0 5 C 5 0 5 0 20 10 C 17 5 17 5 20 0 C 5 10 5 10 0 5 z",
						// fillColor: 'green',
						// fillOpacity: 0.5
						// };
		var bounds = new google.maps.LatLngBounds();
		bounds.extend(self.map.getCenter());
		self.filteredLakes().forEach(function(info) {
			if (typeof info.marker() !== "undefined") {
				// var nums = info.latlon().split(",");
				// var ll = new google.maps.LatLng(nums[0], nums[1]);
				// var marker = new google.maps.Marker({
					// map: self.map,
					// position: ll,
					// title: info.name(),
					// icon: fishSymbol
				// });
				info.marker().setMap(self.map);
				// info.marker(marker);
				bounds.extend(info.marker().getPosition());
				// google.maps.event.addListener(marker, 'click', function() {
					// self.setCurrentLake(info);
					// self.displayInfo(self.map);
					// var iwContent = "<div>" + info.name() + ", " + info.county() + " county</div>";
					// iwContent = iwContent + "<a href='http://www.ifishillinois.org"+info.href()+"'>lake report at ifishillinois.org</a>"; 
					// self.infoWindow.setContent(iwContent);
					// self.infoWindow.open(map, marker);
				// });
			};
		});
		self.map.fitBounds(bounds);
		// var iwc = '<div data-bind="with: currentLake"><div data-bind="text: place"></div><div>Ta Da!</div></div>';
	};

	self.wireUpMapMarkers = function() {
		self.filteredLakes.subscribe(function(newList) {
			self.removeMapMarkers();
			self.addMapMarkers();
		});
	};
	
	self.init = function() {
		viewModel.wireUpMapMarkers();
		viewModel.loadLakeData();
		viewModel.setupFiltersMenu();
	};


	self.displayInfo = function() {
		self.infoWindow.setContent($('#lakeDetails').html());
		self.infoWindow.open(self.map, self.currentLake().marker());
	};

	self.setupFiltersMenu = function() {
		$('#filtersMenu .dropdown-menu li').on({
			"click":function(e){
				e.stopPropagation();
			}
		});
	};
};

function showMap() {
	var mapOptions = {
		center: { lat: 42.105287, lng: -87.939661},
		zoom: 8
	};
	var mapView = $('.mapView')[0];
	viewModel.setMap(new google.maps.Map(mapView, mapOptions));
	// console.log("maptype:"+map.getMapTypeId());
	// console.log("mapctr:"+map.getCenter());
	// console.log("mapzoom:"+map.getZoom());
// console.log("showMap-map-bounds:"+map.getBounds());
	// viewModel.addMapMarkers();

	viewModel.infoWindow = new google.maps.InfoWindow({
		content: $('#lakeDetails').html()
	});
	
	viewModel.init();
};

var viewModel;

$(document).ready(function() {
	console.log("Hello, from main.js");

	viewModel = new ViewModel()

	ko.applyBindings(viewModel);
//	viewModel.lakeScraper.init();
	// $('button').click(function() {
		// console.log("button clicked... jsonify the lakes data...");
		// viewModel.dump();
	// });
	viewModel.loadMapApi();
});
