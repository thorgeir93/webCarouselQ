import api from './src/data/api';
import spotifyApi from './src/data/spotifyApi';

module.exports = function(app){

    console.log( 'Setting up api\'s' )

    //returns 201 if success
    app.post('/api/register', api.register);

	app.get('/api/unregisterUser', api.unregisterUser);

	app.get('/api/addSong', api.addSong);

	app.get('/api/removeSong', api.removeSong);

	app.get('/api/queueData', api.queueData);

	app.get('/api/doesQueueExist', api.doesQueueExist);

	app.post('/api/test', api.testPost);

	app.get('/api/test', api.testGet);

<<<<<<< HEAD
	app.get('/api/spotify/login', spotifyApi.login);

	app.get('/api/spotify/callback', spotifyApi.callback);

	app.get('/api/spotify/refreshToken', spotifyApi.refreshToken);

	app.get('/api/spotify/searchSong/:song', spotifyApi.searchSong);
=======
	app.get('/api/search', api.search);
>>>>>>> f61f8b300aeed29bd138979501b8738e236767f4
}
