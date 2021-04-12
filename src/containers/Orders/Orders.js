import React, { Component } from "react";

import Header from "../../components/Header/Header";
import classes from "./Orders.module.css";

class Orders extends Component {
    render() {
        return (
            <div className={classes.Orders}>
                <Header header="Orders" />
            </div>
        );
    }
}

export default Orders;