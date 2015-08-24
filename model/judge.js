var Topic = require('./topic.js');
function Judge(judgment,req){
  Topic.call(this,judgment.topic,judgment.answer,judgment.score,judgment.options,judgment.name,req);
}
Judge.prototype = Object.create(Topic.prototype);
Judge.prototype.constructor = Judge;
Judge.prototype.getScore = function() {
  var score = 0;
  if(this.input === this.answer) {
    score += 5;
  }
  return score;
};
module.exports = Judge;
