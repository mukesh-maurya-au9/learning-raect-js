import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay';

const url = 'https://developerfunnel.herokuapp.com/hotellist';

class ListingAPI extends Component {
    constructor(){
        super()
        this.state={
            hotelData:''
        }
    }

    render(){
        return(
            <div className="row"> 
                <div className="col-md-2">
                    <h2> Filters </h2>
                    <div>
                        <option> Above 5000 </option>
                        <input type='radio' name="Cost"/> 
                    </div>
                    <div>
                        <option> Cost 3000 to 5000</option>
                        <input type='radio' name="Cost"/> 
                    </div>
                    <div>
                        <option>Cost 1000 to 3000 </option>
                        <input type='radio' name="Cost"/> 
                    </div> 
                </div>
                <div className="col-md-2">
                    <ListingDisplay hotelList = {this.state.hotelData}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var tripId = this.props.match.params.id;
        axios.get(`${url}/${tripId}`)
        .then((response) => this.setState({hotelData:response.data}))
    }
};
export default ListingAPI;