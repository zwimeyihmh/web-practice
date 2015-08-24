var Topic = require('./topic.js');
function Single(singleChose,req) {
  Topic.call(this,singleChose.topic,singleChose.answer,singleChose.score,singleChose.options,singleChose.name,req);

}

Single.prototype = Object.create(Topic.prototype);
Single.prototype.constructor = Single;

Single.prototype.getScore = function() {
  var score = 0;
  if(this.input === this.answer) {
    score += 5;
  }
  return score;
};

module.exports = Single;
