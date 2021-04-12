import React, { Component } from 'react';

import classes from "./Dashboard.module.css";
import Header from "../../components/Header/Header";
// import { connect } from 'react-redux';
import axios from '../../axios';

class Dashboard extends Component {
    state = {
        isLodaed: false,
        items: []
    }
    componentDidMount() {
        // console.log("Dashboard has Initial state of " + this.props.email);
        axios.get('GtFood?vendorCode=LAW')
            .then((response) => {
                this.setState({
                    items: response.data.data
                });
            })
            .then(() => {
                this.setState({
                    isLodaed: true
                });
                // console.log(this.state.items[0].foodName);
            })
            .catch(error => {
                // console.log(error.data);
            })
    }
    render() {
        var testedItem = (<tr><td>Error: Nothing to show</td></tr>);
        if (this.state.isLodaed) {
            testedItem = this.state.items.map((item, index) => (
                <tr key={index}>
                    <td>{item.foodName}</td>
                    <td>{item.price}</td>
                    <td>{item.categoryCode}</td>
                    <td>{item.vendorCode}</td>
                    <td>1</td>
                </tr>
            ))
            // console.log(testedItem);
        }
        return (
            <>
                <div className={classes.Dashboard}>
                    <Header header="Dashboard" />
                    <div className={classes.Balance}>Balance</div>
                    <div className={classes.Balance + " " + classes.Order}>Orders</div>
                    <div className={classes.Table}>
                        {/* <h1>Table</h1> */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Food Name</th>
                                    <th>Price</th>
                                    <th>Category Code</th>
                                    <th>Vendor Code</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.state.isLodaed ? this.state.items.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item[index].foodName}</td>
                                        <td>{item[index].price}</td>
                                        <td>{item[index].categoryCode}</td>
                                        <td>{item[index].vendorCode}</td>
                                        <td><button>Edit</button></td>
                                    </tr>
                                )) : null} */}
                                {/* <tr>
                                    <td>{this.state.items[0].foodName}</td>
                                    <td>{this.state.items[0].price}</td>
                                    <td>{this.state.items[0].categoryCode}</td>
                                    <td>{this.state.items[0].vendorCode}</td>
                                    <td><button>Edit</button></td>
                                </tr> */}
                                {testedItem}
                            </tbody>
                        </table>
                        <button>Order</button>
                    </div>
                </div>
            </>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         email: state.auth.email
//     }
// }

export default Dashboard;

// export default connect(mapStateToProps)(Dashboard);