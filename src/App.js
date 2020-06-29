import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={SignUp} />
    <Route exact path="/login" component={Login} />
    </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
