import querystring from 'querystring';
import request from 'request-promise';

module.exports = {
	/**
	 * Search for music entities of certain types.
	 * @param {string} query The search query.
	 * @param {string[]} types An array of item types to search across.
	 * Valid types are: 'album', 'artist', 'playlist', and 'track'.
	 * @param {Object} [options] The possible options, e.g. limit, offset.
	 * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
	 * @example search('Abba', ['track', 'playlist'], { limit : 5, offset : 1 }).then(...)
	 * @returns {Promise|undefined} A promise that if successful, returns an object containing the
	 *					search results. The result is paginated. If the promise is rejected,
	 *					it contains an error object. Not returned if a callback is given.
	 */
	search: function(query, types, options, callback, access_token) {
		var req = {
			url: 'https://api.spotify.com/v1/search?' + 
			querystring.stringify({
				type: types.join(','),
				q: query
			}),
			headers: { 'Authorization': 'Bearer ' + access_token },
			json: true
		};

		for (var key in options) {
			if (key !== 'credentials') {
				req.key = options[key];
			}
		}
		console.log("making request --- "+ req.url, req.headers)
		return request.get(req);
	},

	play: function(options, access_token){
		var req = {
			url: 'https://api.spotify.com/v1/me/player/play',
			body: options,
			headers: {'Authorization': 'Bearer ' + access_token,
					  'Content-Type': 'application/json'},

		}

		return req;
	}
}