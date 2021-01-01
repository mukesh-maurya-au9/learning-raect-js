import React, { Component } from 'react';
import {connect} from 'react-redux';
import {TrendingVideoAct} from '../actions/Actions';
import TrendingDisplay from '../components/trendingDisplay';

class Trending extends Component {
    componentDidMount(){
        this.props.dispatch(TrendingVideoAct())
    }
    render() { 
        return ( 
            <div>
                <TrendingDisplay tvideos = {this.props.videoList.TReducer}/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return({
        videoList:state.trendingReducer 
    })
}

export default connect(mapStateToProps)(Trending);