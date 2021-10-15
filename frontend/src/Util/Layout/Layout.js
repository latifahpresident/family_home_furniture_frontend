import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from '../../Components/Navigation/Nav';

const Layout = (props) => {
    return (
        <React.Fragment>
            <Nav/>
             <main style={{width: "100%", overflow: "hidden"}}>
                {props.children}
            </main>
        </React.Fragment>

    )
};

export default withRouter(Layout);