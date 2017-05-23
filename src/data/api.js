import xss from 'xss';
import helper from './databaseHelper';

//connect to the postgres server
module.exports = {

	testGet: function(req, res){
		res.sendStatus(200);
	},

	testPost: function(req, res){
		res.json(/*data*/);
	},

	register: function(req, res){
		
		var username = xss(req.body.userName);
		var owner = xss(req.body.owner);
		
		if((owner !== "true" && !xss(req.body.queueId)) || xss(req.body.queueId).length > 9){
			return res.status(400).send("Invalid or no Queueid");
		}

		var queueId;
		if(owner === "true"){
			queueId = xss(req.body.queueId) || helper.generateHash(5);
		}else{
			queueId = xss(req.body.queueId);
		}

		var hash = helper.generateHash();
		var hashArray = [hash];

		var valuesFor_insertIntoUserInfo = [username,hashArray,owner,hash];
    	var insertIntoUserInfo = 'INSERT INTO userinfo (userinfo_name, userinfo_hashname, UserInfo_Qowner, UserInfo_Active, UserInfo_hashNameId, userinfo_songsplayed) VALUES($1, $2, $3, true, $4,0)'
    	
    	var valuesFor_insertIntoQueues = [queueId,hashArray]
    	var insertIntoQueues = 'INSERT INTO queues (queue_id, users) VALUES($1, $2)';


    	var valuesFor_updateQueues = [queueId, hashArray];
    	var updateQueues = "update queues set users = (select users from queues where queue_id = $1) || $2 where queue_id = $1";

    	helper.executeQuery(insertIntoUserInfo, valuesFor_insertIntoUserInfo).then(data => {
	        console.log(data);
	        if(!data){
				return res.sendStatus(500);
			}

			if(owner === "true"){
				helper.executeQuery(insertIntoQueues, valuesFor_insertIntoQueues).then(result => {
					if(!result){
						return res.sendStatus(500);
					}
					return res.json({queueId: queueId});
				}).catch(error => {
			        console.log(error);
			        return res.sendStatus(500);
			    });

			}else{

		 		helper.executeQuery(updateQueues, valuesFor_updateQueues).then(result => {
		 			if(!result){
		 				return res.sendStatus(500);
		 			}
		 			return res.json({queueId: queueId});
		 		}).catch(error => {
			        console.log(error);
			        return res.sendStatus(500);
			    });

		 	}
	    })
	    .catch(error => {
	        console.log(error);
	        return res.sendStatus(500);
	    });
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