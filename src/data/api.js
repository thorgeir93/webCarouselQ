
//import sql from 'pg';
//var xss = require('xss'),

//var DATABASE_URL = process.env.DATABASE_URL;

module.exports = {

	/*app.get('/category', function(req, res) {
	  req.api.data = data;
	  res.redirect('/somewhere');
	});
	And later on after the redirect...
	
	app.get('/', function(req, res) {
	  var passedVariable = req.session.valid;
	  req.session.valid = null; // resets session variable
	  // Do something
	});*/


	// possibly some res.redirect('/somewhere');
	register: function(req, res){

		//so some database stuff

		//res.json(/*data*/)
		return res+10;
	},

	unregisterUser: function(req, res){

		//so some database stuff

		res.json(/*data*/)
	},
	addSong: function(req, res){

		//so some database stuff

		res.json(/*data*/)
	},
	removeSong: function(req, res){

		//so some database stuff

		res.json(/*data*/)
	},


	queueData: function(req, res){

		//do some database stuff

		res.json(/*data*/)
	},

	doesQueueExist: function(req, res){

		//do some database stuff

		res.json(/*data*/)
	}
}