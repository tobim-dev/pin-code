/**
 * A pin is valid when it satisfies the following criteria
 * - exactly 5 digits or characters
 * - only digits / numbers
 * - not all the same. e.g. '11111'
 * - digits in ascending or descending sequence asc. e.g. '12345' and '54321' are not allowed
 * - it consists of more or exactly 4 **different** digits
 * - digits can be used twice, but not more often. E.g. '18961' is valid, but '18911' not.
 */

/**
 * This function should return `true` for valid and `false` for invalid pinCodes.
 */
export function isValidCode(pinCode = '') {
  // pinCode is always a string, like "12xu8"
  if (typeof pinCode !== 'string') {
    pinCode = String(pinCode);
  }

  // if (
  //   // here you could check for the first criterium
  // ) {
  //   return false;
  // }

  return null;
}
