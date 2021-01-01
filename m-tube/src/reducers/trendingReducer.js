const trendingReducer = (state={}, action)=>{
    switch(action.type){
        case "TRENDING_VIDEOS":
            return ({...state, TReducer:action.payload})
        default:
            return({state})
    }  
};
export default trendingReducer;