/* notificarions.js file
* Import the JSON data from notifications.json
* return: return data from the notifications.json 
* when the author id is the same as the userId
*/
import * as data from '../../notifications.json';
import { schema, normalize } from 'normalizr';

// creates entities
const user = new schema.Entity("users")
const  message = new schema.Entity("messages", {}, {  idAttribute: 'guid' } )
const notification = new schema.Entity("notifications", {
  author: user,
  context: message
})

// normalize the data
const normalizedData = normalize(data.default, [notification]);

const getAllNotificationsByUser = (userId) => {
  // extract normalied entities and result
  const { entities } = normalizedData;

  // check if notifications are present and result is valid
  const notificationIds = Object.values(entities.notifications || {});
  const userNotifications = [];

  // iterate through notificationIds and add valid notifications to userNotifications array
  for (let i = 0; i < notificationIds.length; i++) {
    const notification = notificationIds[i];
    if (entities.users[notification.author].id === userId) {
      userNotifications.push(notification);
    }
  }
  // extract context from each notification
  const contextArray = userNotifications.map((notification) => {
    const messageData = entities.messages[notification.context];
    return {
      guid: messageData.guid,
      isRead: messageData.isRead,
      type: messageData.type,
      value: messageData.value
    };
  });
  return contextArray;
};

export { getAllNotificationsByUser, notification };