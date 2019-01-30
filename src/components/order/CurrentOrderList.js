import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import OrderListItem from "./OrderListItem"
import NewOrder from "./NewOrder";
import { fetchAllPendingOrders } from '../../actions/orderAction'
import { Table, Row, Col } from 'reactstrap'
import '../../styles/main.css';
import 'react-notifications/lib/notifications.css';
import cookies from '../../utils/cookie.util'
class CurrentOrderList extends Component {

    constructor(props) {
        super(props);
        this.createNotification = this.createNotification.bind(this);

    }
    componentDidMount() {
        const usrNameCookie = cookies.getCookie('userName');
        if (usrNameCookie) {
            this.props.dispatch(fetchAllPendingOrders());
        } else {
            this.props.history.push("/login");
        }
    }

    createNotification(alert) {
        
        return () => {
            switch (alert.type) {
                case 'info':
                    NotificationManager.info(alert.notification);
                    break;
                case 'success':
                    NotificationManager.success(alert.notification, 'Order', 2000);
                    console.log("insid sueccess")
                    break;
                case 'warning':
                    NotificationManager.warning(alert.notification, 'Order', 2000);
                    break;
                case 'error':
                    NotificationManager.error(alert.notification, 'Order', 2000);
                    break;
                default :
                 break;
            }
        };
    }

    render() {
        // var notification = this.createNotification(this.props.message);
        // notification();
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
                    <Col className='orderlist-container' md={{ size: 6, offset: 3 }}>
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
                    </Col>

                </Row>
                <NewOrder></NewOrder>
                <NotificationContainer />
            </div>


        );
    }
}


const mapStateToProps = state => ({
    orderList: state.orderReducer.orders,
    message: state.orderReducer.updateNotification
});

export default connect(mapStateToProps)(CurrentOrderList);