// Require mongoose
const mongoose = require('mongoose');
const { addTask } = require('../controllers/dbController');

// Implement schema for a task
// Each task should have:
// - title (String, required)
// - done (Boolean, defaults to false)
const newSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        default: false
    }
});
// Export the model as 'Task'
module.exports = mongoose.model('Task',newSchema);