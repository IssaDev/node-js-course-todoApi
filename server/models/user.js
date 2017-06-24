var mongoose = require('mongoose');

var Users = mongoose.model('Users',{
  email:{
    type: String,
    required: true,
    trim: true,
    minlength:1
  }
});

// var newUser = new Users({
//   email: '   jidaw@kgold.com'
// });
//
// newUser.save().then((doc) => {
//   console.log(`New user added ${doc}`);
// }, (e) => {
//   console.log('Unamble to save newuser', e)
// });

module.exports = {Users};
