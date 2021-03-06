/**
* LakeData is a simple static data structure that holds all of the information related to each of the lakes that we wish to show on our map. Most of the fields should be self explanatory. The one field that may require some explanation is the href field which is a relative link out to the ifishillinois.org site.
*
*In general, every field ought to have a non-trivial value. Only a few exceptions are acceptable:
* 1) An empty species list is acceptable. The lake will display with a question-mark icon on the map.
* 2) An empty latlon is "sort of" acceptable, the app is written to handle it gracefully. But that only implies that it won't crash the system - it also won't display either in the map or in the list.
* 3) An empty area is acceptable, but again, the entry won't be displayed.
*
* Currently, the only entries that don't have a valid area value are rivers. It's kind of tricky to decide just area to assign when the body of water extends half way across the state (or more). An enhancement slated for version 2.0 is to display these entries using a pair of latlon values to force the map to zoom out to display the whole identified river. Additional functionality will somehow highlight or otherwise identify the full extent of the river.
*
* Note that if you intend to add more data to this list, you will probably find it necessary to enhance the code to protect Fishmap from broken links (href field) since the ifishillinois.org site won't have a page to link to.
**/
var LakeData = [
	{
		"name":" ANDERSON LAKE",
		"href":"/profiles/display_lake.php?waternum=01000",
		"county":"Fulton",
		"species":[],
		"latlon":"40.208242,-90.188269",
		"area":"NW"
	},
	{
		"name":" ARGYLE LAKE",
		"href":"/profiles/display_lake.php?waternum=00028",
		"county":"McDonough",
		"species":[],
		"latlon":"40.454004,-90.792742",
		"area":"NW"
	},
	{
		"name":" ARROWHEAD LAKE",
		"href":"/profiles/display_lake.php?waternum=54033",
		"county":"Williamson",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"37.828341,-88.907299",
		"area":"S"
	},
	{
		"name":" ASHLAND NEW RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04608",
		"county":"Morgan",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"39.869297,-90.047249",
		"area":"WC"
	},
	{
		"name":" ASHLAND OLD RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04611",
		"county":"Morgan",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"39.862866,-90.039966",
		"area":"WC"
	},
	{
		"name":" AXEHEAD LAKE (CCFPD)",
		"href":"/profiles/display_lake.php?waternum=00085",
		"county":"Cook",
		"species":[],
		"latlon":"42.008387,-87.865928",
		"area":"NE"
	},
	{
		"name":" BALDWIN LAKE",
		"href":"/profiles/display_lake.php?waternum=00195",
		"county":"Randolph",
		"species":["Blue catfish","Bluegill","Channel catfish","Flathead catfish","Hybrid Striped Bass (Wiper)","Largemouth bass","Redear sunfish","Smallmouth bass"],
		"latlon":"38.217867,-89.865742",
		"area":"WC"
	},
	{
		"name":" BANANA LAKE (LCFPD)",
		"href":"/profiles/display_lake.php?waternum=00511",
		"county":"Lake",
		"species":[],
		"latlon":"42.259669,-88.106006",
		"area":"NE"
	},
	{
		"name":" BANNER MARSH PONDS",
		"href":"/profiles/display_lake.php?waternum=00036",
		"county":"Peoria",
		"species":[],
		"latlon":"40.538734,-89.847821",
		"area":"NW"
	},
	{
		"name":" BAY CREEK LAKE",
		"href":"/profiles/display_lake.php?waternum=00249",
		"county":"Pope",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.483789,-88.685227",
		"area":"S"
	},
	{
		"name":" BEALL WOODS LAKE",
		"href":"/profiles/display_lake.php?waternum=00224",
		"county":"Wabash",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"38.350033,-87.831660",
		"area":"S"
	},
	{
		"name":" BEAVER DAM LAKE",
		"href":"/profiles/display_lake.php?waternum=00189",
		"county":"Macoupin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"39.210942,-89.969129",
		"area":"WC"
	},
	{
		"name":" BEAVER LAKE S.S.S.P.",
		"href":"/profiles/display_lake.php?waternum=00591",
		"county":"Kendall",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"41.632154,-88.522327",
		"area":"NE"
	},
	{
		"name":" BELLEAU LAKE (CCFPD)",
		"href":"/profiles/display_lake.php?waternum=00086",
		"county":"Cook",
		"species":[],
		"latlon":"42.034441,-87.868489",
		"area":"NE"
	},
	{
		"name":" BIG LAKE S.S.S.P.",
		"href":"/profiles/display_lake.php?waternum=00055",
		"county":"Kendall",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish","Smallmouth bass"],
		"latlon":"41.630895,-88.524408",
		"area":"NE"
	},
	{
		"name":" BIRD PARK QUARRY",
		"href":"/profiles/display_lake.php?waternum=00060",
		"county":"Kankakee",
		"species":[],
		"latlon":"41.119675,-87.878415",
		"area":"NE"
	},
	{
		"name":" BLOOMINGTON, LAKE",
		"href":"/profiles/display_lake.php?waternum=00114",
		"county":"McLean",
		"species":["Channel catfish","Crappie","Hybrid Striped Bass (Wiper)","Largemouth bass","Smallmouth bass","Walleye"],
		"latlon":"40.653378,-88.930177",
		"area":"EC"
	},
	{
		"name":" BORAH LAKE",
		"href":"/profiles/display_lake.php?waternum=00227",
		"county":"Richland",
		"species":[],
		"latlon":"38.777256,-88.063099",
		"area":"S"
	},
	{
		"name":" BRAIDWOOD LAKE",
		"href":"/profiles/display_lake.php?waternum=00062",
		"county":"Will",
		"species":["Blue catfish","Bluegill","Channel catfish","Hybrid Striped Bass (Wiper)","Largemouth bass"],
		"latlon":"41.217111,-88.236674",
		"area":"NE"
	},
	{
		"name":" BUCKNER CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=01846",
		"county":"Franklin",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"37.976684,-89.004983",
		"area":"S"
	},
	{
		"name":" BUSSE LAKE (CCFPD)",
		"href":"/profiles/display_lake.php?waternum=00162",
		"county":"Cook",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Muskellunge","Walleye"],
		"latlon":"42.024688,-88.009862",
		"area":"NE"
	},
	{
		"name":" CAMPUS POND - COLES CO.",
		"href":"/profiles/display_lake.php?waternum=00122",
		"county":"Coles",
		"species":[],
		"latlon":"39.478471,-88.178985",
		"area":"EC"
	},
	{
		"name":" CANTON LAKE",
		"href":"/profiles/display_lake.php?waternum=00027",
		"county":"Fulton",
		"species":[],
		"latlon":"40.570775,-89.979690",
		"area":"NW"
	},
	{
		"name":" CARBONDALE CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04819",
		"county":"Jackson",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"37.697785,-89.228351",
		"area":"S"
	},
	{
		"name":" CARLINVILLE #2, LAKE",
		"href":"/profiles/display_lake.php?waternum=04713",
		"county":"Macoupin",
		"species":[],
		"latlon":"39.242026,-89.851483",
		"area":"WC"
	},
	{
		"name":" CARLTON, LAKE",
		"href":"/profiles/display_lake.php?waternum=00005",
		"county":"Whiteside",
		"species":[],
		"latlon":"41.845282,-89.963546",
		"area":"NW"
	},
	{
		"name":" CARLYLE LAKE",
		"href":"/profiles/display_lake.php?waternum=00276",
		"county":"Clinton",
		"species":["Bluegill","Channel catfish","Crappie","Flathead catfish","Largemouth bass","Redear sunfish","Sauger","White bass"],
		"latlon":"38.666444,-89.285570",
		"area":"WC"
	},
	{
		"name":" CASEY PARK LAKE",
		"href":"/profiles/display_lake.php?waternum=04426",
		"county":"Clark",
		"species":[],
		"latlon":"39.293755,-87.984886",
		"area":"EC"
	},
	{
		"name":" CEDAR LAKE - JACKSON CO.",
		"href":"/profiles/display_lake.php?waternum=00252",
		"county":"Jackson",
		"species":["Bluegill","Crappie","Largemouth bass","Redear sunfish","Striped bass"],
		"latlon":"37.636537,-89.280552",
		"area":"S"
	},
	{
		"name":" CENTENIAL PARK LAKE",
		"href":"/profiles/display_lake.php?waternum=04013",
		"county":"Whiteside",
		"species":[],
		"latlon":"41.767465,-89.686257",
		"area":"NW"
	},
	{
		"name":" CENTRALIA, LAKE",
		"href":"/profiles/display_lake.php?waternum=04800",
		"county":"Marion",
		"species":[],
		"latlon":"38.542118,-89.076786",
		"area":"S"
	},
	{
		"name":" CHARLESTON LOWER CHANNEL",
		"href":"/profiles/display_lake.php?waternum=04433",
		"county":"Coles",
		"species":[],
		"latlon":"39.460006,-88.139314",
		"area":"EC"
	},
	{
		"name":" CHARLESTON SIDE CHANNEL",
		"href":"/profiles/display_lake.php?waternum=00118",
		"county":"Coles",
		"species":["Bluegill","Channel catfish","Common carp","Crappie","Flathead catfish","Freshwater drum","Hybrid Striped Bass (Wiper)","Largemouth bass","Walleye x Sauger hybrid (Saugeye)"],
		"latlon":"39.466765,-88.145279",
		"area":"EC"
	},
	{
		"name":" CHRISTOPHER OLD CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=04825",
		"county":"Franklin",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"37.985702,-89.071235",
		"area":"S"
	},
	{
		"name":" CITIZEN'S LAKE",
		"href":"/profiles/display_lake.php?waternum=00031",
		"county":"Warren",
		"species":[],
		"latlon":"40.904968,-90.664520",
		"area":"NW"
	},
	{
		"name":" CLEAR LAKE - KICKAPOO",
		"href":"/profiles/display_lake.php?waternum=00101",
		"county":"Vermilion",
		"species":[],
		"latlon":"40.142189,-87.739416",
		"area":"EC"
	},
	{
		"name":" CLINTON LAKE",
		"href":"/profiles/display_lake.php?waternum=00091",
		"county":"DeWitt",
		"species":["Crappie","Hybrid Striped Bass (Wiper)","Largemouth bass","Smallmouth bass","Walleye"],
		"latlon":"40.155479,-88.826366",
		"area":"EC"
	},
	{
		"name":" COFFEEN LAKE",
		"href":"/profiles/display_lake.php?waternum=00600",
		"county":"Montgomery",
		"species":["Channel catfish","Crappie","Flathead catfish","Largemouth bass"],
		"latlon":"39.043280,-89.398372",
		"area":"WC"
	},
	{
		"name":" COLES COUNTY AIRPORT LAKE",
		"href":"/profiles/display_lake.php?waternum=04427",
		"county":"Coles",
		"species":[],
		"latlon":"39.471946,-88.272594",
		"area":"EC"
	},
	{
		"name":" CRAB ORCHARD LAKE",
		"href":"/profiles/display_lake.php?waternum=00235",
		"county":"Williamson",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","White bass"],
		"latlon":"37.723410,-89.093923",
		"area":"S"
	},
	{
		"name":" CRAWFORD CO CONS AR POND #1",
		"href":"/profiles/display_lake.php?waternum=00239",
		"county":"Crawford",
		"species":[],
		"latlon":"39.094882,-87.708727",
		"area":"S"
	},
	{
		"name":" CRYSTAL LAKE (UPD)",
		"href":"/profiles/display_lake.php?waternum=00519",
		"county":"Champaign",
		"species":[],
		"latlon":"40.119389,-88.211344",
		"area":"EC"
	},
	{
		"name":" DAWSON LAKE",
		"href":"/profiles/display_lake.php?waternum=00092",
		"county":"McLean",
		"species":["Crappie","Largemouth bass","Walleye"],
		"latlon":"40.408937,-88.723641",
		"area":"EC"
	},
	{
		"name":" DECATUR, LAKE",
		"href":"/profiles/display_lake.php?waternum=00130",
		"county":"Macon",
		"species":["Bluegill","Channel catfish","Common carp","Crappie","Flathead catfish","Freshwater drum","Hybrid Striped Bass (Wiper)","Largemouth bass","Walleye","White bass"],
		"latlon":"39.828639,-88.918775",
		"area":"EC"
	},
	{
		"name":" DEFIANCE LAKE",
		"href":"/profiles/display_lake.php?waternum=00067",
		"county":"McHenry",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Northern pike"],
		"latlon":"42.319418,-88.225812",
		"area":"NE"
	},
	{
		"name":" DELAVAN LAKE",
		"href":"/profiles/display_lake.php?waternum=16008",
		"county":"Tazewell",
		"species":[],
		"latlon":"42.615368,-88.596534",
		"area":"NW"
	},
	{
		"name":" DERBY LAKE W.S.C.",
		"href":"/profiles/display_lake.php?waternum=04798",
		"county":"Randolph",
		"species":["Bluegill","Crappie","Largemouth bass"],
		"latlon":"38.183143,-89.750795",
		"area":"WC"
	},
	{
		"name":" DEVILS KITCHEN LAKE",
		"href":"/profiles/display_lake.php?waternum=00270",
		"county":"Williamson",
		"species":["Bluegill","Largemouth bass","Rainbow trout","Redear sunfish"],
		"latlon":"37.626094,-89.092441",
		"area":"S"
	},
	{
		"name":" DIAMOND LAKE",
		"href":"/profiles/display_lake.php?waternum=00273",
		"county":"Lake",
		"species":[],
		"latlon":"42.250315,-88.007296",
		"area":"NE"
	},
	{
		"name":" DOLAN LAKE",
		"href":"/profiles/display_lake.php?waternum=00238",
		"county":"Hamilton",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"38.059678,-88.403830",
		"area":"S"
	},
	{
		"name":" DONGOLA CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04826",
		"county":"Union",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"37.360081,-89.174981",
		"area":"S"
	},
	{
		"name":" DRAKE LAKE - JEPCSFWA",
		"href":"/profiles/display_lake.php?waternum=04781",
		"county":"Cass",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"40.003765,-90.083339",
		"area":"WC"
	},
	{
		"name":" DREAMLAND POND (DPD)",
		"href":"/profiles/display_lake.php?waternum=04409",
		"county":"Macon",
		"species":["Channel catfish","Redear sunfish"],
		"latlon":"39.844780,-88.985154",
		"area":"EC"
	},
	{
		"name":" DU QUOIN CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04827",
		"county":"Perry",
		"species":["Bluegill","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"38.072650,-89.220947",
		"area":"S"
	},
	{
		"name":" DUTCHMAN LAKE",
		"href":"/profiles/display_lake.php?waternum=00288",
		"county":"Johnson",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish","White crappie"],
		"latlon":"37.491601,-88.919285",
		"area":"S"
	},
	{
		"name":" EAST FORK LAKE",
		"href":"/profiles/display_lake.php?waternum=00226",
		"county":"Richland",
		"species":["Bluegill","Channel catfish","Largemouth bass","Walleye","White crappie"],
		"latlon":"38.760104,-88.063881",
		"area":"S"
	},
	{
		"name":" EAST LAKE W.S.C.",
		"href":"/profiles/display_lake.php?waternum=04799",
		"county":"Randolph",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"38.180984,-89.716549",
		"area":"WC"
	},
	{
		"name":" EUREKA, LAKE",
		"href":"/profiles/display_lake.php?waternum=00038",
		"county":"Woodford",
		"species":["Largemouth bass","Northern pike"],
		"latlon":"40.7050613,-89.282006",
		"area":"NW"
	},
	{
		"name":" EVERGREEN LAKE",
		"href":"/profiles/display_lake.php?waternum=00305",
		"county":"McLean",
		"species":["Crappie","Largemouth bass","Muskellunge","Walleye x Sauger hybrid (Saugeye)"],
		"latlon":"40.6305236,-89.0351235",
		"area":"EC"
	},
	{
		"name":" FERNE CLYFFE LAKE",
		"href":"/profiles/display_lake.php?waternum=00257",
		"county":"Johnson",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Rainbow trout","Redear sunfish"],
		"latlon":"37.533209,-88.976207",
		"area":"S"
	},
	{
		"name":" FORBES LAKE",
		"href":"/profiles/display_lake.php?waternum=00211",
		"county":"Marion",
		"species":["Bluegill","Channel catfish","Largemouth bass","Walleye x Sauger hybrid (Saugeye)","White crappie"],
		"latlon":"38.721583,-88.758547",
		"area":"S"
	},
	{
		"name":" FOREST PARK LAGOON",
		"href":"/profiles/display_lake.php?waternum=00157",
		"county":"Shelby",
		"species":[],
		"latlon":"39.417384,-88.788923",
		"area":"EC"
	},
	{
		"name":" FORT MASSAC FAIRGROUNDS POND",
		"href":"/profiles/display_lake.php?waternum=04805",
		"county":"Massac",
		"species":[],
		"latlon":"37.1458198,-88.7007057",
		"area":"S"
	},
	{
		"name":" FOX CHAIN O' LAKES",
		"href":"/profiles/display_lake.php?waternum=00080",
		"county":"Lake",
		"species":["Bluegill","Channel catfish","Crappie","Flathead catfish","Largemouth bass","Muskellunge","Northern pike","Walleye"],
		"latlon":"42.411427,-88.148193",
		"area":"NE"
	},
	{
		"name":" FRANK HOLTEN MAIN LAKE",
		"href":"/profiles/display_lake.php?waternum=00198",
		"county":"St. Clair",
		"species":[],
		"latlon":"38.601539,-90.102731",
		"area":"WC"
	},
	{
		"name":" GEBHARD WOODS #1-4",
		"href":"/profiles/display_lake.php?waternum=00050",
		"county":"Grundy",
		"species":[],
		"latlon":"41.356680,-88.439636",
		"area":"NE"
	},
	{
		"name":" GEORGE, LAKE",
		"href":"/profiles/display_lake.php?waternum=00008",
		"county":"Rock Island",
		"species":["","","","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"41.428656,-90.830930",
		"area":"NW"
	},
	{
		"name":" GILLESPIE NEW CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00187",
		"county":"Macoupin",
		"species":[],
		"latlon":"39.148323,-89.878677",
		"area":"WC"
	},
	{
		"name":" GILLESPIE OLD CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00188",
		"county":"Macoupin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"39.144566,-89.860958",
		"area":"WC"
	},
	{
		"name":" GLADSTONE LAKE",
		"href":"/profiles/display_lake.php?waternum=00032",
		"county":"Henderson",
		"species":[],
		"latlon":"40.854367,-90.979244",
		"area":"NW"
	},
	{
		"name":" GLEN OAK LAGOON",
		"href":"/profiles/display_lake.php?waternum=04090",
		"county":"Peoria",
		"species":[],
		"latlon":"40.713308,-89.574060",
		"area":"NW"
	},
	{
		"name":" GLEN SHOALS LAKE",
		"href":"/profiles/display_lake.php?waternum=00180",
		"county":"Montgomery",
		"species":["Channel catfish","Hybrid Striped Bass (Wiper)","Largemouth bass","White crappie"],
		"latlon":"39.205865,-89.464792",
		"area":"WC"
	},
	{
		"name":" GREEN LAKE (CCFPD)",
		"href":"/profiles/display_lake.php?waternum=04257",
		"county":"Lake",
		"species":[],
		"latlon":"41.601671,-87.555424",
		"area":"NE"
	},
	{
		"name":" GREENVILLE NEW CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00178",
		"county":"Bond",
		"species":["Bluegill","Channel catfish","Crappie","Flathead catfish","Hybrid Striped Bass (Wiper)","Largemouth bass"],
		"latlon":"38.937199,-89.395437",
		"area":"WC"
	},
	{
		"name":" GREENVILLE OLD CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00179",
		"county":"Bond",
		"species":[],
		"latlon":"38.950027,-89.377628",
		"area":"WC"
	},
	{
		"name":" GRIDLEY LAKE - JEPCSFWA",
		"href":"/profiles/display_lake.php?waternum=04706",
		"county":"Cass",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"39.954912,-90.072807",
		"area":"WC"
	},
	{
		"name":" GURNEY ROAD POND - JEPCSFWA",
		"href":"/profiles/display_lake.php?waternum=04709",
		"county":"Cass",
		"species":["Rainbow trout"],
		"latlon":"39.987917,-90.092583",
		"area":"WC"
	},
	{
		"name":" HARRISBURG NEW CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=01844",
		"county":"Saline",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.846540,-88.586949",
		"area":"S"
	},
	{
		"name":" HEIDECKE LAKE",
		"href":"/profiles/display_lake.php?waternum=00059",
		"county":"Grundy",
		"species":["Channel catfish","Hybrid Striped Bass (Wiper)","Largemouth bass","Muskellunge","Smallmouth bass","Walleye","White bass"],
		"latlon":"41.372164,-88.340127",
		"area":"NE"
	},
	{
		"name":" HENNEPIN CANAL",
		"href":"/profiles/display_lake.php?waternum=01003",
		"county":"Bureau",
		"species":[],
		"latlon":"",
		"area":"NW"
	},
	{
		"name":" HERRIN LAKE #1",
		"href":"/profiles/display_lake.php?waternum=54034",
		"county":"Williamson",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish","White crappie"],
		"latlon":"37.762819,-89.031270",
		"area":"S"
	},
	{
		"name":" HERRIN LAKE #2",
		"href":"/profiles/display_lake.php?waternum=54035",
		"county":"Williamson",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"37.633674,-89.016136",
		"area":"S"
	},
	{
		"name":" HEYWORTH CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=04555",
		"county":"McLean",
		"species":[],
		"latlon":"40.314852,-89.005016",
		"area":"EC"
	},
	{
		"name":" HIGHLAND OLD CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00192",
		"county":"Madison",
		"species":[],
		"latlon":"38.766726,-89.692943",
		"area":"WC"
	},
	{
		"name":" HOLIDAY PARK LAKE",
		"href":"/profiles/display_lake.php?waternum=04419",
		"county":"McLean",
		"species":[],
		"latlon":"40.468096,-88.970402",
		"area":"EC"
	},
	{
		"name":" HOMER LAKE (CCFPD)",
		"href":"/profiles/display_lake.php?waternum=00337",
		"county":"Champaign",
		"species":["Bluegill","Channel catfish","Largemouth bass","White crappie"],
		"latlon":"40.065055,-87.988866",
		"area":"EC"
	},
	{
		"name":" HOPEDALE CITY POND",
		"href":"/profiles/display_lake.php?waternum=01105",
		"county":"Tazewell",
		"species":[],
		"latlon":"40.420854,-89.409737",
		"area":"NW"
	},
	{
		"name":" HORSESHOE LAKE - ALEXANDER",
		"href":"/profiles/display_lake.php?waternum=00254",
		"county":"Alexander",
		"species":["Bluegill","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"37.142873,-89.353598",
		"area":"S"
	},
	{
		"name":" HORSESHOE LAKE - MADISON",
		"href":"/profiles/display_lake.php?waternum=04606",
		"county":"Madison",
		"species":[],
		"latlon":"38.702547,-90.091142",
		"area":"WC"
	},
	{
		"name":" HORTON LAKE",
		"href":"/profiles/display_lake.php?waternum=00163",
		"county":"Hancock",
		"species":["Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"40.545798,-91.382422",
		"area":"WC"
	},
	{
		"name":" I & M CANAL",
		"href":"/profiles/display_lake.php?waternum=00049",
		"county":"Grundy",
		"species":["Bluegill","Channel catfish","Crappie","Flathead catfish","Largemouth bass","Smallmouth bass"],
		"latlon":"41.444410,-88.228117",
		"area":""
	},
	{
		"name":" IDOT LAKE",
		"href":"/profiles/display_lake.php?waternum=00175",
		"county":"Sangamon",
		"species":["Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"",
		"area":"WC"
	},
	{
		"name":" INDEPENDENCE LAKE (LCFPD)",
		"href":"/profiles/display_lake.php?waternum=20037",
		"county":"Lake",
		"species":["Black crappie","Bluegill","Largemouth bass","Muskellunge"],
		"latlon":"42.314055,-87.948656",
		"area":"NE"
	},
	{
		"name":" JACKSONVILLE, LAKE",
		"href":"/profiles/display_lake.php?waternum=00173",
		"county":"Morgan",
		"species":["Bluegill","Channel catfish","Hybrid Striped Bass (Wiper)","Largemouth bass","Redear sunfish","White crappie"],
		"latlon":"39.675191,-90.198236",
		"area":"WC"
	},
	{
		"name":" JOHNSON LAKE-BANNER MARSH",
		"href":"/profiles/display_lake.php?waternum=00037",
		"county":"Peoria",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge","Walleye"],
		"latlon":"40.539153,-89.847780",
		"area":"NW"
	},
	{
		"name":" JOHNSON SAUK TRAIL LAKE",
		"href":"/profiles/display_lake.php?waternum=00007",
		"county":"Henry",
		"species":[],
		"latlon":"41.324993,-89.885158",
		"area":"NW"
	},
	{
		"name":" JONES PARK LAKE",
		"href":"/profiles/display_lake.php?waternum=00204",
		"county":"St. Clair",
		"species":[],
		"latlon":"38.626424,-90.119334",
		"area":"WC"
	},
	{
		"name":" JONES STATE LAKE",
		"href":"/profiles/display_lake.php?waternum=00240",
		"county":"Saline",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"37.688493,-88.387703",
		"area":"S"
	},
	{
		"name":" JONES STATE LAKE POND",
		"href":"/profiles/display_lake.php?waternum=00298",
		"county":"Saline",
		"species":[],
		"latlon":"37.700077,-88.377301",
		"area":"S"
	},
	{
		"name":" JUBILEE COLLEGE S.P. POND",
		"href":"/profiles/display_lake.php?waternum=01004",
		"county":"Peoria",
		"species":[],
		"latlon":"40.825273,-89.812908",
		"area":"NW"
	},
	{
		"name":" KASKASKIA RIVER",
		"href":"/profiles/display_lake.php?waternum=00200",
		"county":"Randolph",
		"species":["Black crappie","Blue catfish","Bluegill","Channel catfish","Crappie","Flathead catfish","Largemouth bass","Sauger","Smallmouth bass","Walleye","White bass"],
		"latlon":"38.369475,-89.789723",
		"area":""
	},
	{
		"name":" KAUFMAN LAKE (CPD)",
		"href":"/profiles/display_lake.php?waternum=00103",
		"county":"Champaign",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge"],
		"latlon":"40.115486,-88.288875",
		"area":"EC"
	},
	{
		"name":" KINCAID CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04647",
		"county":"Christian",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"39.578094,-89.374087",
		"area":"WC"
	},
	{
		"name":" KINKAID LAKE",
		"href":"/profiles/display_lake.php?waternum=00253",
		"county":"Jackson",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge","Redear sunfish","Smallmouth bass","Walleye"],
		"latlon":"39.578172,-89.374137",
		"area":"S"
	},
	{
		"name":" LAKE OF EGYPT",
		"href":"/profiles/display_lake.php?waternum=04842",
		"county":"Johnson",
		"species":[],
		"latlon":"37.611554,-88.935501",
		"area":"S"
	},
	{
		"name":" LAKE OF THE WOODS (CCFPD)",
		"href":"/profiles/display_lake.php?waternum=00362",
		"county":"Champaign",
		"species":[],
		"latlon":"40.200302,-88.379311",
		"area":"EC"
	},
	{
		"name":" LASALLE COOLING LAKE",
		"href":"/profiles/display_lake.php?waternum=00023",
		"county":"LaSalle",
		"species":[],
		"latlon":"41.255124,-88.638932",
		"area":"NW"
	},
	{
		"name":" LE-AQUA-NA, LAKE",
		"href":"/profiles/display_lake.php?waternum=00003",
		"county":"Stephenson",
		"species":[],
		"latlon":"42.420938,-89.832539",
		"area":"NW"
	},
	{
		"name":" LEVINGS LAKE",
		"href":"/profiles/display_lake.php?waternum=04105",
		"county":"Winnebago",
		"species":[],
		"latlon":"42.260344,-89.132262",
		"area":"NW"
	},
	{
		"name":" LINCOLN TRAIL LAKE",
		"href":"/profiles/display_lake.php?waternum=00115",
		"county":"Clark",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Redear sunfish","Walleye","Warmouth"],
		"latlon":"39.341370,-87.721820",
		"area":"EC"
	},
	{
		"name":" LITTLE CACHE LAKE",
		"href":"/profiles/display_lake.php?waternum=01011",
		"county":"Johnson",
		"species":["Bluegill","Largemouth bass","Redear sunfish","White crappie"],
		"latlon":"37.466155,-88.859655",
		"area":"S"
	},
	{
		"name":" LITTLE GRASSY LAKE",
		"href":"/profiles/display_lake.php?waternum=00375",
		"county":"Williamson",
		"species":["Bluegill","Largemouth bass","Redear sunfish"],
		"latlon":"37.630460,-89.145276",
		"area":"S"
	},
	{
		"name":" LOAMI CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04648",
		"county":"Sangamon",
		"species":[],
		"latlon":"39.667500,-89.853809",
		"area":"WC"
	},
	{
		"name":" LONG LAKE - KICKAPOO",
		"href":"/profiles/display_lake.php?waternum=00095",
		"county":"Vermilion",
		"species":[],
		"latlon":"40.128633,-87.731198",
		"area":"EC"
	},
	{
		"name":" LOU YEAGER LAKE",
		"href":"/profiles/display_lake.php?waternum=04607",
		"county":"Montgomery",
		"species":["Bluegill","Channel catfish","Largemouth bass","White crappie"],
		"latlon":"39.228370,-89.604695",
		"area":"WC"
	},
	{
		"name":" MACKINAW BIG POND",
		"href":"/profiles/display_lake.php?waternum=04060",
		"county":"Tazewell",
		"species":[],
		"latlon":"40.551174,-89.310398",
		"area":"NW"
	},
	{
		"name":" MALLARD LAKE (DCFPD)",
		"href":"/profiles/display_lake.php?waternum=02076",
		"county":"DuPage",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge","Northern pike","Walleye"],
		"latlon":"41.961567,-88.132522",
		"area":"NE"
	},
	{
		"name":" MAPLE LAKE (CCFPD)",
		"href":"/profiles/display_lake.php?waternum=00384",
		"county":"Cook",
		"species":[],
		"latlon":"41.714696,-87.890315",
		"area":"NE"
	},
	{
		"name":" MASCOUTAH CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04655",
		"county":"St. Clair",
		"species":[],
		"latlon":"38.494428,-89.822780",
		"area":"WC"
	},
	{
		"name":" MATTOON, LAKE",
		"href":"/profiles/display_lake.php?waternum=00156",
		"county":"Shelby",
		"species":["Bluegill","Channel catfish","Common carp","Crappie","Flathead catfish","Freshwater drum","Hybrid Striped Bass (Wiper)","Largemouth bass","Walleye x Sauger hybrid (Saugeye)"],
		"latlon":"39.347206,-88.476671",
		"area":"EC"
	},
	{
		"name":" MAZONIA LAKE #00",
		"href":"/profiles/display_lake.php?waternum=20035",
		"county":"Grundy",
		"species":[],
		"latlon":"",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #1",
		"href":"/profiles/display_lake.php?waternum=04235",
		"county":"Grundy",
		"species":[],
		"latlon":"",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #10 - CLEAR LAKE",
		"href":"/profiles/display_lake.php?waternum=04219",
		"county":"Grundy",
		"species":[],
		"latlon":"41.188288,-88.259405",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #3 - BASS LAKE",
		"href":"/profiles/display_lake.php?waternum=04213",
		"county":"Grundy",
		"species":[],
		"latlon":"41.205661,-88.277558",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #4",
		"href":"/profiles/display_lake.php?waternum=04214",
		"county":"Grundy",
		"species":[],
		"latlon":"41.205080,-88.274340",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #5",
		"href":"/profiles/display_lake.php?waternum=04321",
		"county":"Grundy",
		"species":[],
		"latlon":"",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #6 - GOOSE LAKE",
		"href":"/profiles/display_lake.php?waternum=04215",
		"county":"Grundy",
		"species":[],
		"latlon":"41.202691,-88.270649",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #7 - BULLHEAD LAKE",
		"href":"/profiles/display_lake.php?waternum=04216",
		"county":"Grundy",
		"species":[],
		"latlon":"41.197750,-88.273481",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #8 - CARP LAKE",
		"href":"/profiles/display_lake.php?waternum=04217",
		"county":"Grundy",
		"species":[],
		"latlon":"41.193714,-88.270005",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKE #9 - GAR LAKE",
		"href":"/profiles/display_lake.php?waternum=04358",
		"county":"Grundy",
		"species":[],
		"latlon":"41.188385,-88.266143",
		"area":"NE"
	},
	{
		"name":" MAZONIA LAKES",
		"href":"/profiles/display_lake.php?waternum=04218",
		"county":"Grundy",
		"species":["Bluegill","Channel catfish","Crappie","Flathead catfish","Largemouth bass","Northern pike","Redear sunfish"],
		"latlon":"41.196908,-88.270106",
		"area":"NE"
	},
	{
		"name":" MCCULLOM LAKE",
		"href":"/profiles/display_lake.php?waternum=00068",
		"county":"McHenry",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Northern pike"],
		"latlon":"42.360965,-88.290472",
		"area":"NE"
	},
	{
		"name":" MCLEANSBORO CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=04810",
		"county":"Hamilton",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"38.085233,-88.554537",
		"area":"S"
	},
	{
		"name":" MERMET STATE LAKE",
		"href":"/profiles/display_lake.php?waternum=00241",
		"county":"Massac",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"37.257884,-88.846516",
		"area":"S"
	},
	{
		"name":"LAKE MICHIGAN",
		"href":"/lmich/",
		"species":["Bluegill","Brown trout","Common carp","Channel catfish","Coho salmon","Crappie","Freshwater drum","King salmon","Largemouth bass","Perch","Sheephead","Silver bass","Smallmouth bass","Smelt","Steelhead","Trout"],
		"latlon":"42.111575,-87.531519",
		"area":"NE"
	},
	{
		"name":" MILL CREEK LAKE",
		"href":"/profiles/display_lake.php?waternum=00116",
		"county":"Clark",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge","Redear sunfish"],
		"latlon":"39.436800,-87.803847",
		"area":"EC"
	},
	{
		"name":" MILLER PARK LAKE",
		"href":"/profiles/display_lake.php?waternum=00104",
		"county":"McLean",
		"species":["Bluegill","Channel catfish","Common carp","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"40.466235,-89.004605",
		"area":"EC"
	},
	{
		"name":" MILLIKEN, LAKE",
		"href":"/profiles/display_lake.php?waternum=00057",
		"county":"Will",
		"species":[],
		"latlon":"41.337808,-88.181908",
		"area":"NE"
	},
	{
		"name":" MINERAL SPRINGS PK LAGOON",
		"href":"/profiles/display_lake.php?waternum=00048",
		"county":"Tazewell",
		"species":[],
		"latlon":"40.564191,-89.630150",
		"area":"NW"
	},
	{
		"name":" MINGO, LAKE",
		"href":"/profiles/display_lake.php?waternum=00094",
		"county":"Vermilion",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge","Redear sunfish"],
		"latlon":"40.2124485,-87.7285944",
		"area":"EC"
	},
	{
		"name":" MONEE RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=00061",
		"county":"Will",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"41.3909605,-87.7614302",
		"area":"NE"
	},
	{
		"name":" MT. OLIVE OLD CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00185",
		"county":"Macoupin",
		"species":[],
		"latlon":"39.086575,-89.742703",
		"area":"WC"
	},
	{
		"name":" MT. PULASKI P.D. LAKE",
		"href":"/profiles/display_lake.php?waternum=04634",
		"county":"Logan",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"39.994782,-89.273957",
		"area":"WC"
	},
	{
		"name":" MT. VERNON G.F. POND",
		"href":"/profiles/display_lake.php?waternum=00293",
		"county":"Jefferson",
		"species":[],
		"latlon":"38.241840,-88.870720",
		"area":"S"
	},
	{
		"name":" MURPHYSBORO, LAKE",
		"href":"/profiles/display_lake.php?waternum=00255",
		"county":"Jackson",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"37.780143,-89.3818303",
		"area":"S"
	},
	{
		"name":" NEWTON LAKE",
		"href":"/profiles/display_lake.php?waternum=00225",
		"county":"Jasper",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","White bass"],
		"latlon":"38.9191448,-88.2819237",
		"area":"S"
	},
	{
		"name":" NORRIS CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=00498",
		"county":"White",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.979536,-88.313486",
		"area":"S"
	},
	{
		"name":" NORTH CHARTER OAK LAKE",
		"href":"/profiles/display_lake.php?waternum=04093",
		"county":"Peoria",
		"species":[],
		"latlon":"40.766172,-89.675071",
		"area":"NW"
	},
	{
		"name":" OAKLAND CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00117",
		"county":"Coles",
		"species":["Channel catfish"],
		"latlon":"39.664368,-88.016363",
		"area":"EC"
	},
	{
		"name":" OLSEN LAKE",
		"href":"/profiles/display_lake.php?waternum=04106",
		"county":"Winnebago",
		"species":[],
		"latlon":"42.354446,-88.957454",
		"area":"NW"
	},
	{
		"name":" OMAHA RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04856",
		"county":"Gallatin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.892308,-88.320422",
		"area":"S"
	},
	{
		"name":" OMAHA TOWNSHIP CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=52900",
		"county":"Gallatin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.900346,-88.326243",
		"area":"S"
	},
	{
		"name":" OPOSSUM POND - LSP",
		"href":"/profiles/display_lake.php?waternum=00154",
		"county":"Shelby",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"39.449939,-88.775363",
		"area":"EC"
	},
	{
		"name":" OTTER LAKE",
		"href":"/profiles/display_lake.php?waternum=00182",
		"county":"Macoupin",
		"species":["Channel catfish","Crappie","Hybrid Striped Bass (Wiper)","Largemouth bass","Muskellunge"],
		"latlon":"39.419030,-89.898739",
		"area":"WC"
	},
	{
		"name":" PALMYRA-TERRY PARK POND",
		"href":"/profiles/display_lake.php?waternum=00592",
		"county":"Macoupin",
		"species":["Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"39.443793,-89.972397",
		"area":"WC"
	},
	{
		"name":" PARADISE, LAKE",
		"href":"/profiles/display_lake.php?waternum=00119",
		"county":"Coles",
		"species":["Crappie","Largemouth bass"],
		"latlon":"39.419107,-88.432352",
		"area":"EC"
	},
	{
		"name":" PARIS EAST LAKE",
		"href":"/profiles/display_lake.php?waternum=00128",
		"county":"Edgar",
		"species":["Channel catfish","Crappie"],
		"latlon":"39.635291,-87.680858",
		"area":"EC"
	},
	{
		"name":" PARIS WEST LAKE",
		"href":"/profiles/display_lake.php?waternum=00129",
		"county":"Edgar",
		"species":["Channel catfish"],
		"latlon":"39.638332,-87.701372",
		"area":"EC"
	},
	{
		"name":" PECATONICA RIVER",
		"href":"/profiles/display_lake.php?waternum=70075",
		"county":"Multiple",
		"species":["Channel catfish","Smallmouth bass","Walleye"],
		"latlon":"42.324582,-89.381266",
		"area":""
	},
	{
		"name":" PIERCE LAKE",
		"href":"/profiles/display_lake.php?waternum=00017",
		"county":"Winnebago",
		"species":[],
		"latlon":"42.348706,-88.980070",
		"area":"NW"
	},
	{
		"name":" PINCKNEYVILLE CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=04846",
		"county":"Perry",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"38.102144,-89.401129",
		"area":"S"
	},
	{
		"name":" PINE CREEK",
		"href":"/profiles/display_lake.php?waternum=00291",
		"county":"Ogle",
		"species":["Crappie","Redear sunfish","Smallmouth bass"],
		"latlon":"41.994034,-89.471198",
		"area":""
	},
	{
		"name":" PITTSFIELD LAKE",
		"href":"/profiles/display_lake.php?waternum=00165",
		"county":"Pike",
		"species":["Channel catfish","Crappie","Flathead catfish","Hybrid Striped Bass (Wiper)","Largemouth bass","Walleye"],
		"latlon":"39.637903,-90.752308",
		"area":"WC"
	},
	{
		"name":" POUNDS HOLLOW LAKE",
		"href":"/profiles/display_lake.php?waternum=00248",
		"county":"Hardin",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"37.617405,-88.274273",
		"area":"S"
	},
	{
		"name":" POWDERHORN LAKE",
		"href":"/profiles/display_lake.php?waternum=04283",
		"county":"Cook",
		"species":[],
		"latlon":"41.642316,-87.530743",
		"area":"NE"
	},
	{
		"name":" POWERTON LAKE",
		"href":"/profiles/display_lake.php?waternum=00039",
		"county":"Tazewell",
		"species":["Black crappie","Channel catfish","Hybrid Striped Bass (Wiper)","Largemouth bass","Smallmouth bass"],
		"latlon":"40.5479401,-89.7051206",
		"area":"NW"
	},
	{
		"name":" PRAIRIE LAKE (Site M)- JEPCSFWA",
		"href":"/profiles/display_lake.php?waternum=04666",
		"county":"Cass",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Muskellunge","Redear sunfish","Smallmouth bass"],
		"latlon":"39.989288,-90.063398",
		"area":"WC"
	},
	{
		"name":" PRK - WILLOW LAKE",
		"href":"/profiles/display_lake.php?waternum=04725",
		"county":"St. Clair",
		"species":[],
		"latlon":"",
		"area":"WC"
	},
	{
		"name":" PROSPECT PARK POND",
		"href":"/profiles/display_lake.php?waternum=00550",
		"county":"Rock Island",
		"species":[],
		"latlon":"41.477915,-90.511941",
		"area":"NW"
	},
	{
		"name":" PYRAMID-BLUE WING LAKE",
		"href":"/profiles/display_lake.php?waternum=53037",
		"county":"Perry",
		"species":["Bluegill","Channel catfish","Crappie"],
		"latlon":"37.984773,-89.501661",
		"area":"S"
	},
	{
		"name":" PYRAMID-CANVASBACK LAKE",
		"href":"/profiles/display_lake.php?waternum=53050",
		"county":"Perry",
		"species":["Bluegill","Channel catfish","Crappie","Muskellunge","Walleye"],
		"latlon":"37.993867,-89.508612",
		"area":"S"
	},
	{
		"name":" PYRAMID-GOLDENEYE LAKE",
		"href":"/profiles/display_lake.php?waternum=53026",
		"county":"Perry",
		"species":["Black crappie","Bluegill","Channel catfish","Muskellunge","Redear sunfish"],
		"latlon":"38.031349,-89.468709",
		"area":"S"
	},
	{
		"name":" PYRAMID-GREEN WING LAKE",
		"href":"/profiles/display_lake.php?waternum=53033",
		"county":"Perry",
		"species":["Bluegill","Channel catfish","Crappie","Walleye"],
		"latlon":"37.993632,-89.534648",
		"area":"S"
	},
	{
		"name":" PYRAMID-MALLARD LAKE",
		"href":"/profiles/display_lake.php?waternum=53049",
		"county":"Perry",
		"species":["Bluegill","Crappie"],
		"latlon":"37.991669,-89.495529",
		"area":"S"
	},
	{
		"name":" PYRAMID-MERGANSER LAKE",
		"href":"/profiles/display_lake.php?waternum=53029",
		"county":"Perry",
		"species":["Channel catfish","Crappie"],
		"latlon":"38.021703,-89.569415",
		"area":"S"
	},
	{
		"name":" PYRAMID-SUPER LAKE",
		"href":"/profiles/display_lake.php?waternum=53044",
		"county":"Perry",
		"species":["Bluegill","Channel catfish","Crappie"],
		"latlon":"38.015536,-89.499684",
		"area":"S"
	},
	{
		"name":" RACCOON LAKE",
		"href":"/profiles/display_lake.php?waternum=04858",
		"county":"Marion",
		"species":[],
		"latlon":"38.541726,-89.097674",
		"area":"S"
	},
	{
		"name":" RAMSEY LAKE",
		"href":"/profiles/display_lake.php?waternum=00214",
		"county":"Fayette",
		"species":[],
		"latlon":"39.163613,-89.130547",
		"area":"S"
	},
	{
		"name":" RANDOLPH COUNTY LAKE",
		"href":"/profiles/display_lake.php?waternum=00292",
		"county":"Randolph",
		"species":["Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"37.9759067,-89.7986341",
		"area":"WC"
	},
	{
		"name":" RED HILLS LAKE",
		"href":"/profiles/display_lake.php?waternum=00223",
		"county":"Lawrence",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"38.727544,-87.835867",
		"area":"S"
	},
	{
		"name":" REND LAKE",
		"href":"/profiles/display_lake.php?waternum=00281",
		"county":"Franklin",
		"species":["Bluegill","Channel catfish","Crappie","Flathead catfish","Hybrid Striped Bass (Wiper)","Largemouth bass","White bass"],
		"latlon":"38.1114398,-88.949682",
		"area":"S"
	},
	{
		"name":" RIDGE LAKE - FRSP",
		"href":"/profiles/display_lake.php?waternum=00269",
		"county":"Coles",
		"species":[],
		"latlon":"39.403603,-88.154801",
		"area":"EC"
	},
	{
		"name":" ROCK RIVER",
		"href":"/profiles/display_lake.php?waternum=00534",
		"county":"Ogle",
		"species":["Channel catfish","Flathead catfish","Smallmouth bass","Walleye"],
		"latlon":"",
		"area":""
	},
	{
		"name":" ROCK SPRINGS BIKE TRAIL POND",
		"href":"/profiles/display_lake.php?waternum=04491",
		"county":"Macon",
		"species":[],
		"latlon":"39.824584,-89.017614",
		"area":"EC"
	},
	{
		"name":" ROCK SPRINGS POND (MCCD)",
		"href":"/profiles/display_lake.php?waternum=00133",
		"county":"Macon",
		"species":[],
		"latlon":"39.824591,-89.011882",
		"area":"EC"
	},
	{
		"name":" ROODHOUSE PARK LAKE",
		"href":"/profiles/display_lake.php?waternum=00190",
		"county":"Greene",
		"species":["","Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"39.4648709,-90.365388",
		"area":"WC"
	},
	{
		"name":" RV LAKE W.S.C.",
		"href":"/profiles/display_lake.php?waternum=40000",
		"county":"Randolph",
		"species":["Bluegill","Crappie","Largemouth bass"],
		"latlon":"38.1836292,-89.725071",
		"area":"WC"
	},
	{
		"name":" SAHARA LAKE",
		"href":"/profiles/display_lake.php?waternum=52500",
		"county":"Saline",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.725375,-88.675643",
		"area":"S"
	},
	{
		"name":" SAM DALE LAKE",
		"href":"/profiles/display_lake.php?waternum=00236",
		"county":"Wayne",
		"species":["Bluegill","Channel catfish","Largemouth bass","Muskellunge","Redear sunfish","White crappie"],
		"latlon":"38.5414767,-88.5837063",
		"area":"S"
	},
	{
		"name":" SAM PARR LAKE",
		"href":"/profiles/display_lake.php?waternum=00222",
		"county":"Jasper",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"39.0226102,-88.1200346",
		"area":"S"
	},
	{
		"name":" SAND LAKE",
		"href":"/profiles/display_lake.php?waternum=00082",
		"county":"Lake",
		"species":["Channel catfish","Largemouth bass","Smallmouth bass"],
		"latlon":"42.462374,-87.807570",
		"area":"NE"
	},
	{
		"name":" SANGCHRIS, LAKE",
		"href":"/profiles/display_lake.php?waternum=00168",
		"county":"Christian",
		"species":["Channel catfish","Crappie","Flathead catfish","Largemouth bass","Striped bass"],
		"latlon":"39.6014657,-89.4806624",
		"area":"WC"
	},
	{
		"name":" SARA, LAKE",
		"href":"/profiles/display_lake.php?waternum=00221",
		"county":"Effingham",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"39.1381438,-88.6393121",
		"area":"S"
	},
	{
		"name":" SCHUY-RUSH LAKE",
		"href":"/profiles/display_lake.php?waternum=00450",
		"county":"Schuyler",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"40.0805736,-90.5486374",
		"area":"WC"
	},
	{
		"name":" SESSER CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=04860",
		"county":"Franklin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"38.0705901,-89.03601",
		"area":"S"
	},
	{
		"name":" SHABBONA LAKE",
		"href":"/profiles/display_lake.php?waternum=00014",
		"county":"DeKalb",
		"species":["Bluegill","Channel catfish","Crappie","Hybrid Striped Bass (Wiper)","Largemouth bass","Muskellunge","Walleye"],
		"latlon":"41.746400,-88.858733",
		"area":"NW"
	},
	{
		"name":" SHELBYVILLE, LAKE",
		"href":"/profiles/display_lake.php?waternum=00272",
		"county":"Shelby",
		"species":["Bigmouth buffalo","Bluegill","Channel catfish","Common carp","Crappie","Flathead catfish","Freshwater drum","Largemouth bass","Muskellunge","Sauger","Smallmouth bass","Walleye","White bass","Yellow bass"],
		"latlon":"39.5129309,-88.7084842",
		"area":"EC"
	},
	{
		"name":" SHOVEL LAKE-BANNER MARSH",
		"href":"/profiles/display_lake.php?waternum=00505",
		"county":"Fulton",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge","Walleye"],
		"latlon":"40.539520,-89.848217",
		"area":"NW"
	},
	{
		"name":" SILOAM SPRINGS (AKA CRAB APPLE)",
		"href":"/profiles/display_lake.php?waternum=00161",
		"county":"Adams",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Rainbow trout"],
		"latlon":"39.8828348,-90.9395657",
		"area":"WC"
	},
	{
		"name":" SILVER LAKE (HIGHLAND)",
		"href":"/profiles/display_lake.php?waternum=00191",
		"county":"Madison",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish","Sauger"],
		"latlon":"38.7770004,-89.6992493",
		"area":"WC"
	},
	{
		"name":" SILVER LAKE - DUPAGE CO.",
		"href":"/profiles/display_lake.php?waternum=00193",
		"county":"DuPage",
		"species":[],
		"latlon":"41.835428,-88.175358",
		"area":"NE"
	},
	{
		"name":" SKOKIE LAGOONS WATERSHED",
		"href":"/profiles/display_lake.php?waternum=00170",
		"county":"Lake",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Northern pike","Walleye"],
		"latlon":"42.1236904,-87.774386",
		"area":"NE"
	},
	{
		"name":" SPRING GROVE REARING AREA",
		"href":"/profiles/display_lake.php?waternum=09026",
		"county":"McHenry",
		"species":[],
		"latlon":"42.442067,-88.239628",
		"area":"NE"
	},
	{
		"name":" SPRING LAKE (NORTH)",
		"href":"/profiles/display_lake.php?waternum=00040",
		"county":"Tazewell",
		"species":["Channel catfish","Crappie","Largemouth bass","Muskellunge"],
		"latlon":"40.471617,-89.858397",
		"area":"NW"
	},
	{
		"name":" SPRING LAKE (SOUTH)",
		"href":"/profiles/display_lake.php?waternum=00465",
		"county":"Tazewell",
		"species":["Largemouth bass","Northern pike"],
		"latlon":"40.4643397,-89.8716456",
		"area":"NW"
	},
	{
		"name":" SPRINGFIELD PARK DIST. PONDS",
		"href":"/profiles/display_lake.php?waternum=04758",
		"county":"Sangamon",
		"species":[],
		"latlon":"39.729683,-89.656115",
		"area":"WC"
	},
	{
		"name":" SPRINGFIELD, LAKE",
		"href":"/profiles/display_lake.php?waternum=00172",
		"county":"Sangamon",
		"species":["Black crappie","Bluegill","Channel catfish","Crappie","Flathead catfish","Largemouth bass","Sauger","White bass"],
		"latlon":"39.706388,-89.604341",
		"area":"WC"
	},
	{
		"name":" STAUNTON CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00183",
		"county":"Macoupin",
		"species":[],
		"latlon":"39.043820,-89.777847",
		"area":"WC"
	},
	{
		"name":" STERLING LAKE (LCFPD)",
		"href":"/profiles/display_lake.php?waternum=00555",
		"county":"Lake",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Muskellunge","Walleye"],
		"latlon":"42.4766747,-87.9397024",
		"area":"NE"
	},
	{
		"name":" STOREY, LAKE",
		"href":"/profiles/display_lake.php?waternum=00026",
		"county":"Knox",
		"species":[],
		"latlon":"40.986941,-90.392248",
		"area":"NW"
	},
	{
		"name":" SUGAR CREEK LAKE",
		"href":"/profiles/display_lake.php?waternum=01016",
		"county":"Pope",
		"species":[],
		"latlon":"37.394428,-88.687181",
		"area":"S"
	},
	{
		"name":" SULE, LAKE",
		"href":"/profiles/display_lake.php?waternum=04112",
		"county":"Ogle",
		"species":[],
		"latlon":"41.909355,-89.026537",
		"area":"NW"
	},
	{
		"name":" SUNSET LAKE - CCFPD",
		"href":"/profiles/display_lake.php?waternum=04556",
		"county":"Champaign",
		"species":[],
		"latlon":"40.182010,-88.423516",
		"area":"EC"
	},
	{
		"name":" TAMPIER (CCFPD), LAKE",
		"href":"/profiles/display_lake.php?waternum=00088",
		"county":"Cook",
		"species":["Bluegill","Channel catfish","crappie","Largemouth bass","Northern pike","Perch","Walleye"],
		"latlon":"41.649407,-87.903141",
		"area":"NE"
	},
	{
		"name":" TAYLORVILLE PARK DISTRICT POND",
		"href":"/profiles/display_lake.php?waternum=04708",
		"county":"Christian",
		"species":[],
		"latlon":"39.539307,-89.292818",
		"area":"WC"
	},
	{
		"name":" TAYLORVILLE, LAKE",
		"href":"/profiles/display_lake.php?waternum=04600",
		"county":"Christian",
		"species":["Bluegill","Channel catfish","Largemouth bass","Sauger","White crappie"],
		"latlon":"39.487725,-89.253821",
		"area":"WC"
	},
	{
		"name":" TEAL LAKE-SNAKEDEN HOLLOW",
		"href":"/profiles/display_lake.php?waternum=04186",
		"county":"Knox",
		"species":[],
		"latlon":"41.023450,-90.068190",
		"area":"NW"
	},
	{
		"name":" TECUMSEH LAKE",
		"href":"/profiles/display_lake.php?waternum=00245",
		"county":"Hardin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.483056,-88.325909",
		"area":"S"
	},
	{
		"name":" TEN MILE CREEK FWA",
		"href":"/profiles/display_lake.php?waternum=04801",
		"county":"Hamilton",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"38.208683,-88.762092",
		"area":"S"
	},
	{
		"name":" THOMPSON/FLAG LAKE",
		"href":"/profiles/display_lake.php?waternum=15099",
		"county":"Fulton",
		"species":[],
		"latlon":"40.354225, -90.071823",
		"area":"NW"
	},
	{
		"name":" TOLEDO, LAKE",
		"href":"/profiles/display_lake.php?waternum=04428",
		"county":"Cumberland",
		"species":[],
		"latlon":"39.276117,-88.233152",
		"area":"EC"
	},
	{
		"name":" TURNER LAKE - COLSP",
		"href":"/profiles/display_lake.php?waternum=00482",
		"county":"Lake",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Northern pike"],
		"latlon":"42.448969,-88.190926",
		"area":"NE"
	},
	{
		"name":" TUSCOLA CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00124",
		"county":"Douglas",
		"species":[],
		"latlon":"39.783510,-88.270675",
		"area":"EC"
	},
	{
		"name":" VANDALIA LAKE",
		"href":"/profiles/display_lake.php?waternum=00217",
		"county":"Fayette",
		"species":[],
		"latlon":"39.012776,-89.152255",
		"area":"S"
	},
	{
		"name":" VANHORN WOODS POND",
		"href":"/profiles/display_lake.php?waternum=00509",
		"county":"Will",
		"species":[],
		"latlon":"41.571644,-88.181734",
		"area":"NE"
	},
	{
		"name":" VERMILION, LAKE",
		"href":"/profiles/display_lake.php?waternum=00113",
		"county":"Vermilion",
		"species":["Bluegill","Channel catfish","Largemouth bass","White crappie"],
		"latlon":"40.1718305,-87.6467519",
		"area":"EC"
	},
	{
		"name":" VICTORIA, LAKE",
		"href":"/profiles/display_lake.php?waternum=04115",
		"county":"Winnebago",
		"species":[],
		"latlon":"42.477699,-89.035835",
		"area":"NW"
	},
	{
		"name":" VILLA GROVE WEST LAKE",
		"href":"/profiles/display_lake.php?waternum=00125",
		"county":"Douglas",
		"species":["Black crappie","Bluegill","Channel catfish","Common carp","Largemouth bass","Rainbow trout","Redear sunfish","White crappie","Yellow bass"],
		"latlon":"39.861314,-88.157618",
		"area":"EC"
	},
	{
		"name":" VIRGINIA CITY RESERVOIR",
		"href":"/profiles/display_lake.php?waternum=02100",
		"county":"Cass",
		"species":[],
		"latlon":"39.968405,-90.209915",
		"area":"WC"
	},
	{
		"name":" W. FRANKFORT NEW CITY",
		"href":"/profiles/display_lake.php?waternum=01651",
		"county":"Franklin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.904885,-88.797089",
		"area":"S"
	},
	{
		"name":" W. FRANKFORT OLD CITY",
		"href":"/profiles/display_lake.php?waternum=01652",
		"county":"Franklin",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass"],
		"latlon":"37.890526,-88.810522",
		"area":"S"
	},
	{
		"name":" WALNUT POINT LAKE",
		"href":"/profiles/display_lake.php?waternum=00127",
		"county":"Douglas",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"39.698536,-88.035412",
		"area":"EC"
	},
	{
		"name":" WASHINGTON COUNTY LAKE",
		"href":"/profiles/display_lake.php?waternum=00197",
		"county":"Washington",
		"species":["Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"38.271651,-89.356617",
		"area":"WC"
	},
	{
		"name":" WASHINGTON PARK LAKE - BOWEN",
		"href":"/profiles/display_lake.php?waternum=04084",
		"county":"Tazewell",
		"species":[],
		"latlon":"40.728802,-89.415730",
		"area":"NW"
	},
	{
		"name":" WASHINGTON PARK POND",
		"href":"/profiles/display_lake.php?waternum=00543",
		"county":"Sangamon",
		"species":[],
		"latlon":"39.788826,-89.673938",
		"area":"WC"
	},
	{
		"name":" WEINBERG KING POND #2",
		"href":"/profiles/display_lake.php?waternum=04767",
		"county":"Schuyler",
		"species":[],
		"latlon":"40.229048,-90.895968",
		"area":"WC"
	},
	{
		"name":" WELDON SPRINGS LAKE",
		"href":"/profiles/display_lake.php?waternum=00093",
		"county":"DeWitt",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Redear sunfish"],
		"latlon":"40.121957,-88.923450",
		"area":"EC"
	},
	{
		"name":" WHALON LAKE",
		"href":"/profiles/display_lake.php?waternum=20092",
		"county":"Will",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Smallmouth bass","Walleye"],
		"latlon":"41.715847,-88.092543",
		"area":"NE"
	},
	{
		"name":" WHEEL LAKE-BANNER MARSH",
		"href":"/profiles/display_lake.php?waternum=04053",
		"county":"Peoria",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Muskellunge","Walleye"],
		"latlon":"40.518252,-89.873966",
		"area":"NW"
	},
	{
		"name":" WHITE HALL CITY LAKE",
		"href":"/profiles/display_lake.php?waternum=00541",
		"county":"Greene",
		"species":[],
		"latlon":"39.444200,-90.378906",
		"area":"WC"
	},
	{
		"name":" WHITE OAK PARK LAKE",
		"href":"/profiles/display_lake.php?waternum=04490",
		"county":"McLean",
		"species":["Bluegill","Channel catfish","Crappie","Largemouth bass","Redear sunfish"],
		"latlon":"40.494309,-89.014704",
		"area":"EC"
	},
	{
		"name":" WILLIAMSVILLE, LAKE",
		"href":"/profiles/display_lake.php?waternum=00174",
		"county":"Sangamon",
		"species":["Bluegill","Channel catfish","Largemouth bass"],
		"latlon":"39.950948,-89.531090",
		"area":"WC"
	},
	{
		"name":" WOLF LAKE",
		"href":"/profiles/display_lake.php?waternum=00084",
		"county":"Cook",
		"species":["Black crappie","Bluegill","Channel catfish","Largemouth bass","Northern pike"],
		"latlon":"41.675376,-87.516073",
		"area":"NE"
	},
	{
		"name":" WYMAN LAKE",
		"href":"/profiles/display_lake.php?waternum=00147",
		"county":"Moultrie",
		"species":[],
		"latlon":"39.609414,-88.605758",
		"area":"EC"
	}
];