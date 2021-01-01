import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers/rootReducer';

let Store = createStore(rootReducer, applyMiddleware(promiseMiddleware, logger))

export default Store;