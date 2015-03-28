console.log("Hello, from main.js");

var ViewModel = function() {
	var self = this;
	self.firstLake = ko.observable(new LakeInfo("Broken", "www.broken.com"));
	self.lakes = ko.observableArray();
	self.lakeScraper = new LakeScraper(self.lakes);
	self.currentLake = ko.observable(self.lakes()[0]);
	
	self.setCurrentLake = function(theLake) {
		self.currentLake(theLake);
	};
};


var viewModel = new ViewModel()

// ViewModel.doneFunc = function() {
// console.log("I am:");
	// console.log(this);
	// console.log("number of lakes:"+this.lakes().length);
	// console.log("done scraping, applying bindings");
// console.log("viewModel is:");
// console.log(viewModel);
	// viewModel.taggie();
	// viewModel.firstLake(this.lakes()[0]);
	// ko.applyBindings(viewModel);
// };

ko.applyBindings(viewModel);
viewModel.lakeScraper.init();