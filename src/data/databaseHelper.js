import sql from 'pg';

module.exports = {
	
	getClient: function(callback){

		var client = new sql.Client({
		    user: process.env.DB_USER,
		    password: process.env.DB_PASSWORD,
		    database: process.env.DB_DATABASE,
		    port: process.env.DB_PORT,
		    host: process.env.DB_HOST,
		    ssl: true
		}); 

		client.connect(function(error,client,done){
		   	if(error){
		   	  console.log(error);
		   	  callback(null);
		   	}else{
		   		console.log('vei nadi ad tengjast');
		   		return callback(client);
		   	}
	    });
	},

	executeQuery: function(client, query, values, callback){
		client.query(query, values, function(err, result){
			if(err){
				console.log(err);
				return callback(null);
			}
			else{
				return callback(result);
			}
		});
	},

	generateHashName: function(){
		
		//22fmaqjrr8matg663rti1amb1i
		var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < 25; i++ ){
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }

	    return text;
	}
}