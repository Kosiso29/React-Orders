import React, { Component } from "react";

import Header from "../../components/Header/Header";
import classes from "./Transactions.module.css";

class Transactions extends Component {
    render() {
        return (
            <div className={classes.Transactions}>
                <Header header="Transactions" />
            </div>
        );
    }
}

export default Transactions;