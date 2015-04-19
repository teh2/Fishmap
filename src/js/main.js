
var ViewModel = function() {
	var self = this;
	this.lakes = ko.observableArray();

//This code is part of the lakeScraper functionality...
//	this.lakeScraper = new LakeScraper(self.lakes);


//	this.currentLake = ko.observable(self.lakes()[0]);


	this.setCurrentLake = function(theLake) {
console.log("setCurrentLake:"+theLake.name());
		lakeInfoVM.currentLake(theLake);
		mapVM.displayInfo();
	};
	
	this.getCurrentLake = function() {
		return lakeInfoVM.currentLake();
	};

	//This code is part of the lakeScraper functionality...
	// this.dump = function() {
		// var dumpStr = ko.toJSON(self.lakes, ["name", "href", "county", "species"]);
		// console.log("Lake data:");
		// console.log(dumpStr);
	// };


	this.init = function() {
		mapVM.wireUpMapMarkers();
		lakeListVM.loadLakeData();
		filtersVM.setupFiltersMenu();
	};


};

var viewModel;
var filtersVM;
var lakeListVM;
var mapVM;
var flickrVM;
var lakeInfoVM;
var panoramioVM;

$(document).ready(function() {
	console.log("Hello, from main.js");

	viewModel = new ViewModel();
	ko.applyBindings(viewModel, $('#fishmap-header')[0]);

	filtersVM = new FiltersVM();
	ko.applyBindings(filtersVM, $('#filtersMenu')[0]);

	lakeListVM = new LakeListVM();
	ko.applyBindings(lakeListVM, $('#lakeList')[0]);

	mapVM = new MapVM();
	ko.applyBindings(mapVM, $('#mapView')[0]);

	lakeInfoVM = new LakeInfoVM();
	ko.applyBindings(lakeInfoVM, $('#lakeInfo')[0]);

	flickrVM = new FlickrVM();
	ko.applyBindings(flickrVM, $('#flickrPics')[0]);

	panoramioVM = new PanoramioVM();
	ko.applyBindings(panoramioVM, $('#panoramioPics')[0]);

	//This code is part of the lakeScraper functionality...
//	viewModel.lakeScraper.init();
	// $('button').click(function() {
		// console.log("button clicked... jsonify the lakes data...");
		// viewModel.dump();
	// });

	mapVM.loadMapApi();
});
