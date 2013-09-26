var pipeline = {};

var async = require('async');

function commit(data, done) {
  console.log('commit...' + data.a);
  setTimeout(done, 5000);
};

function acceptance(data, done) {
  console.log('acceptance...');
  setTimeout(done, 5000);
};

function deploy(data, done) {
  console.log('deploy...');
  setTimeout(done, 5000);
};

pipeline.start = function(data) {
  async.series([
    commit.bind(this, data), 
    acceptance.bind(this, data), 
    deploy.bind(this, data)
  ]);
}

module.exports = pipeline;
