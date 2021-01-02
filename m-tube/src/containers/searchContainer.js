import React, { Component, Fragment} from 'react';
import { IoIosSearch } from "react-icons/io";
import '../pages/pageCSS/style.css';
import {connect} from 'react-redux';
import {SearchVideo} from '../actions/Actions';
import HomeDisplay from '../pages/homeDisplay';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            inputText : ""
        }
    }
    componentDidMount(){
        this.props.dispatch(SearchVideo())
    }
    handleChange =(e)=>{
        this.setState({inputText:e.target.value})
    }
    handleSubmit =() => {
        console.log(this.state.inputText)
        this.props.dispatch(SearchVideo(this.state.inputText))
    }
    render() { 
        return (
            <Fragment>
                <div className="searchDiv">
                    <input className="serchBox" type="text" placeholder="Search.." name="search" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}><IoIosSearch/>Search</button>
                </div>
                <div>
                    <HomeDisplay sVideo = {this.props.SearchVideo.SReducer}/>
                </div>
            </Fragment>
        )
    }
};

function mapStateToProps(state){
    return {
        SearchVideo:state.Videos
    }
}

export default connect(mapStateToProps)(Home);