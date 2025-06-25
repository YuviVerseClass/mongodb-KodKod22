const Task = require('../models/Task');

async function getTasks(req, res) {
  // TODO
}

async function addTask(req, res) {
  // TODO
  try {
    const { title } = req.body;
    const newTask = new Task( {title} );
    await newTask.save();
    res.status(201).json(newTask);

  }catch(err){
    res.status(400).json({error: "could not add task"});
    
  }
}

async function toggleTask(req, res) {
  // TODO
}

async function deleteTask(req, res) {
  // TODO
}

module.exports = {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
};
