import React from 'react';
import './pageCSS/trendingDisplay.css';


const TrendingDisplay = (props) => {
    console.log("in display>>>>", props)
    const renderVideos = ({ tvideos }) => {
        if (tvideos) {
            return tvideos.items.map((data) => {
                return (
                    <div className="tileContainer">
                        <div className="tileComponent1">
                            <iframe width="300" height="150" src={`https://www.youtube.com/embed/${data.id.videoId}`} frameBorder="0" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullScreen"></iframe>
                        </div>
                        <div className="tileComponent2"><br />
                            {data.snippet.title}
                            <p>{data.snippet.channelTitle}</p>
                        </div>
                    </div>
                )
            })
        }
    }
    return (
        <div>
            <div className="trendingHeading">
                <p> Trending Videos </p>
            </div>
            <div className="mainArea">
                {renderVideos(props)}
            </div>
        </div>
    )
}

export default TrendingDisplay;