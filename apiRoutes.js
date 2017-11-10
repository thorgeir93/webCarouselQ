import api from './src/data/api';
import spotifyApi from './src/data/spotifyApi';
import passport from 'passport'


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
	
	app.get('/api/spotify/login', spotifyApi.login);

	app.get('/api/spotify/refreshToken', spotifyApi.refreshToken);

	app.get('/api/spotify/searchSong/:song', spotifyApi.searchSong);

	app.get('/api/spotify/login', spotifyApi.login)
		
	app.get('/auth/spotify', passport.authenticate('spotify', {scope: ['user-read-email', 'user-read-private'] }),
		function(req, res){
			//this will never be called
		});
	
	app.get('/api/spotify/callback',passport.authenticate('spotify', { failureRedirect: '/login' }),spotifyApi.callback);

}
