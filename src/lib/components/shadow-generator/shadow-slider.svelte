<script lang="ts">
  export let name: string;
  export let value: number;
  export let min: string;
  export let max: string;
  import {makeKebab} from "$lib/util.js"
</script>
<div class="row">
  <div class="col-sm-12">
    <label for={makeKebab(name) + '-slider'}>{name}({value})</label>
  </div>
</div>
<div class="row">
  <input class="form-range" type="range" id={makeKebab(name) + '-slider'} min={min} max={max} bind:value={value}>
</div>
