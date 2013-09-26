var redis = require('redis');

var state = {};

state.START = 'started';

state.init = function(done) {
  state.client = redis.createClient();
  state.client.on('ready', done);
};

module.exports = state;
