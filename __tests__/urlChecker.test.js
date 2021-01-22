import { checkUrl } from '../src/client/js/urlChecker';
//Simple test to ensure checkUrl function is working as expected.
// This will not validate the user entry.
describe('Validation of url', () => {
    test('It should return true', () => {
    const url = 'https://www.apple.com';
      expect(checkUrl(url)).toBe(true);
    });
  });