<script>
  import ShadowSlider from "$lib/components/shadow-generator/shadow-slider.svelte";
  import ShadowBox    from '$lib/components/shadow-generator/shadow-box.svelte';

  let horizontalLength = 4;
  let verticalLength   = 10;
  let blurRadius       = 5;
  let spreadRadius     = 0;
</script>
<h1>Shadow Generator</h1>

<div class="row">
  <div class="col-sm-12 mb-5">
    <ShadowSlider bind:value={horizontalLength} name="Horizontal Length" min="-200" max="200"/>
    <ShadowSlider bind:value={verticalLength}   name="Vertical Length"   min="-200" max="200"/>
    <ShadowSlider bind:value={blurRadius}       name="Blur Radius"       min="0"    max="300"/>
    <ShadowSlider bind:value={spreadRadius}     name="Spread Radius"     min="-200" max="200"/>
  </div>
  <div class="col-sm-12">
    <ShadowBox
      horizontalLength = {horizontalLength}
      verticalLength   = {verticalLength}
      blurRadius       = {blurRadius}
      spreadRadius     = {spreadRadius}
    />
  </div>
</div>
