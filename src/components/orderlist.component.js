import React from 'react';
import axios from 'axios';
import '../App.sass'

export default class OrderList extends React.Component{
    state = {
        orders: [],
        contact:'',
    }

    handleChange = event =>{
        this.setState({contact: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete('http://localhost:5000/user/${this.state.contact}')
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

        .catch(error => {
            console.log(error)
        }
        )
    }

    componentDidMount(){
        axios.get('http://localhost:5000/user/')
        .then(res => {
            const orders = res.data;
            this.setState({ orders });
        })
    }

    render(){
        return(

            <div className="Container"> 
            <br/>
                <form onSubmit={this.handleSubmit}>
                    <label className="title">
                        Enter contact:
                        <input type="text" name="contact" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <button className="button is-success" type="submit">Done</button>
                </form>
                <br/>
            <div className="hero is-success is-rounded">
                {this.state.orders.map(orders =><div className="level">
                    <div className="level-item has-text-centered">
                        {orders.contact}
                         <br/> 
                         {orders.name}
                          <br/> 
                          {orders.address} {orders.pincode}
                        <br/><br/>
                    </div>
                    </div>
                    )
                    }
            </div>
            </div>
        )
    }
}