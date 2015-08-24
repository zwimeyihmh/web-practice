var allTopic = require('../all-topic.json');
var Fill = require('./fill.js');
var Single = require('./single.js');
var Multiple = require('./multiple.js');
var Judge = require('./judge.js');
var Short = require('./short.js');
function TopicFactory() {

}

TopicFactory.prototype.judgeType = function(req) {
  var topics = allTopic.allTopic;
  var fillB = [];
  var singleC = [];
  var multipleC = [];
  var judgeB = [];
  var shortS = [];
  for (var topic in topics) {

    if (topics[topic].type === "fill") {
      for (var i = 0; i < topics[topic].question.length; i++) {
        var fill = new Fill(topics[topic].question[i],req);
        fillB.push(fill);
      }
    }
    if (topics[topic].type === "single") {
      for (var x = 0; x < topics[topic].question.length; x++) {
        var single = new Single(topics[topic].question[x],req);
        singleC.push(single);
      }
    }
    if (topics[topic].type === "multiple") {
      for (var y = 0; y < topics[topic].question.length; y++) {
        var multiple = new Multiple(topics[topic].question[y],req);
        multipleC.push(multiple);
      }
    }
    if (topics[topic].type === "judge") {
      for (var z = 0; z < topics[topic].question.length; z++) {
        var judge = new Judge(topics[topic].question[z],req);
        judgeB.push(judge);
      }
    }
    if(topics[topic].type === 'short') {
      for(var a = 0; a < topics[topic].question.length;a++) {
        var short = new Short(topics[topic].question[a],req);
        shortS.push(short);
      }
    }
  }
  return {fillBlack:fillB,choiceS:singleC,choiceM:multipleC,judgeA:judgeB,shortA:shortS};

};
module.exports = TopicFactory;
