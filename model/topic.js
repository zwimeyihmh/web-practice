function Topic(title,answer,score,options,name,req) {
  this.answer = answer;
  this.options = options;
  this.title = title;
  this.name = name;
  this.index = '';
  this.input = req.body[name]||[];
}
module.exports = Topic;
