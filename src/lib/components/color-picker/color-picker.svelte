
<script>
  import Slider from '$lib/components/color-picker/slider.svelte'

  let red   = 127;
  let green = 127;
  let blue  = 127;
</script>

<div class="mt-5 sliders">
  <Slider color="Red"   bind:value={red}/>
  <Slider color="Green" bind:value={green}/>
  <Slider color="Blue"  bind:value={blue}/>
</div>

<div class="mt-5 color-box" style="background-color:rgb({red}, {green}, {blue})"></div>

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
