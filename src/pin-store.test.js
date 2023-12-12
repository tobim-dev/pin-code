import { isValidCode } from './pin-store';

describe('PIN store validation function', () => {
  test('happy case', () => {
    expect(isValidCode('12345')).toBe(true);
  });
  test(`a pin with funny characters is invalid`, () => {
    expect(isValidCode('12ab3')).toBe(false);
  });

  test(`a pin that is too long is invalid`, () => {
    expect(isValidCode('124567')).toBe(false);
    expect(isValidCode('12456')).toBe(true);
  });

  test(`a pin with all the same digit is invalid`, () => {
    expect(isValidCode('11111')).toBe(false);
  });

  test(`a pin being combined out of 3 different digits is invalid`, () => {
    expect(isValidCode('11552')).toBe(false);
    expect(isValidCode('15152')).toBe(false);
    expect(isValidCode('15525')).toBe(false);
  });

  test(`a pin being combined out of 2 different digits is invalid`, () => {
    expect(isValidCode('11122')).toBe(false);
    expect(isValidCode('12121')).toBe(false);
    expect(isValidCode('21112')).toBe(false);
  });

  test(`a pin being combined out of 4 or more different digits is valid`, () => {
    expect(isValidCode('12382')).toBe(true);
    expect(isValidCode('12389')).toBe(true);
  });

  test(`a pin being combined a ascending sequence of digits is invalid`, () => {
    expect(isValidCode('01234')).toBe(false);
    expect(isValidCode('21234')).toBe(true);
  });

  test(`a pin being combined a descending sequence of digits is invalid`, () => {
    expect(isValidCode('54321')).toBe(false);
    expect(isValidCode('54320')).toBe(true);
  });

  test(`a pin with a digit used twice is valid`, () => {
    expect(isValidCode('17821')).toBe(true);
    expect(isValidCode('11782')).toBe(true);
  });

  test(`a pin with a digit used three times or more is invalid`, () => {
    expect(isValidCode('17121')).toBe(false);
    expect(isValidCode('11781')).toBe(false);
    expect(isValidCode('11129')).toBe(false);
  });
});
