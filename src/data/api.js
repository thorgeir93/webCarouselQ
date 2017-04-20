import xss from 'xss';
import helper from './databaseHelper';

//connect to the postgres server
module.exports = {

	// possibly some res.redirect('/somewhere');
	register: function(req, res){
		
		var username = xss(req.body.userName);
		var owner = xss(req.body.owner);
		var queueId = '\"'+xss(req.body.queueId)+'\"';
		var hash = helper.generateHashName();
		var hashArray = '{\"'+hash+'\"}';

		var valuesFor_insertIntoUserInfo = [username,hashArray,owner,hash];
    	var insertIntoUserInfo = 'INSERT INTO userinfo (userinfo_name, userinfo_hashname, UserInfo_Qowner, UserInfo_Active, UserInfo_hashNameId, userinfo_songsplayed) VALUES($1, $2, $3, true, $4,0)'
    	
    	var valuesFor_insertIntoQueues = [queueId,hashArray]
    	var insertIntoQueues = 'INSERT INTO queues (queue_id, users) VALUES($1, $2)';

    	var valuesFor_updateQueues = valuesFor_insertIntoQueues;
    	var updateQueues = 'update queues set users = (select users from queues where queue_id = $1) || $2 where queue_id = $1';

    	console.log(username, owner, queueId, hash, hashArray);
		helper.getClient((client) => {
			
			helper.executeQuery(client, insertIntoUserInfo, valuesFor_insertIntoUserInfo, (result) => {
				if(!result){
					return res.sendStatus(500);
				}

				if(owner){
					helper.executeQuery(client, insertIntoQueues, valuesFor_insertIntoQueues,(result) => {
						if(!result){
							return res.sendStatus(500);
						}
						return res.sendStatus(200);
					});
				}else{
					helper.executeQuery(client, updateQueues, valuesFor_updateQueues,(result) => {
						if(!result){
							return res.sendStatus(500);
						}
						return res.sendStatus(200);
					});
				}
			});
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
