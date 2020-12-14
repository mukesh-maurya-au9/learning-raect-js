import React, { Fragment } from 'react';
import Search from './Search.js';
import QuickSearch from './QuickSearch';

const Home = () => {
    return (
        <Fragment >
            <Search />
            <QuickSearch />
        </Fragment>
    )
};
export default Home;

