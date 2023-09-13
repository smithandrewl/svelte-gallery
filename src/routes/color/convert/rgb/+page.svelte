<script lang="ts">
  import {
    colorConversionStore,
    colorInfoStore,
    colorConversionCss
  } from "$lib/stores/color-conversion-store.ts";

  import { onMount } from 'svelte';

  import {hexToRGB} from '$lib/util';

  let red = 0;
  let green = 0;
  let blue = 0;

  onMount(() => {
    let rgb = hexToRGB($colorConversionStore);

    red = rgb.red;
    green = rgb.green;
    blue = rgb.blue;
  });

  function updateStoreColor() {
    if(red > 255) red = 255;
    if(green > 255) green = 255;
    if(blue > 255) blue = 255;

    if(red < 0) red = 0;
    if(green < 0) green = 0;
    if(blue < 0) blue = 0;

    colorConversionStore.setColorFromRgb(red, green, blue);
  }
</script>

<form>
  <div class="form-group">
    <label for="red">Red:</label>
    <input
      type        = "number"
      class       = "form-control"
      id          = "red"
      min         = "0"
      max         = "255"
      placeholder = "Enter Red value"
      bind:value  = {red}
      on:change   = {updateStoreColor}
    >
  </div>
  <div class="form-group mt-3">
    <label for="green">Green:</label>
    <input
      type        = "number"
      class       = "form-control"
      id          = "green"
      min         = "0"
      max         = "255"
      placeholder = "Enter Green value"
      bind:value  = {green}
      on:change   = {updateStoreColor}
    >
  </div>
  <div class="form-group mt-3">
    <label for="blue">Blue:</label>
    <input
      type        = "number"
      class       = "form-control"
      id          = "blue"
      min         = "0"
      max         = "255"
      placeholder = "Enter Blue value"
      bind:value  = {blue}
      on:change   = {updateStoreColor}
    >
  </div>
</form>
