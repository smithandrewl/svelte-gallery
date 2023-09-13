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
    let hsl = hexToHSL($colorConversionStore);

    h = hsl.h;
    s = hsl.s;
    l = hsl.l;
  });

  function updateStoreColor() {

    if(h < 0) h = 0;
    if(s < 0) s = 0;
    if(l < 0) s = 0;

    if(h > 360) h = 360;
    if(s > 100) s = 100;
    if(l > 100) l = 100;

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
      max         = "360"
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
      max         = "100"
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
      max         = "100"
      placeholder = "Enter lightness value"
      bind:value  = {l}
      on:change   = {updateStoreColor}
    >
  </div>
</form>
