export default function (state={}, action){
    switch(action.type){
        case "TRENDING_VIDEOS":
            return ({...state, TReducer:action.payload})
        case "SEARCH_VIDEOS":
            return ({...state, SReducer:action.payload})
        default:
            return({state})
    }  
};
