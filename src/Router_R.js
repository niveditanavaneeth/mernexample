import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';

class Router_R extends React.Component {
    render() { // main function 

        return (
            <Router>
                <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/success" exact component={() => {
                return (
                    <div className="App">
                    <h1>Login Success</h1>

                    </div>
                )
                }} />
            </Switch>
            </Router>
    
        );
      }
}

export default Router_R;