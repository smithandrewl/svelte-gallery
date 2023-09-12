import {derived, writable} from 'svelte/store';

import type { Readable } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type {HSLColor, RGBColor} from '$lib/util';

import {hexToHSL, hexToRGB, hslToHex, rgbToHex} from '$lib/util';

export interface ColorConversionStore extends Readable<string | undefined> {
  setSelectedColor: (color: string | undefined) => void;
  setColorFromRgb: (red: number, green: number, blue: number) => void;
  setColorFromHex: (hex: string) => void;
  setColorFromHsl: (h: number, s: number, l: number) => void;
  getColor: () => Writable<string | undefined>;
}

export function createColorConversionStore(): ColorConversionStore {
  const internalStore = writable<string | undefined>(undefined);

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

  return {
    subscribe,
    setSelectedColor,
    setColorFromRgb,
    setColorFromHex,
    setColorFromHsl,
    getColor
  };
}

export interface ColorInfoStore {
  rgb: RGBColor,
  hsl: HSLColor,
  hex: string
}

export function createColorInfoStore(baseStore: ColorConversionStore): Readable<ColorInfoStore> {
  return derived(
    baseStore,
    ($baseStore) => {
      return <ColorInfoStore>{
        rgb: hexToRGB($baseStore),
        hsl: hexToHSL($baseStore),
        hex: $baseStore
      }
    }
  );
}


