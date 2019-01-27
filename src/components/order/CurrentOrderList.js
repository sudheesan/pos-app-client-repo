import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrderListItem from "./OrderListItem"
import NewOrder from "./NewOrder";
import { fetchAllPendingOrders } from '../../actions/orderAction'
import { Table, Row, Col } from 'reactstrap'
import '../../styles/main.css'; 
class CurrentOrderList extends Component {

    componentDidMount() {
        const login = JSON.parse(localStorage.getItem('login'));
        if(login && login.isLoggedIn){
            this.props.dispatch(fetchAllPendingOrders());
        }else{
            this.props.history.push("/login")
        }
        

    }

    render() {

        var currentPendingOrders = this.props.orderList;
        const currentPendingOrderItemArray = [];

        if (currentPendingOrders) {
            currentPendingOrders.forEach((pendingOrder) => {
                currentPendingOrderItemArray.push(<OrderListItem key={pendingOrder._id} order={pendingOrder}></OrderListItem>)
            })
        }
        return (
            <Row>
                <Col className='orderlist-container' md={{size:6,offset:3}}>
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
                    <NewOrder></NewOrder>
                </Col>
            </Row>

        );
    }
}


const mapStateToProps = state => ({
    orderList: state.orderReducer.orders,
    currentOrder: state.orderReducer.currentOrder
});

export default connect(mapStateToProps)(CurrentOrderList);