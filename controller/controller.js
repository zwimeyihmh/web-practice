var TopicFactory = require('../model/topic-factory.js');
var Main = require('../model/main.js');
function Controller(){

}
Controller.prototype.manageGet = function(req,res) {
  var topicFactory = new TopicFactory();
  var questions = topicFactory.judgeType(req);
  res.render('index',{
    scorea:'',
    topics:questions});
};
Controller.prototype.mangePost = function(req,res) {
  var topicFactory = new TopicFactory();
  var questions = topicFactory.judgeType(req);
  var main = new Main();
  var score = main.getInfo(questions);
  res.render('index',{
    scorea:score,
    topics:questions});
};
module.exports = Controller;
