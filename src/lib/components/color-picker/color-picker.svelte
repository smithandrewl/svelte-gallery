
<script lang="ts">
  import Slider from '$lib/components/color-picker/slider.svelte'

  let red   = 127;
  let green = 127;
  let blue  = 127;

  function rgbToHex(red: number, green: number, blue: number): string {
    const toHex = (value: number): string => {
      const hex = value.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    const isValueInvalid = (value: number) => value < 0 || value > 255;

    const isColorInvalid = [red, green, blue].some(isValueInvalid);

    if (isColorInvalid) {
      throw new Error('Invalid color component value, must be between 0 and 255');
    }

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();
  }
</script>

<div class="sliders">
  <Slider color="Red"   bind:value={red}/>
  <Slider color="Green" bind:value={green}/>
  <Slider color="Blue"  bind:value={blue}/>
</div>

<h3 class="mt-5">{rgbToHex(red, green, blue)}</h3>
<div
  class = "color-box"
  style = "background-color:rgb({red}, {green}, {blue});"
></div>

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
