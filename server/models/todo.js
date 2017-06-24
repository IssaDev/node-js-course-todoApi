var mongoose = require('mongoose');

var Todo =mongoose.model('Todo', {
  text: {
    type: String,
    required:true,
    minlength:1,
    trim: true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default:null
  }
});

//Quick Insert
// var newTodo = new Todo({
//   text: '   Change oil    '
//
// });
//
// newTodo.save().then((doc) => {
//   console.log(`Saved Todo: ${doc}`);
// }, (e) => {
//   console.log('Unable to save todo', e)
// });

module.exports = {Todo};
