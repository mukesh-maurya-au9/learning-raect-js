import React, { Component } from 'react';
import {connect} from 'react-redux';
import {TrendingVideoAct} from '../actions/Actions';
import TrendingDisplay from '../pages/trendingDisplay';

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
        videoList:state.Videos 
    })
}

export default connect(mapStateToProps)(Trending);