#Fishmap

Fishmap is a class project for the uDacity FrontEnd NanoDegree. In short, it is a mashup of GoogleMaps, Flickr, Panoramio, and a bunch of information I've collected up from places I've been and fish I've seen. Currently, the data encompassed by Fishmap is limited to the state of Illinois.

----
#Quick Start

If you just want to see it run, you can check it out at:
https://teh2.githumb.io/Fishmap/index.html

If you want to make it run yourself, you will need to:
* grab the code from this github repo (https://github.com/teh2/Fishmap).
* put it somewhere where your local web server can see it.
* fire up your local server, and check it out.

----

# The Project

The whole point of this project was to demonstrate the ability to use both the GoogleMaps API and at least one other API to mash together a "neighborhood map" of places I've either been to, or want to visit. My version identifies lakes in the state of illinois, their locations, and the fish species known to live in them.

The fundamental lake information comes from ifishillinois.org - lake name, county, and species. Unfortunately, that information alone isn't enough to mash the lakes with GoogleMaps for two reasons. First, because Google can't consistently find a lake directly from the lake name and county. Second, because the ifishillinois.org information doesn't include geographical identification - lat/lon, street address, etc. So, I've created a local version of the lake info, and added latitude and longitude coordinates. Ultimately, my goal is to get to uDacity's "Full Stack Web Developer" NanoDegree courses, and build my own API so I can mash my API with the ifishillinois.org info, and the GoogleMaps API, to create a completely dynamic experience. In the mean time, I'm encapsulating the basic lake information within Fishmap itself.

External APIs and references used by Fishmap include geographically localized photo thumbnails from both Flickr and Panoramio. And a linkback to the lake details page at ifishillinois.org.

----
#References

External references and influences include:
* The uDacity courses leading up to this project:
 * Intro to AJAX (https://www.udacity.com/course/viewer#!/c-ud110-nd)
 * JavaScript Design Patterns (https://www.udacity.com/course/viewer#!/c-ud989-nd)
* API Docs
 * My biggest influence was my frustration with http://www.ifishillinois.org.
 * The GoogleMaps API documentation was crucial
  * API Reference: https://developers.google.com/maps/documentation/javascript/reference
  * Getting started tutorial: https://developers.google.com/maps/documentation/javascript/tutorial
 * Flickr's Photo API
  * Search API: https://www.flickr.com/services/api/flickr.photos.search.html
  * Services: https://www.flickr.com/services/api/
 * Panoramio's Widget API documentation: http://www.panoramio.com/api/widget/api.html
* As usual, much of my research when hitting roadblocks came from a small handful of "go to" sites:
 * Stack Overflow: http://stackoverflow.com/
 * W3: http://www.w3.org/
 * Github docs: https://github.com/
 * Mozilla's Reference docs: https://developer.mozilla.org/en-US/docs/Web
 * Bootstrap's documentation: http://getbootstrap.com/
 * Knockout's documentation: http://knockoutjs.com/index.html
 