const express = require("express");
const router = express.Router();
const todo = require("../models/ToDoModel");

router.get("/tasks", async (req, res) =>
{
  const toDos = await todo.find();
  res.send(toDos);
});

router.post("/save", async (req, res) => {
    const data  = req.body;
    try
    { 
    const newUser = new todo(data);
    const save = await newUser.save(); 
    }
    catch(err)
    {
      res.send("Somthing Get Error"+ err);
    }
});

router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { toDo } = req.body;

  todo.findByIdAndUpdate(id, { toDo })
    .then(() => {
      res.send("Updated Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
});

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  todo.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted Successfully....");
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
});

module.exports= router;