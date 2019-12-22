import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Picture from './Picture';
import Home from './Home';


// import Main from './Main';

function App () {
  return (<div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/picture" component={Picture} />

        </Switch>
      </BrowserRouter>
      
    </div>)
}

export default App;
