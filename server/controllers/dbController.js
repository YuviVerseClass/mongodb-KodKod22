const Task = require('../models/Task');

async function getTasks(req, res) {
  // TODO
  try
  {
    const tasks = await Task.find();
    res.json(tasks);
  }catch(err){
    res.status(500).json({error:"cant get tasks"});
  }
  
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
  try{
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      res.status(404).json({error:"could not find task"});
    }
    const updateResponse = await Task.updateOne({_id: id},{$set:{done: !task.done}});
    res.json({message:"task update"});
  }catch(error){
    res.status(400).json({error:"cant update task"})
  }
 
  
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
