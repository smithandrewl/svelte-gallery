import {derived, writable} from 'svelte/store';

import type { Writable } from 'svelte/store';

export interface BorderRadiusGeneratorStore {
  topLeftRadius:     number;
  topRightRadius:    number;
  bottomRightRadius: number;
  bottomLeftRadius:  number;
}

export const defaultBorderRadius = () => ({
  topLeftRadius:     10,
  topRightRadius:    126,
  bottomRightRadius: 43,
  bottomLeftRadius:  0,
});

export function createBorderRadiusGeneratorStore() {
  return writable<BorderRadiusGeneratorStore>(defaultBorderRadius());
}

function buildPixelString(store: BorderRadiusGeneratorStore) {
  return `${store.topLeftRadius}px ${store.topRightRadius}px ${store.bottomRightRadius}px ${store.bottomLeftRadius}px;`
}

export function createBorderRadiusCSSStore(borderRadiusGeneratorStore: Writable<BorderRadiusGeneratorStore>) {
  return derived(borderRadiusGeneratorStore, ($store) => {
    const pixelString = buildPixelString($store);
    return `border-radius:         ${pixelString}\n` +
      `-webkit-border-radius: ${pixelString}\n` +
      `-moz-border-radius:    ${pixelString}\n`;
  });
}

