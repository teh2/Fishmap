/**
* SpeciesFilter is a simple data holder that keeps the info we need for filtering a particular species.
**/
var SpeciesFilter = function(nm, val) {
	var self = this;
	//Identify species by name:
	this.name = ko.observable(nm);
	//Either true or false, depending on whether or not it should be displayed:
	this.value = ko.observable(val);
	//How many instances of it have we encountered:
	this.count = ko.observable(1);
	//What are we going to show the user when we list the filters:
	this.displayName = ko.computed(function() {
		return self.name() + " (" + self.count() + ")";
	});
}