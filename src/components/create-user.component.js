import React, { Component } from 'react';
import axios from 'axios';
import '../App.sass'

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeContact = this.onChangeContact.bind(this);
    this.onChangeAddress= this.onChangeAddress.bind(this);
    this.onChangePincod = this.onChangePincod.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      contact: '',
      address: '',
      pincode: ''
    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    })
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    })
  }

  onChangePincod(e) {
    this.setState({
      pincode: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      name: this.state.name,
      contact: this.state.contact,
      address: this.state.address,
      pincode: this.state.pincode
    }

    console.log(user);

    axios.post('http://localhost:5000/user/add', user)
      .then(res => console.log(res.data));

    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <section class="hero is-success is-fullheight has-bg-img">
      <div className="hero-body">
        <div className="container has-text-centered ">
        <h2 className="title is-1 has-text-black">Sell it off !</h2>
        <form onSubmit={this.onSubmit}>
          <div className="field"> 
            <label className="subtitle has-text-dark is-size-4"><b>Name: </b></label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
          </div>

          <div className="form-group"> 
          <label className="subtitle has-text-dark is-size-4"><b>Contact:</b></label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.contact}
                onChange={this.onChangeContact}
                />
          </div>

          <div className="form-group"> 
          <label className="subtitle has-text-dark is-size-4"><b>Address:</b></label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
                />
          </div>

          <div className="form-group"> 
          <label className="subtitle has-text-dark is-size-4"><b>Pincode:</b></label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.pincode}
                onChange={this.onChangePincod}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Book Now!!" className="button is-black" />
          </div>

          
        </form>
      </div>
      </div>
      </section>
    )
  }
}