import { writable } from 'svelte/store';

export interface GradientGeneratorStore {
  startColor: string;
  endColor:   string;
  angle:      number;
  type:       string;
}

export const defaultGradient = () => ({
  startColor: '#FFFFFF',
  endColor:   '#000000',
  angle:      0,
  type:       'linear'
});

export function createGradientGeneratorStore() {
  return writable<GradientGeneratorStore>(defaultGradient());
}

