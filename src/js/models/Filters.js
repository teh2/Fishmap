/**
* Filters holds the state of the various filters. Filters come in essentially two varieties. The state is divided up into geographical regions. Each lake is assigned to one region depending on where it falls within the state. In addition, we gather up a list of all of the different fish species listed in the lake data so that we can create a checkbox filter for each one.
*
* An interesting future enhancement in version 2.0 will be to store the state of these filters locally on the user's device.
**/
var Filters = function() {
	var self = this;

	/**
	* areaFilters decide which lakes, from what part(s) of the state, will be displayed in both the map and the sidebar list. Note that in a blatant act of self interest, I have initialized Fishmap so that it will show me lakes near me when it first starts up.
	**/
	this.areaFilters = ko.observable({
		NW: ko.observable(false),
		NE: ko.observable(true),
		WC: ko.observable(false),
		EC: ko.observable(false),
		S: ko.observable(false)
	});

	/**
	* speciesFilters holds a filter for each species of fish listed in the data for any lake in the state.
	**/
	this.speciesFilters = ko.observableArray();

	/**
	* searchStr holds the string value of an input field that allows the user to type a partial lake name, or species name, and have the map and list filtered based on that. Note that an empty string matches all lakes and all species... Also note that the areaFilters take precedence. The searchStr will not show lakes that are in unselected areas of the state.
	**/
	this.searchStr = ko.observable("");

	/**
	* sortedSpeciesFilters makes it easy for the user to find a particular species in the extensive list of species filters. Note that the sorting function assumes that all of the species are defined with the same 'case' (IE: initial capital, followed by all lowercase letters).
	**/
	this.sortedSpeciesFilters = ko.computed(function() {
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
	

	/**
	* addSpeciesFilter takes in a species name, scans the existing list of filters to see if it's new, or existing. If new, it adds the name as a new filter in the list. Note that it assumes that all instances of species name match the same 'case' (initial capital, all lower, etc).
	**/
	this.addSpeciesFilter = function(name) {
		var foundIt = false;
		self.speciesFilters().forEach(function(sFilter) {
			if (sFilter().name().valueOf() == name.valueOf()) {
				foundIt = true;
				sFilter().count(sFilter().count() + 1);
			}
		});
		if (!foundIt) {
			self.speciesFilters.push(ko.observable(new SpeciesFilter(name, true)));
		}
	};

	/**
	* setInitialSpeciesFilterThreshold turns off the filter for any species that doesn't show up in enough lake lists to meet the threshold. This should be run once when the app first starts up. Thereafter, the user can add in species that are less common. The intent here is to not overwhelm the user with everything all at once.
	**/
	this.setInitialSpeciesFilterThreshold = function(max) {
		self.speciesFilters().forEach(function(sFilter) {
			if (sFilter().count() < max) {
				sFilter().value(false);
			}
		});
	};

	/**
	* unknownSpecies is a single flag that turns on or off the display of lakes that don't currently have any species listed.
	**/
	this.unknownSpecies = ko.observable(false);
};
