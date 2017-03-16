import api from './src/data/api';

module.exports = function(app){

    //returns 201 if success
    app.post('/api/register', api.register);

	app.get('/api/unregisterUser', api.unregisterUser);

	app.get('/api/addSong', api.addSong);

	app.get('/api/removeSong', api.removeSong);

	app.get('/api/queueData', api.queueData);

	app.get('/api/doesQueueExist', api.doesQueueExist);

}