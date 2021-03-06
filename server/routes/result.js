var express = require('express');
var router = express.Router();
var unirest = require('unirest');



router.get('/', function(req, res, next) {
	var dName = req.query.dName
	var oName = req.query.oName
	//http://localhost:8080/api/result?dName=paris&oName=chicago
	unirest.get("https://rome2rio12.p.mashape.com/Search?currency=usd&dKind=City&dName="+ oName + "&oKind=City&oName="+ dName)
	.header("X-Mashape-Key", "UGMUcYPwJkmshVBGRK8isF5PCE9Ap1ea4B5jsnPk1ebbElIiQ6")
	.header("Accept", "application/json")
	.end(function (result) {
		if(!result.body || !result.body.routes) {
		res.send(null);
		}
		else  res.json(result.body.routes);
	});
});


module.exports = router;

