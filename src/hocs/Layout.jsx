import React from 'react';
import Nav from '../components/Nav';

const Layout = props => (
    <div>
        <Nav />
        {props.children}
    </div>
);

export default Layout;