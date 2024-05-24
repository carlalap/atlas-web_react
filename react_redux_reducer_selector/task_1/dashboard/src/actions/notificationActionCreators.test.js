// Test the action creators
import { markAsRead, setNotificationFilter, } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('notification action creators return expected values', () => {
    it('markAsRead', () => {
        const index = 1;
        const expectedBehaviour = {
            type: MARK_AS_READ,
            index
        };
        expect(markAsRead(index)).toEqual(expectedBehaviour);
    });

    it('setNotificationFilter action creator', () => {
        const filter = NotificationTypeFilters.DEFAULT;
        const expectedBehaviour = {
            type: SET_TYPE_FILTER,
            filter
        };
        expect(setNotificationFilter(filter)).toEqual(expectedBehaviour);
    });
});