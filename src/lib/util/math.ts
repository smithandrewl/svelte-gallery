/**
 * Converts a number to its Hexadecimal string representation.
 *
 * @param {number} value - The number to convert to Hexadecimal.
 * @return {string} The Hexadecimal string representation of the number.
 */
export function toHex (value: number): string  {
  const hex = value.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
