import helper from './databaseHelper';
import request from 'request-promise';
import querystring from 'querystring';
import spotifyWebApi from 'spotify-web-api-node';

import dotenv from 'dotenv'
dotenv.config();

var client_id = process.env.client_id;
var client_secret = process.env.client_secret;
var redirect_uri = process.env.redirect_uri;
var stateKey = 'spotify_auth_state';

var options;
var refresh_token;

var spotifyApi = new spotifyWebApi({
  clientId : client_id,
  clientSecret : client_secret,
  redirectUri : redirect_uri
});


module.exports = {

	login: function(req, res, next){
		res.redirect('/auth/spotify');
	},

	
	callback: function(req, res){

		var access_token = req.user.accessToken;
		var user_name = req.user.id;
		refresh_token = req.user.refreshToken;
		console.log(req.user)
		if(!access_token || !user_name){
			res.redirect("/login");
		}else{
			spotifyApi.setCredentials({
				'accessToken': access_token,
				'refreshToken': refresh_token
			})
			req.session.access_token = access_token;
			req.session.user_name = user_name;
			req.session.loggedIn = true;
			console.log(access_token, user_name)
			res.redirect("/player");
		}
	},

	refreshToken: function(req, res){
		// requesting access token from refresh token
		if(!refresh_token){
			return res.state(500).send("no refresh token");
		}

		var authOptions = {
			url: 'https://accounts.spotify.com/api/token',
			headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
			form: {
				grant_type: 'refresh_token',
				refresh_token: refresh_token
			},
			json: true
		};
	
		request.post(authOptions).then((data) =>{
			var access_token = data.access_token;
			res.send({
				'access_token': access_token
			});
		}).catch((error) => {
			console.log(error);
		})
	},

	 

	/**
	 * Search for an album.
	 * @param {string} query The search query.
	 * @param {Object} [options] The possible options, e.g. limit, offset.
	 * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
	 * @example searchAlbums('Space Oddity', { limit : 5, offset : 1 }).then(...)
	 * @returns {Promise|undefined} A promise that if successful, returns an object containing the
	 *					search results. The result is paginated. If the promise is rejected,
	 *					it contains an error object. Not returned if a callback is given.
	 */
	searchAlbums: function(query, options) {

	},

	/**
	 * Search for an artist.
	 * @param {string} query The search query.
	 * @param {Object} [options] The possible options, e.g. limit, offset.
	 * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
	 * @example searchArtists('David Bowie', { limit : 5, offset : 1 }).then(...)
	 * @returns {Promise|undefined} A promise that if successful, returns an object containing the
	 *					search results. The result is paginated. If the promise is rejected,
	 *					it contains an error object. Not returned if a callback is given.
	 */
	searchArtists: function(query, options) {
	},

	/**
	 * Search for a track.
	 * @param {string} query The search query.
	 * @param {Object} [options] The possible options, e.g. limit, offset.
	 * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
	 * @example searchTracks('Mr. Brightside', { limit : 3, offset : 2 }).then(...)
	 * @returns {Promise|undefined} A promise that if successful, returns an object containing the
	 *					search results. The result is paginated. If the promise is rejected,
	 *					it contains an error object. Not returned if a callback is given.
	 */
	searchTracks: function(query, options) {
		console.log('inni i search tracks')
		
	},

	searchSong: function(req, res){

	},

	/**
   * Starts o Resumes the Current User's Playback
   * @param {Object} [options] Options, being context_uri, offset, uris.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example playbackResume({context_uri: 'spotify:album:5ht7ItJgpBH7W6vJ5BqpPr'}).then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves into a paging object of tracks,
   *          otherwise an error. Not returned if a callback is given.
   */
  play: function(res, req) {

  	/*spotifyApi.searchTracks('Love', { limit : 5})
		  .then(function(data) {
		    console.log('Search by "Love"', data.body.tracks.items[0].uri);
		    var audio = new Audio();
		    audio.src = song.tracks.items[0].href;
		    audio.play();
		    spotifyApi.play({context_uri: song.tracks.items[0].uri}).then(() => {
		    	console.log("something is playing?")
		    },(error) => {
		    	console.log('something failed',error)
		    })
		  }, function(err) {
		    console.error(err);
		  });*/
  	spotifyApi.getMyDevices()
  		.then((data) => {
  			console.log(data.body.devices)
  			if(data.body && data.body.devices){
  				var activeDevice = data.body.devices.filter((item) => {return item.is_active});
  				if(activeDevice){
  					return spotifyApi.transferMyPlayback({'deviceIds' : [activeDevice[0].id], 'play': true});
  				}else{
  					res.redirect("/login");
  				}
  			}
  		}, (error) => {
  			console.log(error)
  		})
  		.then((data) => {
  			console.log("komst inn hér")
  			return spotifyApi.play({"uris":["spotify:track:4iV5W9uYEdYUVa79Axb7Rh"]})
  		}, (error) =>{
  			console.log(error);
  		})
  		.then((data) => {
  			console.log('vá en flott request', data);
  			res.redirect("/player");
  		}, (error) =>  {
  			console.log(error);
  		})
  	
  }
}