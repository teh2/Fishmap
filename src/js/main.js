
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
		NE: ko.observable(false),
		WC: ko.observable(false),
		EC: ko.observable(true),
		S: ko.observable(false)
	});

	self.filteredLakes = ko.computed(function() {
		var filtered = [];
		// console.log("filters:");
		// console.log(self.areaFilters());
//		console.log("NW:"+self.areaFilters().NW());
		// self.areaFilters["NE"];
		// self.areaFilters["WC"];
		// self.areaFilters["EC"];
		// self.areaFilters["S"];
		self.lakes().forEach(function(aLake) {
//			console.log("area:"+aLake.area());
			if ("" != aLake.area()) {
//				console.log("filter:"+self.areaFilters()[aLake.area()]());
				if (self.areaFilters()[aLake.area()]()) {
	//				console.log("filtering-add:"+aLake.name());
					filtered[filtered.length] = aLake;
				};
			};
		});
		// console.log("filtered list:");
		// console.log(filtered);
		return filtered;
	});
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
			});
//Add filtering here -->
			self.lakes.push(info);
		});
	};
	self.loadMapApi = function() {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC5nj4Q9nLWhbewfJYIjARH-HheRPHCKgE' +
			'&callback=showMap'; //&signed_in=true
		document.body.appendChild(script);
	};
	


	self.addMapMarkers = function() {
		var fishSymbol = {
						path: "M 0 5 C 5 0 5 0 20 10 C 17 5 17 5 20 0 C 5 10 5 10 0 5 z",
						fillColor: 'green',
						fillOpacity: 0.5
						};
		var bounds = new google.maps.LatLngBounds();
		bounds.extend(self.map.getCenter());
		self.lakes().forEach(function(info) {
			if (0 < info.latlon().length) {
//Add filtering here -->
				var nums = info.latlon().split(",");
				var ll = new google.maps.LatLng(nums[0], nums[1]);
				var marker = new google.maps.Marker({
					map: self.map,
					position: ll,
					title: info.name(),
					icon: fishSymbol
				});
				info.marker(marker);
				bounds.extend(ll);
				google.maps.event.addListener(marker, 'click', function() {
					self.setCurrentLake(info);
					self.displayInfo(self.map);
					// var iwContent = "<div>" + info.name() + ", " + info.county() + " county</div>";
					// iwContent = iwContent + "<a href='http://www.ifishillinois.org"+info.href()+"'>lake report at ifishillinois.org</a>"; 
					// self.infoWindow.setContent(iwContent);
					// self.infoWindow.open(map, marker);
				});
			};
		});
		self.map.fitBounds(bounds);
		// var iwc = '<div data-bind="with: currentLake"><div data-bind="text: place"></div><div>Ta Da!</div></div>';
		self.infoWindow = new google.maps.InfoWindow({
			content: $('#lakeDetails').html()
		});
	};
	self.displayInfo = function() {
//		var iwc = '<div data-bind="with: currentLake"><div data-bind="text: place"></div><div>Ta Da!</div></div>';
		// var iwContent = "<div>" + info.name() + ", " + info.county() + " county</div>";
		// iwContent = iwContent + "<a href='http://www.ifishillinois.org"+info.href()+"'>lake report at ifishillinois.org</a>"; 
		self.infoWindow.setContent($('#lakeDetails').html());
		self.infoWindow.open(self.map, self.currentLake().marker());
console.log("NW:"+self.areaFilters()["NW"]()+",NE:"+self.areaFilters()["NE"]()+",WC:"+
	self.areaFilters()["WC"]()+",EC:"+self.areaFilters()["EC"]()+",S:"+self.areaFilters()["S"]());
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
	viewModel.addMapMarkers();
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
	viewModel.loadLakeData();
	viewModel.loadMapApi();
	viewModel.setupFiltersMenu();
});
