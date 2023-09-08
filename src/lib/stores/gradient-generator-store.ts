import {derived, writable} from 'svelte/store';

import type { Writable } from 'svelte/store';

export interface GradientGeneratorStore {
  startColor: string;
  endColor:   string;
  angle:      number;
  type:       string;
}

export const defaultGradient = () => ({
  startColor: '#000000',
  endColor:   '#000080',
  angle:      0,
  type:       'linear'
});

export function createGradientGeneratorStore() {
  return writable<GradientGeneratorStore>(defaultGradient());
}

export function createCSSStore(gradientStore: Writable<GradientGeneratorStore>) {
  return derived(gradientStore, ($gradientStore) => {
    const { angle } = $gradientStore;

    const startColor = $gradientStore.startColor.toUpperCase();
    const endColor   = $gradientStore.endColor.toUpperCase();

    if($gradientStore.type === 'linear') {
      return `background: ${startColor};\n` +
        `background: -webkit-linear-gradient(${angle}deg, ${startColor} 0%, ${endColor} 100%);\n` +
        `background: linear-gradient(${angle}deg, ${startColor} 0%, ${endColor} 100%);`;
    } else {
      return `background: ${startColor};\n` +
        `background: -webkit-radial-gradient(circle, ${startColor} 0%, ${endColor} 100%);\n` +
        `background: radial-gradient(circle, ${startColor} 0%, ${endColor} 100%);\n`;
    }
  });
}

