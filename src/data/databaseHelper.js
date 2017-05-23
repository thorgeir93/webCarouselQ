var pgp = require('pg-promise')();

module.exports = {

	executeQuery: function(query, values){
		var sql = pgp({
		    host: process.env.DB_HOST,
		    port: process.env.DB_PORT,
		    database: process.env.DB_DATABASE,
		    user: process.env.DB_USER,
		    password: process.env.DB_PASSWORD,
		    ssl: true
    	});
		return sql.query(query, values)
	},

	executeBatchQuery: function(queries, values){
		//might be useful in the future but is not in use currently 23.05.2017
		var batchActions = [];

		var sql = pgp({
		    host: process.env.DB_HOST,
		    port: process.env.DB_PORT,
		    database: process.env.DB_DATABASE,
		    user: process.env.DB_USER,
		    password: process.env.DB_PASSWORD,
		    ssl: true
    	});

		return sql.tx(t => {

			for(var i = 0; i < queries.length; i++){
				console.log(queries[i], values[i]);
				batchActions.push(t.none(queries[i], values[i]));
			}

			return t.batch(batchActions);
		});
	},

	generateHash: function(specifiedLength){
		
		//22fmaqjrr8matg663rti1amb1i
		var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	    var length = specifiedLength || 25;
	    for( var i=0; i < length; i++ ){
	        text += possible.charAt(Math.floor(Math.random() * possible.length));
	    }

	    return text;
	}
}