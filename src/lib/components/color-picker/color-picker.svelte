
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

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
      throw new Error('Invalid color component value, must be between 0 and 255');
    }

    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`.toUpperCase();
  }
</script>

<div class="mt-5 sliders">
  <Slider color="Red"   bind:value={red}/>
  <Slider color="Green" bind:value={green}/>
  <Slider color="Blue"  bind:value={blue}/>
</div>

<h3 class="mt-5">{rgbToHex(red, green, blue)}</h3>
<div class="color-box" style="background-color:rgb({red}, {green}, {blue})"></div>

<style>
  .sliders {
    width: 400px;
  }

  .color-box {
    height:       400px;
    width:        400px;
    border-style: dashed;
    border-width: 4px;
    border-color: black;
  }
</style>
