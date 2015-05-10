/**
* LakeInfoVM manages the display of info about the current lake.
*
* It handles the upper part of the popup window.
* (The rest is handled by FlickrVM and PanoramioVM).
*
* As with many things related to KO, it really has nothing to do.
* The work is all done with bindings in the HTML.
**/
var LakeInfoVM = function() {
	var self = this;
	this.currentLake = ko.observable();
};
