//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
  return   console.log(`Unable to connect to Mongodb server`)
  }
    console.log('Connected to Mongodb server');
  //Delete many
// db.collection('Todos').deleteMany({'text': 'Dinner with the team'}).then((result) => {
//   console.log(result.result);
// });
  //Delete One
// db.collection('Todos').deleteOne({text: 'Dinner with the team'}).then((smu) => {
//   console.log(smu)
// })
  //findOne and Delete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Pascal'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteOne({_id:new ObjectID('594603e6c215e7d2021c40a5')}).then((result)=>{
    console.log(result);
  });
  //db.close();
});
