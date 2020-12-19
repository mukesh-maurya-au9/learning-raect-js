import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class PlaceBooking extends Component {
    constructor(){
        super()

        this.state = {
            hotel_id : Math.floor(Math.random()*1000),
            hotel_name: sessionStorage.getItem('hotelName'),
            Customer_Name : "",
            Phone_Number: ''
        }
    }
    render(){
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                    <h4>Booking for Hotel {this.state.hotel_name}</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label className="control-label">Order_Id:</label>
                            <input type="text" name="order_id" value={this.state.hotel_id} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Hotel_Name</label>
                            <input type="text" name="order_id" value={this.state.hotel_name} readOnly className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="order_id" value={this.state.Customer_Name} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="control-label">Phone</label>
                            <input type="text" name="order_id" value={this.state.phone} className="form-control"/>
                        </div>
                        <Link to={`/details/${sessionStorage.getItem('tripid')}`} className="btn btn-danger">Cancel</Link> &nbsp;
                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
               
            </div>
        )
    }
  };
  export default PlaceBooking;