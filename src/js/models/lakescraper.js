var LakeScraper = function(theLakes) {
	var scraper = this;
	this.lakes = theLakes;
	this.statusText = $('#statusText');
	this.speciesScrapedCounter = 0;

	this.init = function() {
		this.initLakesWithIFishPages();
	};
	this.initLakesWithIFishPages = function() {
		console.log("lakeScraper.initLakesWithIFishPages()");
		$.ajax({
			url: "http://www.ifishillinois.org/profiles/selector.php",
			type: "get",
			dataType: "text",
			success: function(data) {
				var resp = data.responseText;
				var beginLoc = resp.search('<div class="content_tab" id="tab1">');
				var resp2 = resp.substr(beginLoc);
				var endLoc = resp2.search('<div class="content_tab" id="tab2">');
				var resp3 = resp2.substr(0, endLoc);
				$(resp3).find('li').each(function() {
					var name = $(this).text();
					var href = $(this).children('a').attr('href');
					var aLake = new LakeInfo(name, href);
					scraper.lakes.push(aLake);
				});
			},
			complete: function(xhr, status) {
				console.log("Number of lakes found:" + scraper.lakes().length);
				scraper.initSpeciesLists();
			},
			error: function(xhr, stat, thrown) {
				console.log(stat+":"+thrown);
			}
		});
	};
	this.initSpeciesLists = function() {
		for (var lakeIndex in scraper.lakes()) {
if (10 < lakeIndex) return;
			var aLake = scraper.lakes()[lakeIndex];
			var aUrl = "http://www.ifishillinois.org" + aLake.href();
			$.ajax({
				url: aUrl,
				type: "get",
				dataType: "text",
				context: aLake,
				success: scraper.scrapeSpecies,
				error: function(xhr, stat, thrown) {
					console.log(stat+":"+thrown);
				}
			});
		};
	};
	this.scrapeSpecies = function(data, status, xhr) {
console.log("scraping species for " + this.name());
		var thisLake = this;
	scraper.statusText.text("scraping: " + thisLake.name());
		var resp = data.responseText;
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
		var beginLoc = resp.search('<div id="species">');
		if (-1 < beginLoc) {
			var resp2 = resp.substr(beginLoc);
			var endLoc = resp2.search('<!--closes species-->');
			if (-1 < endLoc) {
				var resp3 = resp2.substr(0, endLoc);
				$(resp3).find('td a').each(function() {
					var aSpecies = $(this).text().trim();
					thisLake.species.push(aSpecies);
				});
				console.log("Number of species found:" + thisLake.species().length);
				console.log("species: " + thisLake.species());
			}
		}
	};
};

