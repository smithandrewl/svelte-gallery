import {toHex} from '$lib/util/math.js';

export type RGBColor = {
  red:   number,
  green: number,
  blue:  number
}

export type HSLColor = {
  h: number;
  s: number;
  l: number;
};

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

/**
 * Converts a hexadecimal color string to an RGB object.
 *
 * @param {string | undefined} hex - The hexadecimal color string to convert. If undefined, the function returns undefined.
 * @returns {RGBColor | null | undefined} An object containing RGB components (`red`, `green`, `blue`), or `null` if the input string is invalid, or `undefined` if the input is undefined.
 * @example
 * hexToRGB("#FF0000");  // Output: { red: 255, green: 0, blue: 0 }
 * hexToRGB(undefined);  // Output: undefined
 * hexToRGB("#GGGGGG");  // Output: null
 */
export function hexToRGB(hex: string| undefined): RGBColor | null | undefined {
  if(hex === undefined) {
    return undefined;
  }

  // Remove the leading '#' if it exists
  hex = hex.replace(/^#/, '');

  // Validate hex string
  if (hex.length !== 6 || !/^([A-Fa-f0-9]{6})$/.test(hex)) {
    return null;
  }

  // Extract red, green, and blue components
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  return {
    red, green, blue
  };
}

/**
 * Converts a hexadecimal color string to HSL values.
 *
 * @param {string | undefined} hex - The hexadecimal color string to convert. If undefined, the function will return undefined.
 * @returns {HSLColor | undefined} An object containing HSL components (`h`, `s`, `l`) or `undefined` if input is invalid.
 * @example
 * hexToHSL("#FF0000");  // Output: { h: 0, s: 100, l: 50 }
 * hexToHSL(undefined);  // Output: undefined
 */
export function hexToHSL(hex:string | undefined): HSLColor | undefined {
  const rgb = hexToRGB(hex);

  if (rgb === undefined || rgb === null) {
    return undefined;
  } else {
    return rgbToHsl(rgb.red, rgb.green, rgb.blue);
  }
}

/**
 * Converts HSL color values to a hexadecimal color string.
 *
 * @param {number} h - The hue component of the color, ranging from 0 to 360.
 * @param {number} s - The saturation component of the color, ranging from 0 to 100.
 * @param {number} l - The lightness component of the color, ranging from 0 to 100.
 * @returns {string} A hexadecimal string representation of the color, in uppercase.
 * @example
 * hslToHex(0, 100, 50);  // Output: "#FF0000"
 * hslToHex(120, 100, 50);  // Output: "#00FF00"
 */
export function hslToHex(h: number, s: number, l: number): string {
  const toHex = (value: number): string => {
    const hex = Math.round(value).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  r = (r + m) * 255;
  g = (g + m) * 255;
  b = (b + m) * 255;

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}



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

/**
 * Validates if a given string is a valid hexadecimal color.
 *
 * @param {string} color - The color string to validate.
 * @returns {boolean} Returns `true` if the input is a valid hexadecimal color; otherwise, `false`.
 * @example
 * isValidHexColor("#fff");  // Output: true
 * isValidHexColor("#abcdef");  // Output: true
 * isValidHexColor("#ggg");  // Output: false
 */
export function isValidHexColor(color: string): boolean {
  const hexRegex = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
  return hexRegex.test(color);
}

/**
 * Converts RGB color values to a CSS HSL string representation.
 *
 * @param {number} red - The red component of the color, ranging from 0 to 255.
 * @param {number} green - The green component of the color, ranging from 0 to 255.
 * @param {number} blue - The blue component of the color, ranging from 0 to 255.
 * @returns {string} A CSS HSL string representation of the color.
 * @example
 * const cssHSL = rgbToHSLCss(255, 0, 0);  // Output: "hsl(0, 100%, 50%)"
 */
export function rgbToHSLCss(red: number, green: number, blue: number) {
  let hsl = rgbToHsl(red, green, blue);

  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
}
