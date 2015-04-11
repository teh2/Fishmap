var LakeInfo = function(nm, ref) {
	var self = this;
	this.name = ko.observable(nm);
	this.href = ko.observable(ref);
	this.county = ko.observable();
	this.latlon = ko.observable();
	this.area = ko.observable();
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
	this.flickrThumbs = ko.pureComputed(function() {
		var thumbs = [
			{
				pic: "images/Largemouth bass 1.jpg",
				height: "77",
				width: "51"
			},
			{
				pic:"images/Smallmouth bass.jpg",
				height:"77",
				width:"51"
			},
			{
				pic:"images/Largemouth bass 2.jpg",
				height:"77",
				width:"51"
			},
			{
				pic:"images/Muskie 1.jpg",
				height:"51",
				width:"77"
			},
			{
				pic:"images/Muskie 2.jpg",
				height:"51",
				width:"77"
			},
			{
				pic:"images/Walleye.jpg",
				height:"51",
				width:"77"
			}
		];
		return thumbs;
	});
}