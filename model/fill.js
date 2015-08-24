var Topic = require('./topic.js');

function Fill(fillBlack, req) {
  Topic.call(this, fillBlack.topic, fillBlack.answer, fillBlack.score, fillBlack.options, fillBlack.name, req);
}
Fill.prototype = Object.create(Topic.prototype);
Fill.prototype.constructor = Fill;
Fill.prototype.getScore = function() {
  var score = 0;
  var same = [];
  if (typeof(this.input) === 'string') {
    if (this.input === this.answer[0]) {
      score += 5;
    }
  } else {
    for (var i = 0; i < this.input.length; i++) {
      var index1 = this.answer.indexOf(this.input[i]);

      if (index1 != -1) {
        if(same.indexOf(this.input[i]) === -1){
          same.push(this.input[i]);
          score += 5;
        }
      }
    }

  }
  return score;
};

module.exports = Fill;
