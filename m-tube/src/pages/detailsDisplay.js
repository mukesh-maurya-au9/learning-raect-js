import React from 'react';

const VideosDisplay = (props) => {
    const renderVideo = ({ vDetails }) => {
        if (vDetails) {
            return (
                <div className="row">
                    <div className="col-md-8">
                        <iframe width="700" height="380" src={`https://www.youtube.com/embed/${vDetails.items[0].id}`} frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
                            <h4>{vDetails.items[0].snippet.title}</h4>
                            <h4>{vDetails.items[0].snippet.cnannelTitle}</h4>
                            <h4>{vDetails.items[0].snippet.publishedAt}</h4>
                            <span className="badge">5</span>
                    </div>
                    <div className="col-md-3">
                        <h3>Related Video</h3>
                        {/* <iframe width="700" height="380" src={`https://www.youtube.com/embed/${vDetails.items[0].id.videoId}`} frameBorder="0"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe> */}
                        <div></div>
                    </div>
                </div>
            )
        }
    }


    return (
        <div>
            <h2>Videos by ID</h2>
            {renderVideo(props)}
        </div>
    )
};
export default VideosDisplay;