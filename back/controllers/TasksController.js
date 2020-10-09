const Task = require('../models/Task');

exports.store = async (req, res) => {
  let task = {};
  task.description = req.body.description;
  await Task.create(task).then((id) => {
    console.log('Task created with id: ', id);
    console.log('Task: ', task.description)
    res.json('Tarea creada');
  });

}

exports.getTasks = async (req, res) => {
  await Task.all().then((data) => {
    let tasks = data;
    res.json(tasks);
  });
}

exports.updateTaskStatus = (req, res) => {
  let id = req.params.id;

  Task.updateTaskStatus(id).then((id) => {
    console.log('Se cambió el status a done');
      res.json({ id: id });
   
  });

}

exports.deleteTask = (req, res) =>{

  let id = req.params.id;

  Task.find(id).then((task) => {

    if(!task){
      return;
    }

    Task.delete(task.id).then((id) => {
        res.redirect("/");
    });

  });

}


exports.getOneTask = (req, res) => {

    let id = req.params.id;

    Task.find(id).then((task) => {

        if(!task){
            res.status(404).send('No se encontró');
            return;
        }

        res.json(task)

    });

}

