import React, { useState } from 'react';
import { connect } from 'react-redux';
import Aux from '../Au/Au';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
const layout = props => {

    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerCloseHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible);
    }

    return (

        <Aux>

            <Toolbar drawerToggler={sideDrawerToggleHandler}
                isAuth={props.isAuthenticated} />
            <SideDrawer open={sideDrawerIsVisible} closed={sideDrawerCloseHandler}
                isAuth={props.isAuthenticated} />
            <main className={classes.Content}>{props.children}</main>


        </Aux >
    );


}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);