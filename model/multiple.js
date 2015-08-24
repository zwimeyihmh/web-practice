var Topic = require('./topic.js');

function Multiple(multiple,req) {
  Topic.call(this,multiple.topic,multiple.answer,multiple.score,multiple.options,multiple.name,req);
}

Multiple.prototype = Object.create(Topic.prototype);
Multiple.prototype.constructor = Multiple;

Multiple.prototype.getScore = function() {
  var score = 0;
  var count = 0;
  for(var i = 0; i < this.input.length;i++) {
    if(this.answer.indexOf(this.input[i]) !== -1){
      count++;
    }
  }
  if(count === this.answer.length) {
    score += 10;
  }
  return score;
};
module.exports = Multiple;
