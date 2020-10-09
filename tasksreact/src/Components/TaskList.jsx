import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Task from './Task';

const TaskList = () => {

    const [task, setTask] = useState([]);
    const [addTask, setAddTask] = useState({
        description: ''
    })

    const {description} = addTask;

    const handleChange = (e) => {
        setAddTask({
            ...addTask, 
            [e.target.name]:e.target.value
        });
    }

    const postTask =  (event) => {
        event.preventDefault();
    
        axios
          .post(`http://localhost:8000/tasks`, {
            description: description,
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);            
          })
          .catch((err) => {
            console.log(err);
          });
    };


    const fetchTask = async () => {
        const result = await axios('http://localhost:8000/tasks');
        console.log(result.data)
        setTask(result.data)
    }

    useEffect(() => {
        fetchTask()
    }, []);

    return ( 
        <Fragment>
            <div className="mt-5" style={{marginLeft: "100px", marginRight: "100px", paddingTop:"50px"}}>
                        <div className="row">
                            <div className="col-12 mb-2">
                                <h1>TODO List</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form className="form-inline" onSubmit={postTask}>
                                    <div className="input-group w-100">
                                        <input 
                                            type="text" 
                                            name="description" 
                                            placeholder="I have to..."
                                            className="form-control"
                                            onChange={handleChange}
                                        />
                                        <div className="input-group-append">
                                            <input
                                                type="submit"
                                                value="Add"
                                                className="btn btn-primary"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
            </div> 
            {task.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                />
            ))}
        </Fragment>
        
    );
}
 
export default TaskList;
