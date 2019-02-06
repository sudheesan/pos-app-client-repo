import {NotificationManager } from 'react-notifications';


export default{

  createNotification:(alert) => {

        return () => {
            switch (alert.type) {
                case 'info':
                    NotificationManager.info(alert.notification);
                    break;
                case 'success':
                    NotificationManager.success(alert.notification, alert.resource, 3000);
                    break;
                case 'warning':
                    NotificationManager.warning(alert.notification, alert.resource, 3000);
                    break;
                case 'error':
                    NotificationManager.error(alert.notification, alert.resource, 3000);
                    break;
                default:
                    break;
            }
        };
    }
}