const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/node_crud');
mongoose.connection.once('open',function(){
  console.log('DB connected');
}).on('error',function(error){
  console.log('error is:',error)
})