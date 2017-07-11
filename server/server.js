var express = require('express');
var bodyParser = require('body-parser');

var{mongoose} = require('./db/mongoose.js');
var {Todo} =  require('./models/todo.js');
var {Users} = require('./models/user.js');
const {ObjectID} = require('mongodb');

var app = express();


app.use(bodyParser.json());

//Route to Insert Todo
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

//Route to retrieve todo
app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  },(e) => {
    res.status(400).send(e)
  });
});

app.get('/todos/:id',(req,res) => {
  var id = req.params.id
  if(!ObjectID.isValid(id)){
    console.log('the id entered is not valid')
    res.status(404).send("the id entered is not valid")
  }
  Todo.findById(id).then((todo) =>{
    if(!todo){
      return res.status(404).send("Id not found");
    }
    res.send(todo)
  }).catch((e) => {
    res.status(400).send()
  })
});

//Route to Insert Users
app.post('/users', (req,res) => {
  var user = new Users({
    email: req.body.email
  });

  user.save().then((doc) => {
    res.send(doc)
  },(e) => {
    res.status(400).send(e);
  });
});

//Route to retrieve Users
app.get('/users', (req, res)=>{
  Users.find().then((doc) => {
    res.send({doc})
  }, (e) => {
    res.send(e);
  })
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});
