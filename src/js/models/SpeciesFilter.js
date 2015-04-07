var SpeciesFilter = function(nm, val) {
	var self = this;
	this.name = ko.observable(nm);
	this.value = ko.observable(val);
	this.count = ko.observable(1);
	this.displayName = ko.computed(function() {
		return self.name() + " (" + self.count() + ")";
	});
}