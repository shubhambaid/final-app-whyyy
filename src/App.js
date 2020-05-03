import React from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.sass';

import Home from "./components/homepage.component"
import Navbar from "./components/navbar.component"
import Contact from "./components/contact.component";
import CreateUser from "./components/create-user.component";


function App() {
  return (
    <Router>
    <Switch>
      <div className="container">
      <Navbar />
      <Route path="/homepage" component={Home} />
      <Route path="/create" component={Contact} />
      <Route path="/user" component={CreateUser} />
      <Redirect from= '/' to='/homepage' />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
