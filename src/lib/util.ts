/**
 * Converts a given string into kebab-case.
 *
 * The `makeKebab` function performs the following transformations:
 * - Trims leading and trailing whitespace
 * - Converts the string to lowercase
 * - Removes any non-alphanumeric characters except spaces and dashes
 * - Replaces spaces with dashes
 * - Replaces multiple consecutive dashes with a single dash
 *
 * @param input - The input string to be converted into kebab-case.
 * @returns The kebab-cased string.
 * @example
 * makeKebab("Horizontal Length") // Returns "horizontal-length"
 */
export function makeKebab(input: string): string {
  let output =
    input
      .trim()                          // Remove leading and trailing whitespace
      .toLowerCase()                   // Convert the string to lowercase
      .replace(/[^a-zA-Z0-9\s-]/g, '') // Remove most non-alphanumeric characters
      .replace(/\s+/g, '-')            // Replace spaces with dashes
      .replace(/-+/g, '-');            // Replace multiple consecutive dashes with a single dash

  return output;
}

/**
 * Converts a number to its Hexadecimal string representation.
 *
 * @param {number} value - The number to convert to Hexadecimal.
 * @return {string} The Hexadecimal string representation of the number.
 */
function toHex (value: number): string  {
  const hex = value.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

/**
 * Converts individual Red, Green, and Blue color values to a Hexadecimal string.
 *
 * @example
 * // returns '#FFFFFF'
 * rgbToHex(255, 255, 255)
 *
 * @param {number} red   - The Red component of the color, ranging from 0 to 255.
 * @param {number} green - The Green component of the color, ranging from 0 to 255.
 * @param {number} blue  - The Blue component of the color, ranging from 0 to 255.
 * @throws {Error} Throws an error if any of the color components are outside the range 0-255.
 *
 * @return {string} The Hexadecimal representation of the color, as a string starting with '#'.
 */
export function rgbToHex(red: number, green: number, blue: number): string {
  const isValueInvalid = (value: number) => value < 0 || value > 255;

  const isColorInvalid = [red, green, blue].some(isValueInvalid);

  if (isColorInvalid) {
    throw new Error('Invalid color component value, must be between 0 and 255');
  }

  return `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();
}

type HSLColor = {
  h: number;
  s: number;
  l: number;
};

/**
 * Converts RGB color values to an HSL object.
 *
 * The function takes in the Red, Green, and Blue color components as parameters,
 * normalizes them, and returns an object containing the Hue, Saturation, and Lightness (HSL).
 *
 * @example
 * // returns { h: 0, s: 0, l: 100 }
 * rgbToHslObject(255, 255, 255)
 *
 * @param {number} r - The Red component of the color, must be an integer between 0 and 255.
 * @param {number} g - The Green component of the color, must be an integer between 0 and 255.
 * @param {number} b - The Blue component of the color, must be an integer between 0 and 255.
 *
 * @returns {HSLColor} An object representing the HSL color with properties `h`, `s`, and `l`.
 */
export function rgbToHsl(r: number, g: number, b: number): HSLColor {
  const r1 = r / 255;
  const g1 = g / 255;
  const b1 = b / 255;

  const maxColor = Math.max(r1, g1, b1);
  const minColor = Math.min(r1, g1, b1);

  let l = (maxColor + minColor) / 2;
  let s = 0;
  let h = 0;

  if (maxColor !== minColor) {
    s = l < 0.5 ? (maxColor - minColor) / (maxColor + minColor) : (maxColor - minColor) / (2.0 - maxColor - minColor);

    if (r1 === maxColor) h = (g1 - b1) / (maxColor - minColor);
    else if (g1 === maxColor) h = 2.0 + (b1 - r1) / (maxColor - minColor);
    else h = 4.0 + (r1 - g1) / (maxColor - minColor);
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return { h, s, l };
}

export function rgbToHSLCss(red: number, green: number, blue: number) {
  let hsl = rgbToHsl(red, green, blue);

  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}
