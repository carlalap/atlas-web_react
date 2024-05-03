import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// test to check that the function getFullYear returns the correct year
test('getFullYear returns the current year', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});

// test to check that getFooterCopy returns the correct string when the argument is true or false
test('getFooterCopy returns correct string when argument is True', () => {
    expect(getFooterCopy(true)).toBe("Atlas School");
});

test('getFooterCopy returns string when argument is False', () => {
    expect(getFooterCopy(false)).toBe("Atlas School main dashboard");
});

// test checking the returned string for getLatestNotification
test('getLatestNotification returns correct string', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });