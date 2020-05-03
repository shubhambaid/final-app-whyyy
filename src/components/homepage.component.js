import React, { Component } from 'react';
import '../App.sass'
import { withRouter } from "react-router-dom";
import {NavLink} from 'react-router-dom'

class Home extends Component{
  render() {
    return (
      <section class="hero is-link">
        <div className="hero-body has-bg-img-1">
          <div className="container has-text-centered ">
            <h1 className="title has-text-dark is-size-1">
            Sell kabad at your fingertips
            </h1>
            <br></br>
            <h2 className="subtitle has-text-black is-size-3">
              <b>
              Why wait until your wife yells at you ?
                <br>
                </br>
                <br></br>
                We got you covered, just enter your details and chill
              </b>
            </h2>
            <NavLink className="button is-success is-rounded" to="/user">
                Sell Now !
            </NavLink>
            <br>
            </br>
            <br></br>
            <h2 className="subtitle has-text-black is-size-3">
              <b>
              Or just whatsapp us at
                <br>
                </br>
                6301737204
              </b>
            </h2>
          </div>
        </div>

        <div className="hero-body has-bg-img-2">
          <div className="container has-text-centered ">
            <h1 className="title has-text-success has-background-white is-size-1">
            Sell old piled up newspapers
            </h1>
            <br></br>
            <h2 className="subtitle has-text-success has-background-white is-size-3">
              <b>
              No more headache for right prices
                <br>
                </br>
                <br></br>
                sell today at 12₹ per Kilo
              </b>
            </h2>
            <NavLink className="button is-success is-rounded" to="/user">
                Sell Now !
            </NavLink>
            <br>
            </br>
          </div>
        </div>
      </section>  
    );
  }
}
export default withRouter(Home);
