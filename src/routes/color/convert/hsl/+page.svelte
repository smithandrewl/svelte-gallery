<script lang="ts">
  import {
    colorConversionStore,
    colorInfoStore,
    colorConversionCss
  } from "$lib/stores/color-conversion-store.ts";

  import { onMount } from 'svelte';

  import {hexToHSL} from '$lib/util';

  let h = 0;
  let s = 0;
  let l = 0;

  onMount(() => {
    colorConversionStore.setDefaultColor();

    let hsl = hexToHSL($colorConversionStore);

    h = hsl.h;
    s = hsl.s;
    l = hsl.l;
  });

  function updateStoreColor() {
    colorConversionStore.setColorFromHsl(h, s, l);
  }
</script>

<form>
  <div class="form-group">
    <label for="hue">Hue:</label>
    <input
      type        = "number"
      class       = "form-control"
      id          = "hue"
      min         = "0"
      max         = "255"
      placeholder = "Enter hue value"
      bind:value  = {h}
      on:change   = {updateStoreColor}
    >
  </div>
  <div class="form-group mt-3">
    <label for="saturation">Saturation:</label>
    <input
      type        = "number"
      class       = "form-control"
      id          = "saturation"
      min         = "0"
      max         = "255"
      placeholder = "Enter saturation value"
      bind:value  = {s}
      on:change   = {updateStoreColor}
    >
  </div>
  <div class="form-group mt-3">
    <label for="lightness">Lightness:</label>
    <input
      type        = "number"
      class       = "form-control"
      id          = "lightness"
      min         = "0"
      max         = "255"
      placeholder = "Enter lightness value"
      bind:value  = {l}
      on:change   = {updateStoreColor}
    >
  </div>
</form>
