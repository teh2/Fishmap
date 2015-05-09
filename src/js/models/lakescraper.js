/**
* LakeScraper was initially intended to scrape data from ifishillinois.org in real time and populate the Fishmap app at run time. It rapidly became obvious that scraping data from there, and matching it to data stored here was going to become a nightmare. Data that is out of our control can change at any time, right?
*
* So, this code is here mostly for historical purposes. However... if the ifishillinois.org web site were to change significantly, this code would be the starting point to repopulate our LakeData.js data structure.
**/
var LakeScraper = function(theLakes) {
	var scraper = this;
	//We need a place to put the list of objects we're going to build:
	this.lakes = theLakes;
	//We need a place on our page to keep the user informed of our progress:
	this.statusText = $('#statusText');
	//We want to know how much success we've had:
	this.speciesScrapedCounter = 0;

	//This is the external entry point to this object. Instantiate it and init it, and we'll take it from there...
	this.init = function() {
		this.initLakesWithIFishPages();
	};

	//Go to ifishillinois.org, and grab the page that lists all of the lakes that they have fish report pages for. build a LakeInfo object for each. When done, continue on to the species scraper.
	this.initLakesWithIFishPages = function() {
		console.log("lakeScraper.initLakesWithIFishPages()");
		$.ajax({
			url: "http://www.ifishillinois.org/profiles/selector.php",
			type: "get",
			dataType: "text",
			success: function(data) {
				//Ok, we got back a page, rip off everything before the part we care about...
				var resp = data.responseText;
				var beginLoc = resp.search('<div class="content_tab" id="tab1">');
				var resp2 = resp.substr(beginLoc);
				var endLoc = resp2.search('<div class="content_tab" id="tab2">');
				var resp3 = resp2.substr(0, endLoc);
				//Grab each lake name, and link, and stuff them into a LakeInfo object and put that in our list.
				$(resp3).find('li').each(function() {
					var name = $(this).text();
					var href = $(this).children('a').attr('href');
					var aLake = new LakeInfo(name, href);
					scraper.lakes.push(aLake);
				});
			},
			complete: function(xhr, status) {
				//We're all done getting lakes, now go scrape the page for each one.
				console.log("Number of lakes found:" + scraper.lakes().length);
				scraper.initSpeciesLists();
			},
			error: function(xhr, stat, thrown) {
				console.log(stat+":"+thrown);
			}
		});
	};

	//Once we've got a list of all the lakes with a report page, go get that page, and call the species scraper to scrape the species listed from it.
	this.initSpeciesLists = function() {
		for (var lakeIndex in scraper.lakes()) {
//if (10 < lakeIndex) return; <=== Short circuit used during testing to make this run faster.
			var aLake = scraper.lakes()[lakeIndex];
			var aUrl = "http://www.ifishillinois.org" + aLake.href();
			$.ajax({
				url: aUrl,
				type: "get",
				dataType: "text",
				context: aLake,
				success: scraper.scrapeSpecies,
				complete: scraper.scrapeSpeciesFinished,
				error: function(xhr, stat, thrown) {
					console.log(stat+":"+thrown);
				}
			});
		};
	};

	//We got back a specific lake page. Tear it apart and collect the list of species identified as resident... This is done in stages, just to make it easy. Basically, we pull off the beginning of the returned page, and look only at the part of the page that lists species.
	this.scrapeSpecies = function(data, status, xhr) {
console.log("scraping species for " + this.name());
		var thisLake = this;
	scraper.statusText.text("scraping: " + thisLake.name());
		var resp = data.responseText;
		//First thing we want to find is the county where this lake lives...
		var srchStr = '<strong>County: </strong>';
		var countyLoc = resp.search(srchStr);
		if (-1 < countyLoc) {
			countyLoc = countyLoc + srchStr.length;
			resp = resp.substr(countyLoc);
			var countyEnd = resp.search('</p>');
			if (-1 < countyEnd) {
				var theCounty = resp.substr(0, countyEnd).trim();
				thisLake.county(theCounty);
				resp = resp.substr(countyEnd);
			}
		};
		//Now, we want to know if they've listed fish species for us...
		var beginLoc = resp.search('<div id="species">');
		if (-1 < beginLoc) {
			//If we've still got page left, then we should have species listed...
			var resp2 = resp.substr(beginLoc);
			var endLoc = resp2.search('<!--closes species-->');
			if (-1 < endLoc) {
				var resp3 = resp2.substr(0, endLoc);
				//Scrape each species and drop it in the LakeInfo object's species list.
				$(resp3).find('td a').each(function() {
					var aSpecies = $(this).text().trim();
					thisLake.species.push(aSpecies);
				});
				console.log("Number of species found:" + thisLake.species().length);
				console.log("species: " + thisLake.species());
			}
		}
	};

	//Log some helpful notes when finished scraping species to let the user know we're done...
	this.scrapeSpeciesFinished = function(xhr, status) {
		scraper.speciesScrapedCounter = scraper.speciesScrapedCounter + 1;
console.log("Number of lakes' species scraped: " + scraper.speciesScrapedCounter);
		if (scraper.lakes().length === scraper.speciesScrapedCounter) {
			console.log("All done scraping species");
			scraper.statusText.text("Done scraping");
		}
	};
};

