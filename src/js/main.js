
var ViewModel = function() {
	var self = this;
	self.lakes = ko.observableArray();
//	self.lakeScraper = new LakeScraper(self.lakes);
	self.currentLake = ko.observable(self.lakes()[0]);
	
	self.setCurrentLake = function(theLake) {
		self.currentLake(theLake);
	};
	// self.dump = function() {
		// var dumpStr = ko.toJSON(self.lakes, ["name", "href", "county", "species"]);
		// console.log("Lake data:");
		// console.log(dumpStr);
	// };
	self.loadLakeData = function() {
		LakeData.forEach(function(aLake) {
console.log("loading:" + aLake.name);
			var info = new LakeInfo(aLake.name, aLake.href);
			info.county(aLake.county);
			info.latlon(aLake.latlon);
			aLake.species.forEach(function(aSpecies) {
				info.species.push(aSpecies);
			});
			self.lakes.push(info);
		});
	}
};

$(document).ready(function() {
	console.log("Hello, from main.js");

	var viewModel = new ViewModel()

	ko.applyBindings(viewModel);
//	viewModel.lakeScraper.init();
	// $('button').click(function() {
		// console.log("button clicked... jsonify the lakes data...");
		// viewModel.dump();
	// });
	viewModel.loadLakeData();
});