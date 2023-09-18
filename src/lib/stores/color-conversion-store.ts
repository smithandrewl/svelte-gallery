import {derived, writable} from 'svelte/store';

import type { Readable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type {HSLColor, RGBColor} from '$lib/util/colors.js';

import {hexToHSL, hexToRGB, hslToHex, rgbToHex} from '$lib/util/colors.js';

const defaultColor = {
  red:   0,
  green: 0,
  blue:  0,
};

export interface ColorConversionStore extends Readable<RGBColor | undefined> {
  setSelectedColor: (color: RGBColor | undefined) => void;
  setColorFromRgb: (red: number, green: number, blue: number) => void;
  setColorFromHex: (hex: string) => void;
  setColorFromHsl: (h: number, s: number, l: number) => void;
  getColor: () => Writable<RGBColor | undefined>;
  setDefaultColor: () => void;
  setNoColor: () => void;
}

export function createColorConversionStore(): ColorConversionStore {
  const internalStore = writable<RGBColor | undefined>(defaultColor);

  const { subscribe } = internalStore;

  const getColor = () => {
    return internalStore;
  }
  const setColorFromRgb = (red: number, green: number, blue: number): void => {
    internalStore.set({
      red,
      green,
      blue
    });
  }

  const setColorFromHex = (hex: string): void => {
    internalStore.set(hexToRGB(hex));
  }

  const setColorFromHsl = (h: number, s: number, l: number): void => {
    internalStore.set(hexToRGB(hslToHex(h, s, l)));
  }

  const setSelectedColor = (newColor: RGBColor | undefined): void => {
    internalStore.set(newColor);
  };

  const setDefaultColor = () => {
    internalStore.set(defaultColor);
  }

  const setNoColor = () => {
    internalStore.set(undefined);
  }

  return {
    subscribe,
    setSelectedColor,
    setColorFromRgb,
    setColorFromHex,
    setColorFromHsl,
    getColor,
    setDefaultColor,
    setNoColor
  };
}

export interface ColorInfoStore {
  rgb: RGBColor,
  hsl: HSLColor,
  hex: string
}

export function createColorInfoStore(baseStore: ColorConversionStore): Readable<ColorInfoStore | undefined> {
  return derived(
    baseStore,
    ($baseStore) => {
      if($baseStore === undefined) {
        return undefined;
      }

      const rgb = $baseStore;

      return <ColorInfoStore>{
        rgb: rgb,
        hsl: hexToHSL(rgbToHex($baseStore.red, $baseStore.green, $baseStore.blue)),
        hex: rgbToHex($baseStore.red, $baseStore.green, $baseStore.blue)
      }
    }
  );
}
export function createColorInfoCSSStore(baseStore: Readable<ColorInfoStore|undefined>): Readable<string> {
  return derived(
    baseStore,
    ($baseStore) => {

      if($baseStore === undefined || $baseStore.rgb === null) {
        return "";
      }

      return `color: ${$baseStore.hex};\n` +
        `color: rgb(${$baseStore.rgb.red}, ${$baseStore.rgb.green}, ${$baseStore.rgb.blue});\n` +
        `color: hsl(${$baseStore.hsl.h}, ${$baseStore.hsl.s}, ${$baseStore.hsl.l});\n`;
    }
  )
}

export let colorConversionStore = createColorConversionStore();

export let colorInfoStore = createColorInfoStore(colorConversionStore);
export let colorConversionCss = createColorInfoCSSStore(colorInfoStore);


