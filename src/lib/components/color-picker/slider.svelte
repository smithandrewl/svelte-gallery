<script lang="ts">
  export let value: number;
  export let color: string;
</script>

<div class="row">
  <div class="col-sm-12">
    <label for={color}>{color}({value})</label>
  </div>
</div>
<div class="row">
  <div class="col-sm-12">
    <input
      class      = "form-range"
      type       = "range"
      id         = {color}
      bind:value = {value}
      min        = "0"
      max        = "255"
    >
  </div>
</div>
