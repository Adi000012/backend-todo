const mongoose = require('mongoose');
const connect = mongoose.connect(process.env.URL);

if(!connect)
{
  console.log("Database cannot be Connected");
}
else
{
  console.log("Database Connected Successfully");
}

const todoSchema = new mongoose.Schema({
    toDo : {
        type:String,
        required: true
    }
 
});

const todo = new mongoose.model("todo", todoSchema);
module.exports = todo;