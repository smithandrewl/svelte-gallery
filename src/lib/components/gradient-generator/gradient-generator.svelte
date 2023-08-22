<script lang="ts">

  import ColorPicker from '$lib/components/misc/color-picker.svelte';
  import GradientBox from '$lib/components/gradient-generator/gradient-box.svelte';

  import { setContext } from 'svelte';
  import {
    createGradientGeneratorStore,
  } from '$lib/stores/gradient-generator-store';

  const store = createGradientGeneratorStore();

  setContext('gradientGeneratorStore', store);

  $: angleDisabled = $store.type === 'radial';
</script>
<div class="row">
  <div class="col-sm-4">
    <!-- Colors and presets -->
        <ColorPicker label="Start Color" bind:color={$store.startColor} />
        <ColorPicker label="End Color"   bind:color={$store.endColor}/>
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
          bind:group = {$store.type}
        >

        <label class="form-check-label me-5" for="linear">Linear</label>

        <input
          class      = "form-check-input me-1"
          type       = "radio"
          name       = "gradient-type"
          id         = "radial"
          bind:group = {$store.type}
          value      = "radial"
        >

        <label class="from-check-label" for="radial">Radial</label>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <label for="angle">Angle: {$store.angle}</label>
        <input
          class      = "form-range"
          type       = "range"
          id         = "angle"
          bind:value = {$store.angle}
          disabled   = {angleDisabled}
        >
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <!-- Gradient Box -->
    <GradientBox
      bind:angle      = {$store.angle}
      bind:startColor = {$store.startColor}
      bind:endColor   = {$store.endColor}
      bind:type       = {$store.type}
    />
  </div>
</div>
