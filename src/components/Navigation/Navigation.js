import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from '../../assets/EMS.svg';
import { connect } from "react-redux";

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
                    <img src={Logo} alt="logo"></img>
                    <p>{this.props.email.split("@")[0]}</p>
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

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps)(Navigation);