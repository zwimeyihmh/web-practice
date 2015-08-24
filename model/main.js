
function MainController() {}

MainController.prototype.getInfo = function(topics) {
  var score = 0;
  for(var topic in topics) {
    for(var  i = 0;i < topics[topic].length; i++) {
      score += topics[topic][i].getScore();
    }
  }
  console.log(topics);
  return score;
};


module.exports = MainController;
