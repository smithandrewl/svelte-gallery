import {derived, writable} from 'svelte/store';

import type { Writable } from 'svelte/store';
import {rgbToHex, rgbToHSLCss} from '$lib/util/colors.js';

export interface ColorPickerStore {
  red:   number;
  green: number;
  blue:  number;
}

export const defaultColorPicker = () => ({
  red:   0,
  green: 0,
  blue:  128
});

export function createColorPickerStore() {
  return writable<ColorPickerStore>(defaultColorPicker());
}

export function createColorPickerDetailedStore(colorPickerStore: Writable<ColorPickerStore>) {
  return derived(colorPickerStore, ($store) => {
    return {
      rgb: rgbToHex($store.red, $store.green, $store.blue)
    };
  });
}

export function createColorPickerCSSStore(colorPickerStore: Writable<ColorPickerStore>) {
  return derived(colorPickerStore, ($store) => {
    return `background-color: rgb(${$store.red}, ${$store.green}, ${$store.blue});\n` +
      `background-color: ${rgbToHSLCss($store.red, $store.green, $store.blue)};`;
  })
}
