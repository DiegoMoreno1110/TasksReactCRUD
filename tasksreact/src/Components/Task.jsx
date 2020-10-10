import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Task = ({task}) => {

    const [statusDone, setStatusDone] = useState(false);

    const deleteTask = (e) => {
        e.preventDefault();

        axios.delete(`http://localhost:8000/tasks/${task.id}`)
        .then((res) => {
            console.log("Task deleted: ", task);            
        })
        .catch((err) => {
            console.log(err);                
 
        });

    }

    const updateStatusTask = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/tasks/${task.id}`)
        .then((res) => {
            console.log("Task updated status: ", task);  
        })
        .catch((err) => {
            console.log(err);                
 
        });

    }

    useEffect(() => {
    },[]);

    //'card my-3'

    return ( 
        <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={task.status === 'done' ? "card my-3 bg-light" : "card my-3" } >
                            <div className="card-body">
                                <p className="card-text">
                                    {task.description}
                                </p>
                                <div className="container">
                                    <div className="row">
                                            <div className="col">

                                                { task.status === 'done' ? null
                                                    :
                                                    
                                                    <form onSubmit={updateStatusTask}>
                                                        <input 
                                                            type="submit" 
                                                            value="Done"
                                                            className="btn btn-success"
                                                        />
                                                    </form>
                                                }
                                                

                                            </div> 
                                        
                                        <div className="col" onSubmit={deleteTask}>
                                            <form >
                                                <input 

                                                    type="submit" 
                                                    value="Delete"
                                                    className="btn btn-danger"
                                                />
                                            </form>
                                        </div>
                                        <div className="col">
                                                <Link to={`/${task.id}`}>
                                                    <input 
                                                        type="submit" 
                                                        value="Show Task"
                                                        className="btn btn-secondary"
                                                    />
                                                </Link>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>   
        </div>
     );
}
 
export default Task;