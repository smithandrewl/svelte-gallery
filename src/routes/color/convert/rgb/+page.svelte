<script lang="ts">
  import {
    colorConversionStore,
    colorInfoStore,
    colorConversionCss
  } from "$lib/stores/color-conversion-store.ts";
</script>

<form>
  <div class="form-group">
    <label for="red">Red:</label>
    <input type="number" class="form-control" id="red" min="0" max="255" placeholder="Enter Red value">
  </div>
  <div class="form-group mt-3">
    <label for="green">Green:</label>
    <input type="number" class="form-control" id="green" min="0" max="255" placeholder="Enter Green value">
  </div>
  <div class="form-group mt-3">
    <label for="blue">Blue:</label>
    <input type="number" class="form-control" id="blue" min="0" max="255" placeholder="Enter Blue value">
  </div>
</form>
