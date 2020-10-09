const router = require('express').Router();
const tasksController = require('../controllers/TasksController');

const { store, getTasks } = require('../controllers/TasksController');

//router.get('/', homepageController.index);

router.route('/').post(store).get(getTasks);

router.post('/tasks/update/:id', tasksController.updateTaskStatus);

router.post('/tasks/delete/:id', tasksController.delete);

module.exports = router;
