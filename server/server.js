var express = require('express');
var bodyParser = require('body-parser');

var{mongoose} = require('./db/mongoose.js');
var {Todo} =  require('./models/todo.js');
var {Users} = require('./models/user.js');

var app = express();


app.use(bodyParser.json());
app.post('/todos', (req,res)=>{
var todo = new Todo({
  text: req.body.text
});
todo.save().then((doc) => {
  res.send(doc)
   console.log(`Saved Todo: ${doc}`);
}, (e) => {
  res.status(400).send(e);
  console.log('Unable to save todo', e);
});
});
app.listen(3000, () => {
  console.log('Started on port 3000');
})