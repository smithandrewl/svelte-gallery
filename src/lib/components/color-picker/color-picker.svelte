
<script lang="ts">
  import Slider from '$lib/components/color-picker/slider.svelte'

  let red   = 127;
  let green = 127;
  let blue  = 127;

  function lighter(value: number): number {
    let brighter = value * 1.5;
    return Math.min(brighter, 255);
  }

  function darker(value: number): number {
    return value / 2;
  }

  function rgbToHex(red: number, green: number, blue: number): string {
    const toHex = (value: number): string => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
      throw new Error('Invalid color component value, must be between 0 and 255');
    }

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();
  }

  $: lighterColor = `rgb(${lighter(red)}, ${lighter(green)}, ${lighter(blue)})`;
  $: darkerColor = `rgb(${darker(red)}, ${darker(green)}, ${darker(blue)}`;
</script>

<div class="mt-5 sliders">
  <Slider color="Red"   bind:value={red}/>
  <Slider color="Green" bind:value={green}/>
  <Slider color="Blue"  bind:value={blue}/>
</div>

<h3 class="mt-5">{rgbToHex(red, green, blue)}</h3>
<div class="color-box" style="background-color:rgb({red}, {green}, {blue}); border-left-color: {lighterColor}; border-top-color: {lighterColor}; border-right-color: {darkerColor}; border-bottom-color: {darkerColor}"></div>

<style>
  .sliders {
    width: 400px;
  }

  .color-box {
    height:       400px;
    width:        400px;
    border-style: solid;
    border-width: 10px;

  }
</style>
