export default function (state={}, action){
    switch(action.type){
        case "TRENDING_VIDEOS":
            return ({...state, TReducer:action.payload})
        case "SEARCH_VIDEOS":
            return ({...state, SReducer:action.payload})
        case "VIDEO_BY_ID":
            return ({...state, SReducer:action.payload})
        case "COMMENT_BY_ID":
            return ({...state, CReducer:action.payload})
        default:
            return({state})
    }  
};
