import {NotificationManager } from 'react-notifications';


export default{

  createNotification:(alert) => {

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
                default:
                    break;
            }
        };
    }
}