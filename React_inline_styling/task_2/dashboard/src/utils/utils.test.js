import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// test getFullYear funct
test('getFullYear returns the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// test getFooterCopy func when true
test('getFooterCopy returns correct string when argument is true', () => {
  expect(getFooterCopy(true)).toBe('Atlas School');
});

// test getFooterCopy func when false
test('getFooterCopy returns correct string when argument is false', () => {
  expect(getFooterCopy(false)).toBe('Atlas School main dashboard');
});

// test getLatestNotification func
test('getLatestNotification returns correct string', () => {
  expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});