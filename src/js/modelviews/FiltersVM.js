var FiltersVM = function(inFilters) {	var self = this;	this.filters = inFilters;	this.setupFiltersMenu = function() {		$('#filtersMenu .dropdown-menu li').on({			"click":function(e){				e.stopPropagation();			}		});	};};