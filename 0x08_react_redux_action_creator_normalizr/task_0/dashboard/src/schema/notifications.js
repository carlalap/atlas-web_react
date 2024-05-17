/* notificarions.js file
* Import the JSON data from notifications.json
* return: return data from the notifications.json 
* when the author id is the same as the userId
*/

import * as data from '../../notifications.json';

export default function getAllNotificationsByUser(userId) {
   // filter the notifications based on the author id
   return data.default.filter((notification) => notification.author.id === userId)
};