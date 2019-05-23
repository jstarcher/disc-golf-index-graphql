#!/bin/bash

mongoimport --host mongodb --db DiscIndex --collection brands --type json --file /usr/src/data/brands.js --jsonArray
mongoimport --host mongodb --db DiscIndex --collection discs --type json --file /usr/src/data/discs.js --jsonArray
