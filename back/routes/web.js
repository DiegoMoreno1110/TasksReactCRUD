const router = require('express').Router();
const { store, getTasks, getOneTask, updateTaskStatus, deleteTask } = require('../controllers/TasksController');


router.route('/').post(store).get(getTasks);
router.route('/:id').get(getOneTask);
router.route('/update/:id').post(updateTaskStatus);
router.route('/delete/:id').post(deleteTask);


module.exports = router;
