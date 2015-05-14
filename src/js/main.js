/**
* ViewModel is actually more of a controller. It orchestrates communications between the various viewe model objects that manage the different parts of the screen.
*
* It contains a significant amount of commented out code that deals with the LakeScraper object. This object is not in use at present. Initially, I intended to scrape the lake info directly from ifishillinois.org at run time. But it became obvious that that strategy was going to be quite brittle. ifishillinois.org does not contain all of the information necessary for representing a lake in Fishmap and the coordination between the scraped data and the internal data became a nightmare. LakeScraper remains here because at some point in the future, ifishillinois may update their site with more lakes and/or more lake information. Fishmap local data will be updated at that time by rerunning the LakeScraper.
*
* Note: This would be much more appropriately known as the controller, or the octopus (reference to the uDacity JS course). But, it's deeply ingrained in the code base (as all controllers must be) and therefore I've decided to leave it alone until I begin work on version 2.0.
**/
var ViewModel = function() {

	var self = this;
	this.lakes = ko.observableArray();
	this.filters = new Filters();

//This code is part of the lakeScraper functionality...
//	this.lakeScraper = new LakeScraper(self.lakes);

	/**
	* setCurrentLake - when the user clicks a lake (either in the list or on the map) distribute that information to the various parts of the interface.
	**/
	this.setCurrentLake = function(theLake) {
// console.log("setCurrentLake:"+theLake.name());
		var currLake = lakeInfoVM.currentLake();
		if (typeof currLake !== "undefined") {
			currLake.selected(false);
		}
		theLake.selected(true);
		lakeInfoVM.currentLake(theLake);
		$('.row-offcanvas').toggleClass('active', false);
		mapVM.setupInfoWindow();
	};

	/**
	* The following are some helpers that manage interactions between the various parts of the interface. Mainly just passing through changes from one part to another to keep them all coordinated.
	**/
	this.getCurrentLake = function() {
		return lakeInfoVM.currentLake();
	};

	this.getFilteredLakes = function() {
		return lakeListVM.filteredLakes();
	};

	this.setLocation = function(lat, lon) {
		flickrVM.setLocation(lat, lon);
		panoramioVM.setLocation(lat, lon);
		//One last thing... We have to tell the Google Maps API that we want to see our popup window, with the pics in it...
		mapVM.displayInfo();
	};

	this.buildMapMarker = function(aLake) {
		mapVM.buildMarker(aLake);
	};

	//This code is part of the lakeScraper functionality...
	// this.dump = function() {
		// var dumpStr = ko.toJSON(self.lakes, ["name", "href", "county", "species"]);
		// console.log("Lake data:");
		// console.log(dumpStr);
	// };


	/**
	* init - things that need to be done once when the app is getting itself started.
	* At first, the user sees the splash page. Then, when all of the startup stuff is finished, switch to the map page.
	**/
	this.init = function() {
// console.log("viewmodel.init()");
		mapVM.wireUpMapMarkers();
		lakeListVM.loadLakeData();
		filtersVM.setupFiltersMenu();
		panoramioVM.init();
		//When everything is ready, switch from the splash to the map:
		$('#splashPage').hide();
		$('#contentPage').show();
	};


};

/**
* document.ready happens after everything gets pulled from server to client. At this point, we want to fire up all of the viewmodel objects and wire them to the appropriate parts of the HTML. Last, and certainly not least, we want to fire up the Google Maps API, so we initialize it here.
**/
var viewModel;
var filtersVM;
var lakeListVM;
var mapVM;
var flickrVM;
var lakeInfoVM;
var panoramioVM;

$(document).ready(function() {
// console.log("Hello, from main.js");

	viewModel = new ViewModel();
	ko.applyBindings(viewModel, $('#fishmap-header')[0]);

	filtersVM = new FiltersVM(viewModel.filters);
	ko.applyBindings(filtersVM, $('#filtering')[0]);

	lakeListVM = new LakeListVM(viewModel.filters);
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
//	$('button').click(function() {
//		console.log("button clicked... jsonify the lakes data...");
//		viewModel.dump();
//	});

	mapVM.loadMapApi();
});
