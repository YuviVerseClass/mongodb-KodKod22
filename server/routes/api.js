// Require express and create a router
const { Router } = require('express');
const apiRouter = new Router();

// Require your controller
// const db = ...
const dbController = require('../controllers/dbController');

// Wire each of the following routes to its controller method:
// GET    /tasks         => db.getTasks
apiRouter.get('/tasks',dbController.getTasks);
// POST   /tasks         => db.addTask
apiRouter.post('/tasks',dbController.addTask);
// PATCH  /tasks/:id     => db.toggleTask
apiRouter.patch('/tasks/:id',dbController.toggleTask)
// DELETE /tasks/:id     => db.deleteTask
apiRouter.delete('/tasks/:id',dbController.deleteTask);
// Export the router
module.exports = apiRouter;


