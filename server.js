const allowCrossDomain = function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, x-access-token');
	res.set('Access-Control-Allow-Headers', 'X-Requested-With', 'Content-Type', 'Authorization');

	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
global.path = __dirname;
global.objectID = require('mongodb').ObjectID;
var api = require('./server/api');

app.use(bodyParser.json());
app.use(allowCrossDomain);
app.use("/", api);

global.MongoClient = require('mongodb').MongoClient
	, assert = require('assert');
global.url = 'mongodb://localhost:27017/';
MongoClient.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server");
	global.db = db.db("Test");
});

app.listen(3000)