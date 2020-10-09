const router = require('express').Router();
const { store, getTasks, getOneTask, deleteTask, updateTaskStatus } = require('../controllers/TasksController');



router.route('/').post(store).get(getTasks);
router.route('/:id').get(getOneTask).delete(deleteTask).put(updateTaskStatus);

//router.post('/update/:id', tasksController.updateTaskStatus);

module.exports = router;
