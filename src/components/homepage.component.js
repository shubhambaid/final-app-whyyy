import React, { Component } from 'react';
import '../App.sass'
import {NavLink} from 'react-router-dom'

export default class Home extends Component {

  render() {
    return (
      <section class="hero is-link">
        <div className="hero-body has-bg-img-1">
          <div className="container has-text-centered ">
            <h1 className="title has-text-dark is-size-1">
              abcd
            </h1>
            <br></br>
            <h2 className="subtitle has-text-black is-size-3">
              <b>
                xyzz
                <br>
                </br>
                <br></br>
                abcd
              </b>
            </h2>
            <NavLink className="button is-success is-rounded" to="/user">
                go here
            </NavLink>
            <br>
            </br>
            <br></br>
            <h2 className="subtitle has-text-black is-size-3">
              <b>
                haha
                <br>
                </br>
                :)
              </b>
            </h2>
          </div>
        </div>

        <div className="hero-body has-bg-img-2">
          <div className="container has-text-centered ">
            <h1 className="title has-text-success has-background-white is-size-1">
              111
            </h1>
            <br></br>
            <h2 className="subtitle has-text-success has-background-white is-size-3">
              <b>
                shubham
                <br>
                </br>
                <br></br>
               aaaa
              </b>
            </h2>
            <NavLink className="button is-success is-rounded" to="/user">
                go here
            </NavLink>
            <br>
            </br>
          </div>
        </div>
      </section>

      
      
    );
  }
}
