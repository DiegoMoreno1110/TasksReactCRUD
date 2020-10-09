import React from 'react';

const Task = ({task}) => {
    return ( 
        <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='card my-3'>
                            <div className="card-body">
                                <p className="card-text">
                                    {task.description}
                                </p>
                                <div className="container">
                                    <div className="row">
                                            <div className="col">
                                                <form>
                                                    <input 
                                                        type="submit" 
                                                        value="Done"
                                                        className="btn btn-success"
                                                    />
                                                </form>
                                            </div> 
                                        
                                        <div className="col">
                                            <form>
                                                <input 

                                                    type="submit" 
                                                    value="Delete"
                                                    className="btn btn-danger"
                                                />
                                            </form>
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