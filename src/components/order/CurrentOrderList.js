import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import OrderListItem from "./OrderListItem";
import NewOrder from "./NewOrder";
import { fetchAllPendingOrders } from '../../actions/orderAction';
import ActionSpiner from '../spinner/ActionSpinner';
import { Table, Row, Col } from 'reactstrap';
import '../../styles/main.css';
import 'react-notifications/lib/notifications.css';
import { FaHashtag } from 'react-icons/fa';


class CurrentOrderList extends Component {


    componentDidMount() {
        this.props.history.push('/currentOrderList');
        this.props.dispatch(fetchAllPendingOrders());
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
            <div>
                <Row>
                    <Col className="order-list-header" md={{ size: 8, offset: 2 }}>

                        <span>
                            Pending Orders
                       </span>
                    </Col >
                </Row>
                <Row>
                    <Col className='orderlist-container' md={{ size: 8, offset: 2 }}>
                       {this.props.isLoading && <ActionSpiner width='5rem' height='5rem'  color='secondary'></ActionSpiner>}
                       {!this.props.isLoading &&  <Table  hover>
                            <thead>
                                <tr>
                                    <th className='order-list-table-header'><FaHashtag></FaHashtag></th>
                                    <th className='text-center order-list-table-header'>Status</th>
                                    <th className='text-center order-list-table-header'>Total amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentPendingOrderItemArray}
                            </tbody>
                        </Table>} 
                    </Col>

                </Row>
                {!this.props.isLoading && <NewOrder></NewOrder>}
                <NotificationContainer />
            </div>


        );
    }
}


const mapStateToProps = state => ({
    orderList: state.orderReducer.orders,
    isLoading: state.orderReducer.isLoading
});

export default connect(mapStateToProps)(CurrentOrderList);