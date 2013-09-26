var async = require('async'),
    pipeline = require('./pipeline'),
    restify = require('restify');

function notify(req, res, done) {
  console.log(req.body);
  pipeline.start({ a: "b" });
  res.send();
  return done();
}

var server = restify.createServer();
server.post('/notify', notify);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

/*
var _ = require("underscore"),
    GitHubApi = require("github");

var github = new GitHubApi({
  version: "3.0.0",
  timeout: 5000
});
github.repos.getCommits({
  user: "roylines",
  repo: "boatyard"  
}, function(err, res) {
  var urls = _.map(res, function(c) {
    return { 
      url: c.commit.url,
      date: new Date(c.commit.committer.date)
    };
  });
  console.log(urls);
});
*/
