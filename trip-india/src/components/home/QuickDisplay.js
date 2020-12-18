import React from 'react';
import './QuickSearch.css';
import { Link } from "react-router-dom";

const QuickDisplay = (props) => {
    const listTrip = ({tripData}) => {
        if (tripData) {
            return tripData.map((item) => {
                return (
                    <Link to={`/list/${item.trip}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image} />
                                {/* <h1>Hello>>>>>></h1> */}
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start Your {item.name} trip with us.
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }  
    }

    return (
        <div className="quickSearchContainer">
            <p className="quickSearchHeading">Quick Search</p>
            <p className="quickSearchSubHeading">Discover Trip By Type</p>
            {listTrip(props)}
        </div>
    )
};

export default QuickDisplay;