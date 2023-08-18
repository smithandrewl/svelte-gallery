<script>
  import ShadowSlider from "$lib/components/shadow-generator/shadow-slider.svelte";

  let horizontalLength = 0;
  let verticalLength   = 0;
  let blurRadius       = 0;
  let spreadRadius     = 0;
</script>
<h1>Shadow Generator</h1>

<ShadowSlider bind:value={horizontalLength} name="Horizontal Length"/>
<ShadowSlider bind:value={verticalLength}   name="Vertical Length"/>
<ShadowSlider bind:value={blurRadius}       name="Blur Radius"/>
<ShadowSlider bind:value={spreadRadius}     name="Spread Radius"/>
