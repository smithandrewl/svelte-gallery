<script lang="ts">
  export let name: string;
  export let value: number;

  import {makeKebab} from "$lib/util.js"
</script>
<div class="row">
  <div class="col-sm-12">
    <label for={makeKebab(name) + '-slider'}>{name}</label>
  </div>
</div>
<div class="row">
  <input class="form-range" type="range" id={makeKebab(name) + '-slider'} min="0" max="255" bind:value={value}>
</div>
