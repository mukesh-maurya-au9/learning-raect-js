import {combineReducers} from 'redux';
import Videos from './trendingReducer';
// import SearchReducer from './trendingReducer';

const rootReducer = combineReducers({
    Videos,
    // SearchReducer
});

export default rootReducer; 