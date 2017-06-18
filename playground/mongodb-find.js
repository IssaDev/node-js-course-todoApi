//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var obj = new ObjectID();
// console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
  return   console.log(`Unable to connect to Mongodb server`)
  }
  console.log('Connected to Mongodb server');
  // db.collection('Todos').find
  // ({_id: new ObjectID('593ca69ddc1de4161079ea73')
  // }).toArray().then((docs)=>{
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch Todos', err)
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos Count: ${count}`);
  // //  console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch Todos', err)
  // });
  db.collection('Users').find({name:'Pascal'}).toArray().then((docs) =>{
    console.log(`Here's the document(s) you requested `);
    console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    console.log("Unable to fetch Document from Todos");
  });
  //db.close();
});
