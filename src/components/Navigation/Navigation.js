import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

class Navigation extends Component {
    state = {
        sideBar: false
    }

    sideBarToggle = () => {
        this.setState({ sideBar: !this.state.sideBar });
    }

    render() {
        return (
            <>
                <div onClick={this.sideBarToggle} className={classes.Span}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {this.state.sideBar ? <div className={classes.Backdrop}><Backdrop index="5" clicked={this.sideBarToggle} /></div> : null}
                <div className={this.state.sideBar ? classes.Navigation : classes.Navigation + " " + classes.Open}>
                    <span></span>
                    <NavLink onClick={this.sideBarToggle} to="/Dashboard" activeClassName={classes.Active}>Dashboard</NavLink>
                    <span></span>
                    <NavLink onClick={this.sideBarToggle} to="/Orders" activeClassName={classes.Active}>Orders</NavLink>
                    <span></span>
                    <NavLink onClick={this.sideBarToggle} to="/Transactions" activeClassName={classes.Active}>Transactions</NavLink>
                    <span></span>
                    <NavLink onClick={this.sideBarToggle} to="/">Logout</NavLink>
                    <span></span>
                </div>
            </>
        );
    }
}

export default Navigation;