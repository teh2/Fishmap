/**
* FiltersVM manages the Filters Drop Down menu display.
*
* It is very simple because almost all of the functionality of the menu is handled directly in the HTML page by knockout. The only thing that's a bit tricky here is the handling of the actual button press.
**/
var FiltersVM = function(inFilters) {
	var self = this;
	this.filters = inFilters;

	//intercept button presses and stop them from propagating up the DOM tree, since they are handled directly in the page by the "data-toggle".

	this.setupFiltersMenu = function() {
		$('#filtersMenu .dropdown-menu li').on({
			'click' : function(e){
				e.stopPropagation();
			}
		});
	};
};
