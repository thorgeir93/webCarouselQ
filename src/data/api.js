import xss from 'xss';
import helper from './databaseHelper';

// TODO 
//      -   (thorgeir asks) return queueID when register ?
//      -   implement the queueID thing.

function doesQueueExist(queueId){

	var doesQueueExistQuery = "SELECT queue_id FROM queues WHERE queue_id = $1";

	helper.executeQuery(doesQueueExistQuery, queueId).then((data) => {
		return !data;
	}).catch((error) => {
		return res.status(500).send(error);
	})
}

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
			if(!doesQueueExist(queueId)){
				return res.status(404).send("Queue not found");
			}
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
	        
			if(owner === "true"){
				helper.executeQuery(insertIntoQueues, valuesFor_insertIntoQueues).then(result => {
					return res.json({queueId: queueId});
				}).catch(error => {
			        return res.status(500).send(error);
			    });
			}else{
		 		helper.executeQuery(updateQueues, valuesFor_updateQueues).then(result => {
		 			return res.json({queueId: queueId});
		 		}).catch(error => {
			        return res.status(500).send(error);
			    });
		 	}
	    })
	    .catch(error => {
	        console.log(error);
	        return res.status(500).send(error);
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

		res.json(/*data*/)
	}
}
