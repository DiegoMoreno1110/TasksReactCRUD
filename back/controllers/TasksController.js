const Task = require('../models/Task');

exports.store =  (req, res) => {
  let task = {};
  task.description = req.body.description;

  Task.create(task).then((id) => {
    console.log('Task created with id: ', id);
    console.log('Task: ', task.description)
    res.json('Tarea creada');
  });

}

exports.getTasks =  (req, res) => {
  Task.all().then((data) => {
    let tasks = data;
    res.json(tasks);
  });
}

exports.getOneTask = (req, res) => {

  let id = req.params.id;

  Task.find(id).then((task) => {

      if(!task){
          res.status(404).send('No se encontró');
          return;
      }

      res.json(task);

  });

}


exports.updateTaskStatus = (req, res) => {
  let id = req.params.id;

  Task.updateTaskStatus(id).then((id) => {
    console.log('Se cambió el status a done');
    res.json('Status done');
  });

}


exports.deleteTask = (req, res) => {

    let id = req.params.id;
    
    Task.find(id).then((task) => {

        if(!task){
            return;
        }

        Task.delete(task.id).then((id) => {
            res.json('Task deleted');
        });

    });

}



