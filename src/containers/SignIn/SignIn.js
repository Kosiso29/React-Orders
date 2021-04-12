import React, { Component } from 'react';
import { connect } from "react-redux";

import Logo from '../../assets/EMS.svg';
import classes from './SignIn.module.css';
import axios from "../../axios";
import * as actions from "../../store/actions";

class SignIn extends Component {

    state = {
        email: "",
        password: "",
        loggedIn: false,
        error: false
    }

    componentDidMount() {
        // console.log("Initial state is " + this.props.email);
    }

    login = () => {
        const data = {
            userEmail: this.state.email
        }
        axios.post("/Login", data)
            .then(response => {
                this.setState({ loggedIn: true, error: false });
                this.props.onAuthVerifyEmail(this.state.email);
                // console.log(response.data, this.state.email);
            })
            .then(() => {
                // console.log("Final state is " + this.props.email);
                this.props.history.push('/Dashboard');
                // this.setState({ loggedIn: true });
            })
            .catch(error => {
                // console.log(error, error.data, data);
                this.setState({ error: true });
                setTimeout(() => {
                    this.props.history.push('/Dashboard');
                }, 1000);
            })
        setTimeout(() => {
            this.props.history.push('/Dashboard');
        }, 1000);
    }

    onChangeHandler = (event, input) => {
        const userInput = event.target.value;
        input === "email" ? this.setState({ email: userInput }) : this.setState({ password: userInput });
    }

    render() {
        return (
            <div className={classes.SignIn}>
                <img src={Logo} alt="logo"></img>
                <div>
                    <label>Sign In</label>
                    <input type="email" onChange={(event) => {this.onChangeHandler(event, "email")}} placeholder="Email" value={this.state.email}/>
                    <input type="password" onChange={(event) => {this.onChangeHandler(event, "password")}} placeholder="Password" value={this.state.password} />
                    <button onClick={this.login}>Login</button>
                    {this.state.error === true ? <p>*wrong email or password</p> : null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthVerifyEmail: (email) => dispatch(actions.authVerifyEmail(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);