var request = require('request');

module.exports.createTwitterClient = function() {

	function search(query, limit, callback) {
		var url = 'http://search.twitter.com/search.json?q=' + query + '&rpp=' + limit + '&include_entities=true&with_twitter_user_id=true&result_type=mixed';
		request(url, function(error, response, body) {
			var res = JSON.parse(body);
			if (res.error) {
				throw new Error(res.error);
			}
			callback(res.results);
		});
	}

	function getFriends(user, callback) {
		var url = 'http://api.twitter.com/1/friends/ids.json?screen_name=' + user;
		request(url, function(error, response, body) {
			var res = JSON.parse(body);
			if (res.error) {
				throw new Error(res.error);
			}
			callback(res.ids);
		});
	}

	return {
		search: search,
		getFriends: getFriends
	};
};