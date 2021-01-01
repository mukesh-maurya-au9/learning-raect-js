import React from 'react';
import ReactDOM from 'react-dom';
import Store from './store/store';
import {Provider} from 'react-redux';
import Routing from './routing';


ReactDOM.render(
    <Provider store = {Store}>
        <Routing/>
    </Provider>, document.getElementById('root')
)