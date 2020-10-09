import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
          <Route path="/">
            <Container/>
          </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
