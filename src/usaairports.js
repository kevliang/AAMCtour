var airports= [
  {
    "LocationID": "ATL",
    "Statename": "Georgia",
    "CountyState": "GA",
    "City": "Atlanta",
    "NAME": "Hartsfield - Jackson Atlanta Intl",
    "Lat": 33.6367,
    "Lng": -84.4279
  },
  {
    "LocationID": "ORD",
    "Statename": "Illinois",
    "CountyState": "IL",
    "City": "Chicago",
    "NAME": "Chicago O'hare Intl",
    "Lat": 41.9773,
    "Lng": -87.908
  },
  {
    "LocationID": "LAX",
    "Statename": "California",
    "CountyState": "CA",
    "City": "Los Angeles",
    "NAME": "Los Angeles Intl",
    "Lat": 33.9425,
    "Lng": -118.4071
  },
  {
    "LocationID": "DFW",
    "Statename": "Texas",
    "CountyState": "TX",
    "City": "Dallas-Fort Worth",
    "NAME": "Dallas-Fort Worth Intl",
    "Lat": 32.8972,
    "Lng": -97.0377
  },
  {
    "LocationID": "DEN",
    "Statename": "Colorado",
    "CountyState": "CO",
    "City": "Denver",
    "NAME": "Denver Intl",
    "Lat": 39.8617,
    "Lng": -104.6732
  },
  {
    "LocationID": "JFK",
    "Statename": "New York",
    "CountyState": "NY",
    "City": "New York",
    "NAME": "John F Kennedy Intl",
    "Lat": 40.6399,
    "Lng": -73.7787
  },
  {
    "LocationID": "MSP",
    "Statename": "Minnesota",
    "CountyState": "MN",
    "City": "Minneapolis",
    "NAME": "Minneapolis-St Paul Intl/wold-Chamberlain",
    "Lat": 44.882,
    "Lng": -93.2218
  },
  {
    "LocationID": "CLT",
    "Statename": "North Carolina",
    "CountyState": "NC",
    "City": "Charlotte",
    "NAME": "Charlotte/douglas Intl",
    "Lat": 35.2137,
    "Lng": -80.9491
  },
  {
    "LocationID": "PHX",
    "Statename": "Arizona",
    "CountyState": "AZ",
    "City": "Phoenix",
    "NAME": "Phoenix Sky Harbor Intl",
    "Lat": 33.4343,
    "Lng": -112.0116
  },
  {
    "LocationID": "MIA",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "Miami",
    "NAME": "Miami Intl",
    "Lat": 25.7954,
    "Lng": -80.2901
  },
  {
    "LocationID": "LAS",
    "Statename": "Nevada",
    "CountyState": "NV",
    "City": "Las Vegas",
    "NAME": "Mc Carran Intl",
    "Lat": 36.0801,
    "Lng": -115.1522
  },
  {
    "LocationID": "SFO",
    "Statename": "California",
    "CountyState": "CA",
    "City": "San Francisco",
    "NAME": "San Francisco Intl",
    "Lat": 37.6188,
    "Lng": -122.3754
  },
  {
    "LocationID": "IAH",
    "Statename": "Texas",
    "CountyState": "TX",
    "City": "Houston",
    "NAME": "George Bush Intercontinental/houston",
    "Lat": 29.9844,
    "Lng": -95.3414
  },
  {
    "LocationID": "SEA",
    "Statename": "Washington",
    "CountyState": "WA",
    "City": "Seattle",
    "NAME": "Seattle-Tacoma Intl",
    "Lat": 47.4499,
    "Lng": -122.3118
  },
  {
    "LocationID": "LGA",
    "Statename": "New York",
    "CountyState": "NY",
    "City": "New York",
    "NAME": "Laguardia",
    "Lat": 40.7773,
    "Lng": -73.8726
  },
  {
    "LocationID": "EWR",
    "Statename": "New Jersey",
    "CountyState": "NJ",
    "City": "Newark",
    "NAME": "Newark Liberty Intl",
    "Lat": 40.6925,
    "Lng": -74.1687
  },
  {
    "LocationID": "MCO",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "Orlando",
    "NAME": "Orlando Intl",
    "Lat": 28.4294,
    "Lng": -81.309
  },
  {
    "LocationID": "DTW",
    "Statename": "Michigan",
    "CountyState": "MI",
    "City": "Detroit",
    "NAME": "Detroit Metropolitan Wayne County",
    "Lat": 42.2124,
    "Lng": -83.3534
  },
  {
    "LocationID": "PHL",
    "Statename": "Pennsylvania",
    "CountyState": "PA",
    "City": "Philadelphia",
    "NAME": "Philadelphia Intl",
    "Lat": 39.8722,
    "Lng": -75.2409
  },
  {
    "LocationID": "DCA",
    "Statename": "Dist. of Columbia",
    "CountyState": "VA",
    "City": "Washington",
    "NAME": "Ronald Reagan Washington National",
    "Lat": 38.8514,
    "Lng": -77.0377
  },
  {
    "LocationID": "BOS",
    "Statename": "Massachusetts",
    "CountyState": "MA",
    "City": "Boston",
    "NAME": "General Edward Lawrence Logan Intl",
    "Lat": 42.3629,
    "Lng": -71.0064
  },
  {
    "LocationID": "FLL",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "Fort Lauderdale",
    "NAME": "Fort Lauderdale/hollywood Intl",
    "Lat": 26.0717,
    "Lng": -80.1497
  },
  {
    "LocationID": "BWI",
    "Statename": "Maryland",
    "CountyState": "MD",
    "City": "Baltimore",
    "NAME": "Baltimore/washington Intl Thurgood Marshal",
    "Lat": 39.1757,
    "Lng": -76.669
  },
  {
    "LocationID": "MDW",
    "Statename": "Illinois",
    "CountyState": "IL",
    "City": "Chicago",
    "NAME": "Chicago Midway Intl",
    "Lat": 41.786,
    "Lng": -87.7524
  },
  {
    "LocationID": "SLC",
    "Statename": "Utah",
    "CountyState": "UT",
    "City": "Salt Lake City",
    "NAME": "Salt Lake City Intl",
    "Lat": 40.7884,
    "Lng": -111.9778
  },
  {
    "LocationID": "MEM",
    "Statename": "Tennessee",
    "CountyState": "TN",
    "City": "Memphis",
    "NAME": "Memphis Intl",
    "Lat": 35.0424,
    "Lng": -89.9767
  },
  {
    "LocationID": "TPA",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "Tampa",
    "NAME": "Tampa Intl",
    "Lat": 27.9755,
    "Lng": -82.5332
  },
  {
    "LocationID": "SAN",
    "Statename": "California",
    "CountyState": "CA",
    "City": "San Diego",
    "NAME": "San Diego Intl",
    "Lat": 32.7336,
    "Lng": -117.1897
  },
  {
    "LocationID": "HNL",
    "Statename": "Hawaii",
    "CountyState": "HI",
    "City": "Honolulu",
    "NAME": "Honolulu Intl",
    "Lat": 21.3178,
    "Lng": -157.9203
  },
  {
    "LocationID": "IAD",
    "Statename": "Dist. of Columbia",
    "CountyState": "VA",
    "City": "Washington",
    "NAME": "Washington Dulles Intl",
    "Lat": 38.9474,
    "Lng": -77.4599
  },
  {
    "LocationID": "PDX",
    "Statename": "Oregon",
    "CountyState": "OR",
    "City": "Portland",
    "NAME": "Portland Intl",
    "Lat": 45.5887,
    "Lng": -122.5969
  },
  {
    "LocationID": "DAL",
    "Statename": "Texas",
    "CountyState": "TX",
    "City": "Dallas",
    "NAME": "Dallas Love Field",
    "Lat": 32.8471,
    "Lng": -96.8518
  },
  {
    "LocationID": "STL",
    "Statename": "Missouri",
    "CountyState": "MO",
    "City": "St Louis",
    "NAME": "Lambert-St Louis Intl",
    "Lat": 38.7487,
    "Lng": -90.37
  },
  {
    "LocationID": "HOU",
    "Statename": "Texas",
    "CountyState": "TX",
    "City": "Houston",
    "NAME": "William P Hobby",
    "Lat": 29.6454,
    "Lng": -95.2789
  },
  {
    "LocationID": "OAK",
    "Statename": "California",
    "CountyState": "CA",
    "City": "Oakland",
    "NAME": "Metropolitan Oakland Intl",
    "Lat": 37.7213,
    "Lng": -122.2211
  },
  {
    "LocationID": "AUS",
    "Statename": "Texas",
    "CountyState": "TX",
    "City": "Austin",
    "NAME": "Austin-Bergstrom Intl",
    "Lat": 30.1945,
    "Lng": -97.6699
  },
  {
    "LocationID": "MSY",
    "Statename": "Louisiana",
    "CountyState": "LA",
    "City": "New Orleans",
    "NAME": "Louis Armstrong New Orleans Intl",
    "Lat": 29.9933,
    "Lng": -90.259
  },
  {
    "LocationID": "MCI",
    "Statename": "Missouri",
    "CountyState": "MO",
    "City": "Kansas City",
    "NAME": "Kansas City Intl",
    "Lat": 39.2976,
    "Lng": -94.7139
  },
  {
    "LocationID": "IND",
    "Statename": "Indiana",
    "CountyState": "IN",
    "City": "Indianapolis",
    "NAME": "Indianapolis Intl",
    "Lat": 39.7173,
    "Lng": -86.2946
  },
  {
    "LocationID": "BNA",
    "Statename": "Tennessee",
    "CountyState": "TN",
    "City": "Nashville",
    "NAME": "Nashville Intl",
    "Lat": 36.1245,
    "Lng": -86.6782
  },
  {
    "LocationID": "SDF",
    "Statename": "Kentucky",
    "CountyState": "KY",
    "City": "Louisville",
    "NAME": "Louisville Intl-Standiford Field",
    "Lat": 38.1741,
    "Lng": -85.7365  },
  {
    "LocationID": "ANC",
    "Statename": "Alaska",
    "CountyState": "AK",
    "City": "Anchorage",
    "NAME": "Ted Stevens Anchorage Intl",
    "Lat": 61.1742,
    "Lng": -149.9982  },
  {
    "LocationID": "SAT",
    "Statename": "Texas",
    "CountyState": "TX",
    "City": "San Antonio",
    "NAME": "San Antonio Intl",
    "Lat": 29.534,
    "Lng": -98.4691  },
  {
    "LocationID": "SJC",
    "Statename": "California",
    "CountyState": "CA",
    "City": "San Jose",
    "NAME": "Norman Y Mineta San Jose Intl",
    "Lat": 37.3627,
    "Lng": -121.9291  },
  {
    "LocationID": "PIT",
    "Statename": "Pennsylvania",
    "CountyState": "PA",
    "City": "Pittsburgh",
    "NAME": "Pittsburgh Intl",
    "Lat": 40.4914,
    "Lng": -80.2327  },
  {
    "LocationID": "SNA",
    "Statename": "California",
    "CountyState": "CA",
    "City": "Santa Ana",
    "NAME": "John Wayne Airport-Orange County",
    "Lat": 33.6757,
    "Lng": -117.8682  },
  {
    "LocationID": "SMF",
    "Statename": "California",
    "CountyState": "CA",
    "City": "Sacramento",
    "NAME": "Sacramento Intl",
    "Lat": 38.6954,
    "Lng": -121.5908  },
  {
    "LocationID": "CLE",
    "Statename": "Ohio",
    "CountyState": "OH",
    "City": "Cleveland",
    "NAME": "Cleveland-Hopkins Intl",
    "Lat": 41.4094,
    "Lng": -81.8547  },
  {
    "LocationID": "CVG",
    "Statename": "Kentucky",
    "CountyState": "KY",
    "City": "Covington",
    "NAME": "Cincinnati/northern Kentucky Intl",
    "Lat": 39.0488,
    "Lng": -84.6678  },
  {
    "LocationID": "RSW",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "Fort Myers",
    "NAME": "Southwest Florida Intl",
    "Lat": 26.5362,
    "Lng": -81.7552  },
  {
    "LocationID": "SJU",
    "Statename": "Puerto Rico",
    "CountyState": "PR",
    "City": "San Juan",
    "NAME": "Luis Munoz Marin Intl",
    "Lat": 18.4394,
    "Lng": -66.0021  },
  {
    "LocationID": "BUF",
    "Statename": "New York",
    "CountyState": "NY",
    "City": "Buffalo",
    "NAME": "Buffalo Niagara Intl",
    "Lat": 42.9404,
    "Lng": -78.7306  },
  {
    "LocationID": "CMH",
    "Statename": "Ohio",
    "CountyState": "OH",
    "City": "Columbus",
    "NAME": "Port Columbus Intl",
    "Lat": 39.9969,
    "Lng": -82.8922  },
  {
    "LocationID": "BDL",
    "Statename": "Connecticut",
    "CountyState": "CT",
    "City": "Windsor Locks",
    "NAME": "Bradley Intl",
    "Lat": 41.9391,
    "Lng": -72.6834  },
  {
    "LocationID": "MKE",
    "Statename": "Wisconsin",
    "CountyState": "WI",
    "City": "Milwaukee",
    "NAME": "General Mitchell Intl",
    "Lat": 42.9469,
    "Lng": -87.8971  },
  {
    "LocationID": "JAX",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "Jacksonville",
    "NAME": "Jacksonville Intl",
    "Lat": 30.4941,
    "Lng": -81.6878  },
  {
    "LocationID": "ABQ",
    "Statename": "New Mexico",
    "CountyState": "NM",
    "City": "Albuquerque",
    "NAME": "Albuquerque Intl Sunport",
    "Lat": 35.0389,
    "Lng": -106.6083  },
  {
    "LocationID": "OGG",
    "Statename": "Hawaii",
    "CountyState": "HI",
    "City": "Kahului",
    "NAME": "Kahului",
    "Lat": 20.8986,
    "Lng": -156.4305  },
  {
    "LocationID": "ONT",
    "Statename": "California",
    "CountyState": "CA",
    "City": "Ontario",
    "NAME": "Ontario Intl",
    "Lat": 34.056,
    "Lng": -117.6012  },
  {
    "LocationID": "PBI",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "West Palm Beach",
    "NAME": "Palm Beach Intl",
    "Lat": 26.6832,
    "Lng": -80.0956  },
  {
    "LocationID": "RDU",
    "Statename": "North Carolina",
    "CountyState": "NC",
    "City": "Raleigh/durham",
    "NAME": "Raleigh-Durham Intl",
    "Lat": 35.8776,
    "Lng": -78.7875  },
  {
    "LocationID": "BUR",
    "Statename": "California",
    "CountyState": "CA",
    "City": "Burbank",
    "NAME": "Bob Hope",
    "Lat": 34.2007,
    "Lng": -118.3587  },
  {
    "LocationID": "OKC",
    "Statename": "Oklahoma",
    "CountyState": "OK",
    "City": "Oklahoma City",
    "NAME": "Will Rogers World",
    "Lat": 35.3931,
    "Lng": -97.6008  },
  {
    "LocationID": "OMA",
    "Statename": "Nebraska",
    "CountyState": "NE",
    "City": "Omaha",
    "NAME": "Eppley Airfield",
    "Lat": 41.3032,
    "Lng": -95.8941  },
  {
    "LocationID": "BOI",
    "Statename": "Idaho",
    "CountyState": "ID",
    "City": "Boise",
    "NAME": "Boise Air Terminal/gowen Fld",
    "Lat": 43.5644,
    "Lng": -116.2229  },
  {
    "LocationID": "GEG",
    "Statename": "Washington",
    "CountyState": "WA",
    "City": "Spokane",
    "NAME": "Spokane Intl",
    "Lat": 47.619,
    "Lng": -117.5352  },
  {
    "LocationID": "RNO",
    "Statename": "Nevada",
    "CountyState": "NV",
    "City": "Reno",
    "NAME": "Reno/tahoe Intl",
    "Lat": 39.4991,
    "Lng": -119.7681  },
  {
    "LocationID": "ELP",
    "Statename": "Texas",
    "CountyState": "TX",
    "City": "El Paso",
    "NAME": "El Paso Intl",
    "Lat": 31.8073,
    "Lng": -106.3764  },
  {
    "LocationID": "CHS",
    "Statename": "South Carolina",
    "CountyState": "SC",
    "City": "Charleston",
    "NAME": "Charleston Afb/intl",
    "Lat": 32.8986,
    "Lng": -80.0405  },
  {
    "LocationID": "MDT",
    "Statename": "Pennsylvania",
    "CountyState": "PA",
    "City": "Harrisburg",
    "NAME": "Harrisburg Intl",
    "Lat": 40.1932,
    "Lng": -76.7626  },
  {
    "LocationID": "PVD",
    "Statename": "Rhode Island",
    "CountyState": "RI",
    "City": "Providence",
    "NAME": "Theodore Francis Green State",
    "Lat": 41.724,
    "Lng": -71.4282  },
  {
    "LocationID": "RIC",
    "Statename": "Virginia",
    "CountyState": "VA",
    "City": "Richmond",
    "NAME": "Richmond Intl",
    "Lat": 37.5052,
    "Lng": -77.3197  },
  {
    "LocationID": "TUS",
    "Statename": "Arizona",
    "CountyState": "AZ",
    "City": "Tucson",
    "NAME": "Tucson Intl",
    "Lat": 32.1161,
    "Lng": -110.941  },
  {
    "LocationID": "DSM",
    "Statename": "Iowa",
    "CountyState": "IA",
    "City": "Des Moines",
    "NAME": "Des Moines Intl",
    "Lat": 41.534,
    "Lng": -93.6631  },
  {
    "LocationID": "TUL",
    "Statename": "Oklahoma",
    "CountyState": "OK",
    "City": "Tulsa",
    "NAME": "Tulsa Intl",
    "Lat": 36.1984,
    "Lng": -95.8881  },
  {
    "LocationID": "ORF",
    "Statename": "Virginia",
    "CountyState": "VA",
    "City": "Norfolk",
    "NAME": "Norfolk Intl",
    "Lat": 36.8946,
    "Lng": -76.2012  },
  {
    "LocationID": "LIH",
    "Statename": "Hawaii",
    "CountyState": "HI",
    "City": "Lihue",
    "NAME": "Lihue",
    "Lat": 21.976,
    "Lng": -159.339  },
  {
    "LocationID": "BHM",
    "Statename": "Alabama",
    "CountyState": "AL",
    "City": "Birmingham",
    "NAME": "Birmingham-Shuttlesworth Intl",
    "Lat": 33.5639,
    "Lng": -86.7523  },
  {
    "LocationID": "LGB",
    "Statename": "California",
    "CountyState": "CA",
    "City": "Long Beach",
    "NAME": "Long Beach /daugherty Field/",
    "Lat": 33.8178,
    "Lng": -118.1517  },
  {
    "LocationID": "ALB",
    "Statename": "New York",
    "CountyState": "NY",
    "City": "Albany",
    "NAME": "Albany Intl",
    "Lat": 42.7491,
    "Lng": -73.802  },
  {
    "LocationID": "HOM",
    "Statename": "Alaska",
    "CountyState": "AK",
    "City": "Homer",
    "NAME": "Homer",
    "Lat": 59.6455,
    "Lng": -151.4766  },
  {
    "LocationID": "GUM",
    "Statename": "Guam",
    "CountyState": "GU",
    "City": "Guam",
    "NAME": "Guam Intl",
    "Lat": 13.484,
    "Lng": 144.7971  },
  {
    "LocationID": "KOA",
    "Statename": "Hawaii",
    "CountyState": "HI",
    "City": "Kailua/kona",
    "NAME": "Kona Intl at Keahole",
    "Lat": 19.7388,
    "Lng": -156.0456  },
  {
    "LocationID": "MHT",
    "Statename": "New Hampshire",
    "CountyState": "NH",
    "City": "Manchester",
    "NAME": "Manchester",
    "Lat": 42.9328,
    "Lng": -71.4357  },
  {
    "LocationID": "ROC",
    "Statename": "New York",
    "CountyState": "NY",
    "City": "Rochester",
    "NAME": "Greater Rochester Intl",
    "Lat": 43.1191,
    "Lng": -77.6719  },
  {
    "LocationID": "LIT",
    "Statename": "Arkansas",
    "CountyState": "AR",
    "City": "Little Rock",
    "NAME": "Bill and Hillary Clinton National/adams Fi",
    "Lat": 34.7294,
    "Lng": -92.2248  },
  {
    "LocationID": "SYR",
    "Statename": "New York",
    "CountyState": "NY",
    "City": "Syracuse",
    "NAME": "Syracuse Hancock Intl",
    "Lat": 43.1112,
    "Lng": -76.1063  },
  {
    "LocationID": "CAK",
    "Statename": "Ohio",
    "CountyState": "OH",
    "City": "Akron",
    "NAME": "Akron-Canton Rgnl",
    "Lat": 40.9151,
    "Lng": -81.4436  },
  {
    "LocationID": "GSO",
    "Statename": "North Carolina",
    "CountyState": "NC",
    "City": "Greensboro",
    "NAME": "Piedmont Triad Intl",
    "Lat": 36.1013,
    "Lng": -79.9411  },
  {
    "LocationID": "NYL",
    "Statename": "Arizona",
    "CountyState": "AZ",
    "City": "Yuma",
    "NAME": "Yuma Mcas/yuma Intl",
    "Lat": 32.6566,
    "Lng": -114.606  },
  {
    "LocationID": "GRR",
    "Statename": "Michigan",
    "CountyState": "MI",
    "City": "Grand Rapids",
    "NAME": "Gerald R Ford Intl",
    "Lat": 42.8808,
    "Lng": -85.5228  },
  {
    "LocationID": "PWM",
    "Statename": "Maine",
    "CountyState": "ME",
    "City": "Portland",
    "NAME": "Portland Intl Jetport",
    "Lat": 43.6456,
    "Lng": -70.3086  },
  {
    "LocationID": "SFB",
    "Statename": "Florida",
    "CountyState": "FL",
    "City": "Orlando",
    "NAME": "Orlando Sanford Intl",
    "Lat": 28.777,
    "Lng": -81.2349  },
  {
    "LocationID": "SAV",
    "Statename": "Georgia",
    "CountyState": "GA",
    "City": "Savannah",
    "NAME": "Savannah/hilton Head Intl",
    "Lat": 32.1276,
    "Lng": -81.2021  },
  {
    "LocationID": "MYR",
    "Statename": "South Carolina",
    "CountyState": "SC",
    "City": "Myrtle Beach",
    "NAME": "Myrtle Beach Intl",
    "Lat": 33.6798,
    "Lng": -78.9283  },
  {
    "LocationID": "SCC",
    "Statename": "Alaska",
    "CountyState": "AK",
    "City": "Deadhorse",
    "NAME": "Deadhorse",
    "Lat": 70.1955,
    "Lng": -148.4658  },
  {
    "LocationID": "ICT",
    "Statename": "Kansas",
    "CountyState": "KS",
    "City": "Wichita",
    "NAME": "Wichita Dwight D Eisenhower National",
    "Lat": 37.6499,
    "Lng": -97.4331  },
  {
    "LocationID": "ITO",
    "Statename": "Hawaii",
    "CountyState": "HI",
    "City": "Hilo",
    "NAME": "Hilo Intl",
    "Lat": 19.7203,
    "Lng": -155.0485  },
  {
    "LocationID": "DAY",
    "Statename": "Ohio",
    "CountyState": "OH",
    "City": "Dayton",
    "NAME": "James M Cox Dayton Intl",
    "Lat": 39.9022,
    "Lng": -84.2194  }
]