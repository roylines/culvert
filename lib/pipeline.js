var pipeline = {};

var async = require('async');

function start(source, done) {
  console.log('start' + JSON.stringify(source));
  return done();
};

pipeline.start = function(req, res, done) {
  start({ user: req.params.user, repository: req.params.repository } , function(e) {
    res.send(e ? 500 : 200);
    return done(e);
  });
};

module.exports = pipeline;
