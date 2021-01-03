import React,{Fragment} from 'react';

const Comments =(props) => {
    const renderComment = ({cDetails}) => {
        if (cDetails){
            return cDetails.items.map((data)=> {
                console.log("outside_data", data)
                return(
                    <Fragment>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="col-md-1">
                                    {console.log("heyyyyyyyyyyy", data)}
                                    <img src={data.snippet.topLevelComment.snippet.authorProfileImageUrl}/>
                                </div>
                                <div className="col-md-18">
                                    <h4>{data.snippet.topLevelComment.snippet.authorDisplayName}</h4>
                                    <h5>{data.snippet.topLevelComment.snippet.textDisplay}</h5>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </Fragment>
                )
            })
        }
    }

    return (
        <div>
            {renderComment(props)}
        </div>
    )
};
export default Comments;