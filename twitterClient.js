var request = require('request');

module.exports.createTwitterClient = function() {

	function search(query, callback) {
		var url = 'http://search.twitter.com/search.json?q=' + query + '&rpp=100&include_entities=true&with_twitter_user_id=true&result_type=mixed';
		request(url, function(error, response, body) {
			callback(JSON.parse(body).results);
		});
	}

	function getFriends(user, callback) {
		var url = 'http://api.twitter.com/1/friends/ids.json?screen_name' + user;
		request(url, function(error, response, body) {
			callback(JSON.parse(body));
		});
	}

	return {
		search: search,
		getFriends: getFriends
	};
};