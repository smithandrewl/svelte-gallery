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
  </div>

  <div class="col-sm-4">
    <!-- Gradient Box -->
  </div>
</div>
