/**
* LakeInfo is the model representing a single lake and all of the information that we know about it. most of what follows is totally self explanatory...
*
* Note that a brand new LakeInfo object will be initialized with only a name and ifishillinois.org link. These are the values that were initially retrieved by the LakeScraper. The rest of the fields have been collected 'post scraping'.
**/
var LakeInfo = function(nm, ref) {
	var self = this;
	this.name = ko.observable(nm);
	this.href = ko.observable(ref);
	this.county = ko.observable();
	this.latlon = ko.observable();
	this.area = ko.observable();
	this.species = ko.observableArray();

	/**
	* a few more simple fields that are used internally by the app...
	**/
	this.selected = ko.observable(false);
	this.marker = ko.observable();

	/**
	* lat and lon are 'computed' fields that attempt to safely break the latlon string into it's component pieces. In the case of an invalid latlon field, these two helpers will return zero, which, rather than a displayable point, is intended to server as a 'no value exists' flag to the calling routine.
	**/
	this.lat = ko.computed(function() {
		if (typeof self.latlon() === 'undefined') { return 0; }
		if (0 === self.latlon().length) { return 0; }
		var nums = self.latlon().split(",");
		return nums[0];
	});
	this.lon = ko.computed(function() {
		if (typeof self.latlon() === 'undefined') { return 0; }
		if (0 === self.latlon().length) { return 0; }
		var nums = self.latlon().split(",");
		return nums[1];
	});

	/**
	* From here on down are the 'computed' data fields. They are composed at run time.
	**/
	//How many species are known to exsist in the lake?
	this.speciesCount = ko.computed(function() {
		return self.species().length;
	});
	//this name field is used in the lake list to show the number of species in the lake as well as its name.
	this.displayName = ko.computed(function() {
		return self.name() + "(" + self.speciesCount() + ")";
	});
	//This field identifies both the lake name and the county where it resides.
	this.place = ko.computed(function() {
		return self.name() + ", " + self.county() + " county";
	});
	//This field builds a full link to the relevant ifishillinois.org page from the relative link that we've got stored in our data.
	this.iFishLink = ko.computed(function() {
		return "<a href='http://www.ifishillinois.org"+self.href()+"'>lake report at ifishillinois.org</a>";
	});
};