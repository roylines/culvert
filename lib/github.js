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
