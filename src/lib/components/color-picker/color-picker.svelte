
<script>
  import Slider from '$lib/components/color-picker/slider.svelte'
</script>

<div class="mt-5 sliders">
  <Slider color="Red" value="0"/>
</div>

<div class="mt-5 color-box"></div>

<style>
  .sliders {
    width: 600px;
  }

  .color-box {
    height:       600px;
    width:        600px;
    border-style: dashed;
    border-width: 4px;
    border-color: black;
  }
</style>
