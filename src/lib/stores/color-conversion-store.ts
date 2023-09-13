import {derived, writable} from 'svelte/store';

import type { Readable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type {HSLColor, RGBColor} from '$lib/util';

import {hexToHSL, hexToRGB, hslToHex, rgbToHex} from '$lib/util';

const defaultColor = "#0FF000";

export interface ColorConversionStore extends Readable<string | undefined> {
  setSelectedColor: (color: string | undefined) => void;
  setColorFromRgb: (red: number, green: number, blue: number) => void;
  setColorFromHex: (hex: string) => void;
  setColorFromHsl: (h: number, s: number, l: number) => void;
  getColor: () => Writable<string | undefined>;
  setDefaultColor: () => void;
  setNoColor: () => void;
}

export function createColorConversionStore(): ColorConversionStore {
  const internalStore = writable<string | undefined>(defaultColor);

  const { subscribe } = internalStore;

  const getColor = () => {
    return internalStore;
  }
  const setColorFromRgb = (red: number, green: number, blue: number): void => {
    internalStore.set(rgbToHex(red, green, blue));
  }

  const setColorFromHex = (hex: string): void => {
    internalStore.set(hex);
  }

  const setColorFromHsl = (h: number, s: number, l: number): void => {
    internalStore.set(hslToHex(h, s, l));
  }

  const setSelectedColor = (newColor: string | undefined): void => {
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

      const rgb = hexToRGB($baseStore);

      return <ColorInfoStore>{
        rgb: rgb,
        hsl: hexToHSL($baseStore),
        hex: $baseStore
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


