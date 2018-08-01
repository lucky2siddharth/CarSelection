var fs = require('fs');
function getMakes() {
	return new Promise(function (resolve, reject) {
		db.collection('Make').find({}).toArray(function (err, result) {
			if (err) {
				reject(err);
			} else {
				resolve(result)
			}
		});
	});
};

function getData(req, res) {
	getMakes().then(function(data){
		res.send(data);
	}, function(error){
		res.status(401).send(error);
	});
}

function getImage(req, res) {
    res.sendFile(path+`/server/images/${req.params.make}/${req.params.model}/image.jpg`);
}

module.exports = {
    getData,
    getImage
}