import React, { Component } from 'react';
import '../App.sass'

export default class Contact extends Component {

  render() {
    return (
      <section class="hero is-success is-fullheight has-bg-img">
        <div className="hero-body">
          <div className="container has-text-centered ">
            <h1 className="title has-text-dark is-size-1">
              About Us
            </h1>
            <br></br>
            <h2 className="subtitle has-text-black is-size-3">
              <b>
              We are a hyderabad based startup and our motto is to make our city clean, currently we are working on collecting scrap from your home but we have more in mind.
              </b>
            </h2>
            <br>
            </br>
            <h3 className="subtitle has-text-black is-size-3 has-background-white ">
              Reach Us At:
              <br>
              </br>
              info@kabadiadda.com
                </h3>
          </div>
        </div>
      </section>
    );
  }
}
