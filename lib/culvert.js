var agent = require('./agent'),
    async = require('async'),
    pipeline = require('./pipeline'),
    restify = require('restify'),
    state = require('./state.js');;

state.init(function() {
  console.log('state initialised');

  var server = restify.createServer();
  server.use(restify.queryParser());
  // server.post('/pipeline/start/:user/:repository', pipeline.start);
  server.post('/agent/check/:user/:repository', agent.check);

  server.listen(8080, function() {
    console.log('culvert listening at %s', server.name, server.url);
  });
});
