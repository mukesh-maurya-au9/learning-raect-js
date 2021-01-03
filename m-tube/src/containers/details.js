import React, { Component } from 'react';
import {connect} from 'react-redux';
import {VideoById, CommentById} from '../actions/Actions';
import VideoDisplay from '../pages/detailsDisplay';
import Comments from '../pages/commentDisplay';

class VideoDetails extends Component {
    componentDidMount() {
        this.props.dispatch(VideoById(this.props.match.params.id))
        this.props.dispatch(CommentById(this.props.match.params.id))
    }

    render() { 
        return ( 
            <div>
                <VideoDisplay vDetails={this.props.Video.SReducer}/>
                <Comments cDetails = {this.props.Video.CReducer}/>
            </div>
         );
    }
};
function mapStateToProps(state){
    return ({
        Video:state.Videos
    })
}
 
export default connect(mapStateToProps)(VideoDetails);