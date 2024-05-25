import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActionTypes';

const initialState = {
  notifications: [],
  filter: 'DEFAULT'
};

const notificationReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            return {
                ...state, 
                notifications: action.data.map(notification => ({
                    ...notification, isRead: false }))
            };
        case MARK_AS_READ:
            const notifications = state.notifications.map((notification) => {
                if (notification.id === action.index) notification.isRead = true;
                    return notification;
                })
                return { ...state, notifications };

        case SET_TYPE_FILTER:
                return {...state, filter: NotificationTypeFilters[action.filter] };
            default:
                return state;
    }
};

export default notificationReducer;