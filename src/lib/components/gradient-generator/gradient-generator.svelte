<script lang="ts">
  let startColor = "#000000";
  let endColor = "#000000";
</script>
<div class="row">
  <div class="col-sm-4">
    <!-- Colors and presets -->

    <div class="row">
      <div class="col-sm-12 mb-4">
        <label for="start-color" class="form-label">Start Color</label>
        <div class="d-flex align-items-center">
          <input class="form-control form-control-color me-2" type="color" id="start-color" bind:value={startColor}>
          <div>{startColor}</div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <label for="end-color" class="form-label">End Color</label>
        <div class="d-flex align-items-center">
          <input class="form-control form-control-color me-2" type="color" id="end-color" bind:value={endColor}>
          <div>{endColor}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <!-- Gradient controls -->
  </div>

  <div class="col-sm-4">
    <!-- Gradient Box -->
  </div>
</div>
