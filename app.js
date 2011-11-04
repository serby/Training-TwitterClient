var twitterClient = require('./twitterClient').createTwitterClient();

twitterClient.search('shit', 1, function(statuses) {

	statuses.forEach(function(status) {

		twitterClient.getFriends(status.from_user, function(friends) {
			if (friends) {
				console.log('From: ' + status.from_user + ' (' + friends.length + ')');
				console.log('"' + status.text + '"');
			}
		});
	});
});