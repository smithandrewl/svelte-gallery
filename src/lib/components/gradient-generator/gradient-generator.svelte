<script lang="ts">

  import ColorPicker from '$lib/components/misc/color-picker.svelte';
  import GradientBox from '$lib/components/gradient-generator/gradient-box.svelte';

  let startColor = "#000000";
  let endColor   = "#613583";
  let angle      = 0;
  let type       = "linear";

  $: angleDisabled = type === 'radial';
</script>
<div class="row">
  <div class="col-sm-4">
    <!-- Colors and presets -->
        <ColorPicker label="Start Color" bind:color={startColor}/>
        <ColorPicker label="End Color"   bind:color={endColor}/>
  </div>
  <div class="col-sm-4">
    <!-- Gradient controls -->
    <div class="row mb-5">
      <div class="d-flex align-content-center">
        <input
          class      = "form-check-input me-1"
          type       = "radio"
          name       = "gradient-type"
          id         = "linear"
          value      = "linear"
          bind:group = {type}
        >

        <label class="form-check-label me-5" for="linear">Linear</label>

        <input
          class      = "form-check-input me-1"
          type       = "radio"
          name       = "gradient-type"
          id         = "radial"
          bind:group = {type}
          value      = "radial"
        >

        <label class="from-check-label" for="radial">Radial</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <label for="angle">Angle: {angle}</label>
        <input
          class      = "form-range"
          type       = "range"
          id         = "angle"
          bind:value = {angle}
          disabled   = {angleDisabled}>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <!-- Gradient Box -->
    <GradientBox
      bind:angle      = {angle}
      bind:startColor = {startColor}
      bind:endColor   = {endColor}
      bind:type       = {type}
    />
  </div>
</div>
