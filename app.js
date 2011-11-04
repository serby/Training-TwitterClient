var twitterClient = require('./twitterClient').createTwitterClient();

twitterClient.search('shit', function(statuses) {
	statuses.forEach(function(status) {
		console.log('From: ' + status.from_user);
		console.log('"' + status.text + '"');
	});
});