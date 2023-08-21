<script lang="ts">

  import ColorPicker from '$lib/components/misc/color-picker.svelte';

  let startColor = "#000000";
  let endColor = "#000000";
</script>
<div class="row">
  <div class="col-sm-4">
    <!-- Colors and presets -->
        <ColorPicker label="Start Color" bind:color={startColor}/>
        <ColorPicker label="End Color" bind:color={endColor}/>
  </div>
  <div class="col-sm-4">
    <!-- Gradient controls -->
    <div class="row">
      <div class="d-flex align-content-center">
        <input class="form-check-input me-1" type="radio" name="gradient-type" id="linear" value="linear">
        <label class="form-check-label me-5" for="linear">Linear</label>
        <input class="form-check-input me-1" type="radio" name="gradient-type" id="radial" value="radial">
        <label class="from-check-lable" for="radial">Radial</label>
      </div>
    </div>
  </div>

  <div class="col-sm-4">
    <!-- Gradient Box -->
  </div>
</div>
