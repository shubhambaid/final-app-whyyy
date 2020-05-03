import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.sass'


export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/homepage" className="navbar-brand is-size-2 has-text-success has-text-weight-bold">Kabadi Adda</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/homepage" className="nav-link has-text-weight-bold">Home</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link has-text-weight-bold">Sell kabad now!</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link has-text-weight-bold">About Us</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}