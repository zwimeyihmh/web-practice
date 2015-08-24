var Topic = require('./topic.js');

function Short(short,req) {
  Topic.call(this,short.topic,short.answer,short.score,short.options,short.name,req);
}

Short.prototype = Object.create(Topic.prototype);
Short.prototype.constructor = Short;

Short.prototype.getScore = function() {
  var score = 0;
  if(this.input === this.answer) {
    score += 20;
  }
  return score;
};
module.exports = Short;
