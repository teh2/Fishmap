console.log("Hello, from main.js");

var ViewModel = function() {
	var self = this;
	self.lakes = ko.observableArray();
	self.lakeScraper = new LakeScraper(self.lakes);
	self.currentLake = ko.observable(self.lakes()[0]);
	
	self.setCurrentLake = function(theLake) {
		self.currentLake(theLake);
	};
};


var viewModel = new ViewModel()

ko.applyBindings(viewModel);
viewModel.lakeScraper.init();