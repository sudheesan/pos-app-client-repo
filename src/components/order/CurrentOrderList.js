import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderListItem from "./OrderListItem"
// import orderService from '../../api/orders.api';
import { fetchAllPendingOrders } from '../../actions/getAllPendingOrdersAction'
import { Table } from 'reactstrap'
class CurrentOrderList extends Component {
    
    componentDidMount() {
     
        this.props.dispatch(fetchAllPendingOrders());

    }

    render() {

        var  currentPendingOrders = this.props.orderList;
        
        console.log("render", currentPendingOrders);
        const currentPendingOrderItemArray = [];
        
        currentPendingOrders.forEach((pendingOrder) => {
            currentPendingOrderItemArray.push(<OrderListItem  key={pendingOrder._id} order={pendingOrder}></OrderListItem>)
        })
        return (
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Items</th>
                        <th>Total amount</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPendingOrderItemArray}
                </tbody>
            </Table>
        );
    }
}


const mapStateToProps = state => ({
    orderList: state.orderReducer
});

export default connect(mapStateToProps)(CurrentOrderList);