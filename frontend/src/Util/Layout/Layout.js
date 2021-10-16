import React from 'react';
import {withRouter} from 'react-router-dom';
import Nav from '../../Components/Navigation/Nav';
import Footer from "./../../Components/Footer/Footer";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Nav/>
             <main style={{width: "100%", overflow: "hidden"}}>
                {props.children}
            </main>
            <Footer/>
        </React.Fragment>

    )
};

export default withRouter(Layout);