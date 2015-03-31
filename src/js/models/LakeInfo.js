var LakeInfo = function(nm, ref) {
	var self = this;
	this.name = ko.observable(nm);
	this.href = ko.observable(ref);
	this.county = ko.observable();
	this.latlon = ko.observable();
	this.species = ko.observableArray();
	this.speciesCount = ko.computed(function() {
		return self.species().length;
	});
	this.displayName = ko.computed(function() {
		return self.name() + "(" + self.speciesCount() + ")";
	});
	this.marker = ko.observable();
	this.place = ko.computed(function() {
		return self.name() + ", " + self.county() + " county";
	});
	this.iFishLink = ko.computed(function() {
		return "<a href='http://www.ifishillinois.org"+self.href()+"'>lake report at ifishillinois.org</a>";
	});
}