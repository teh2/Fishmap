var Filters = function() {
	var self = this;

	this.areaFilters = ko.observable({
		NW: ko.observable(false),
		NE: ko.observable(true),
		WC: ko.observable(false),
		EC: ko.observable(false),
		S: ko.observable(false)
	});

	this.speciesFilters = ko.observableArray();
	
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
	

	//Note: only adds it if it's not already there...
	this.addSpeciesFilter = function(name) {
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

	this.setInitialSpeciesFilterThreshold = function(max) {
		self.speciesFilters().forEach(function(sFilter) {
			if (sFilter().count() < max) {
				sFilter().value(false);
			};
		});
	};

};
