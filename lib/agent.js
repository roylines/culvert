var agent = {}

agent.check = function(req, res, done) {
  var capabilities = req.query.capabilities.split(',');
  console.log(capabilities);
  res.send(200);
  return done();
};

module.exports = agent;
