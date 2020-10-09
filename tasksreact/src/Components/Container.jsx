import React, { Fragment } from 'react';
import Header from './Header';
import TaskList from './TaskList';

const Container = () => {
    return ( 
        <Fragment>
            <Header/>
            <TaskList/>
        </Fragment> 
    );
}
 
export default Container;
