import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import HatsPage from './pages/hats/HatsPage';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
