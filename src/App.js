import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { BrowserRouter as Router, Route} from "react-router-dom";
=======
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
>>>>>>> e50b453b4f184dba1053aabc28005381a88f4b8e
import './App.sass';

import Home from "./components/homepage.component"
import Navbar from "./components/navbar.component"
import Contact from "./components/contact.component";
import CreateUser from "./components/create-user.component";
import OrderList from "./components/orderlist.component"

function App() {
  return (
    <Router>
    <switch>
      <div className="container">
      <Navbar />
      <Route path="/homepage" component={Home} />
      <Route path="/create" component={Contact} />
      <Route path="/user" component={CreateUser} />
      <Route path="/orders" component={OrderList} />
<<<<<<< HEAD
=======
      <Redirect to='/homepage' component={Home}></Redirect>
>>>>>>> e50b453b4f184dba1053aabc28005381a88f4b8e
      </div>
      </switch>
    </Router>
  );
}

export default App;
