
//import sql from 'pg';
//var xss = require('xss'),

import sql from 'pg';
var DATABASE = process.env.DATABASE_URL;

//connect to the postgres server


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
	test: function(req,res) {
  return res.status(200).json({
    message: "Hello world!"
  })},

	// possibly some res.redirect('/somewhere');
	register: function(req, res){
		
			console.log(DATABASE);
		//var connectToDatabase = function(cb){
			sql.connect(DATABASE, function(error,client,done){
		    if(error){
		      console.log(error);
		    }else{
		    	console.log('vei nadi ad tengjast');
		    	//return cb(client);
		    }
		});
		//}
		////so some database stuff
		//connectToDatabase((client) =>{
		//	console.log('vei nadi ad tengjast')
		//})

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