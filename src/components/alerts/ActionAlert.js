import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';


class ActionAlert extends Component {


    constructor(props) {
        super(props);
        this.createNotification = this.createNotification.bind(this);
    }

    createNotification(alert) {
        console.log("Inside create notification")
        return () => {
            switch (alert.type) {
                case 'info':
                    NotificationManager.info(alert.notification);
                    break;
                case 'success':
                    console.log("insid sueccess")
                    NotificationManager.success(alert.notification, 'Order', 2000);
                    break;
                case 'warning':
                    NotificationManager.warning(alert.notification, 'Order', 2000);
                    break;
                case 'error':
                    NotificationManager.error(alert.notification, 'Order', 2000);
                    break;
            }
        };
    }


    render() {
        console.log(this.props.message)
        this.createNotification(this.props.message)
        return (<NotificationContainer />);
    }

}

const mapStateToProps = state => ({
    message: state.orderReducer.updateNoification
});

export default connect(mapStateToProps)(ActionAlert);