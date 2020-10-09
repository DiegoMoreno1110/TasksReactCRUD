import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import TaskInfo from './Components/TaskInfo';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
          <Route exact path="/">
            <Container/>
          </Route>
          <Route exact path="/:id">
            <TaskInfo/>
          </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
