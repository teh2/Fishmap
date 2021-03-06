/**
* LakeInfoVM manages the display of the list of lakes.
*
* That implies that it shows all of the lakes that match all of the complex and confusing filters. So... it commmunicates a lot with the Filters object; hence, the reason a filters object is passed in at construction time.
**/
var LakeListVM = function(inFilters) {
	var self = this;
	this.filters = inFilters;

	/**
	* setCurrentLake is ONLY called from a click binding in the HTML.
	* If the user clicks on a particular lake in the list, the app needs to
	* propagate that back through to let the mapVM know to update the icons and
	* display the popup window.
	*
	* Be forewarned! Any other use of this method will likely create an infinite
	* loop and hang Fishmap.
	**/
	this.setCurrentLake = function(theLake) {
		viewModel.setCurrentLake(theLake);
	};

	/**
	* matchSearchBoxToLakeName is a helper to check for a match between the
	* search string and the name of a given lake.
	* Note: it turned out a bit simpler than I expected, but it's still good
	* to separate functionality into coherent units when possible.
	**/
	this.matchSearchBoxToLakeName = function(aLake) {
		return (-1 != aLake.name().toUpperCase().search(""+self.filters.searchStr().toUpperCase()));
	};

	/**
	* matchSearchBoxToSpeciesNames is a bit trickier helper. It looks for a match
	* between the search string and any of the species names associated with the
	* given lake.
	**/
	this.matchSearchBoxToSpeciesNames = function(aLake) {
		var species = aLake.species();
		if (0 < species.length && 0 < self.filters.searchStr().length) {
			for (var i = 0; i < species.length; i++) {
				var sp = species[i];
				if (-1 != sp.toUpperCase().search(""+self.filters.searchStr().toUpperCase())) {
					return true;
				}
			}
		}
		return false;
	};

	/**
	* filteredLakes looks to it's callers like a simple array of lakes.
	* But under the hood, it's actually jumping through a bunch of hoops to
	* create that array. It takes four separate things into account when deciding
	* whether or not a particular lake fits the bill:
	* 1) Is the lake in a selected geographical area of the state? This question
	*    trumps all of the rest of the questions below - if the area is not selected,
	*    the lake will not show up in the list or on the map.
	* 2) Is at least one of the species identified in this lake selected in
	*    the filter list and is the search string contained within the lake name?
	*    (If the search string is empty, then all lakes with species matches will match.
	* 3) Is the search string contained in at least one of the species identified
	*    in the lake?
	* 4) Are there no species identified for the lake and is the "no species" filter
	*    selected?
	**/
	this.filteredLakes = ko.computed(function() {
		var filtered = [];
		viewModel.lakes().forEach(function(aLake) {
			if ("" !== aLake.area()) {
				if (self.filters.areaFilters()[aLake.area()]()) {
					if (self.hasChosenSpecies(aLake)) {
						if (self.matchSearchBoxToLakeName(aLake)) {
// console.log("matched chosen species and search box");
							filtered[filtered.length] = aLake;
							return;
						}
					}
					if (self.matchSearchBoxToSpeciesNames(aLake)) {
// console.log("matched search box to species name");
						filtered[filtered.length] = aLake;
						return;
					}
					if (self.noSpecies(aLake)) {
// console.log("matched no species");
						filtered[filtered.length] = aLake;
						return;
					}
				}
			}
		});
		return filtered;
	});

	/**
	* hasChosen Species is a helper, used by filtered lakes.
	*
	* It does just what its name implies - check the given lake for a species who's filter flag is turned on.
	**/
	this.hasChosenSpecies = function(theLake) {
		if (0 < theLake.species().length) {
			for (var i = 0; i < self.filters.speciesFilters().length; i++) {
				var sFilter = self.filters.speciesFilters()[i];
				if (sFilter().value()) {
					if (-1 != $.inArray(sFilter().name(), theLake.species())) {
						return true;
					}
				}
			}
		}
		return false;
	};

	/**
	* noSpecies checks the given lake for an empty species list and
	* a valid latlon entry.
	**/
	this.noSpecies = function(theLake) {
		if (0 < theLake.species().length) { return false; }
		if (typeof theLake.latlon() === 'undefined') { return false; }
		if (theLake.latlon().length === 0) { return false; }
		if (theLake.lat() < -90 || 90 < theLake.lat() ||
			theLake.lon() < -180 || 180 < theLake.lon()) { return false; }
		if (self.filters.unknownSpecies()) {
			return true; }
		else {
			return false;
		}
	};

	/**
	* Load LakeData into LakeInfo objects and shove them into the global array
	*
	* Note that KO gets a bit overwhelmed if you shove them in the array one at
	* a time, so we build a local array and then shove the whole thing into the
	* KO field all at once.
	**/
	this.loadLakeData = function() {
		var theLakes = [];
		LakeData.forEach(function(aLake) {
			var info = new LakeInfo(aLake.name, aLake.href);
			info.county(aLake.county);
			info.latlon(aLake.latlon);
			info.area(aLake.area);
			aLake.species.forEach(function(aSpecies) {
				info.species.push(aSpecies);
				self.filters.addSpeciesFilter(aSpecies);
			});
			viewModel.buildMapMarker(info);
			theLakes.push(info);
		});
		viewModel.lakes(theLakes);
		self.filters.setInitialSpeciesFilterThreshold(10);
	};
};
