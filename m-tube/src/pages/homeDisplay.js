import React, { Component } from 'react';
import './pageCSS/home.css';
import {Link} from 'react-router-dom';

const HomeDisplay = (props) => {
    const renderVideos =({sVideo}) => {
        if(sVideo){
            return sVideo.items.map((data) => {
                return(
                    <div className="row">
                        <div className="col-md-4">
                            <iframe width="400" height="240" src={`https://www.youtube.com/embed/${data.id.videoId}`} frameBorder="0" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
                        </div><br/>
                        <div className="col-md-7">
                            <h4><Link to={`/watch/${data.id.videoId}`}>{data.snippet.title}</Link></h4>
                            <p>{data.snippet.description}</p>
                            <p>{data.snippet.channelTitle}</p>
                            <p>{data.snippet.publishTime}</p>

                        </div>
                    </div>
                )
            })
        }
    }

    return(
        <React.Fragment>
            {renderVideos(props)}
        </React.Fragment>
    )
}

export default HomeDisplay;