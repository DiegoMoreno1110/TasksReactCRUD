import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";  
import axios from 'axios';


const TaskInfo = () => {

    let { id } = useParams(); 

    const [task, setTask] = useState({
        description: ''
    })

    const fetchTask = async () => {
        const result = await axios(`http://localhost:8000/tasks/${id}`);
        console.log(result.data)
        setTask(result.data)
    }

    useEffect(() => {
        fetchTask();
    }, [])

    return ( 
        <div>
            <p>Descripcion: {task.description}</p>
            <p>Status: {task.status}</p>
        </div>
    );
}
 
export default TaskInfo;
