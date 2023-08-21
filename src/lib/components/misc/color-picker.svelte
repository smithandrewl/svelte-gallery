
<script lang="ts">
  import {makeKebab} from '$lib/util';

  export let label: string;
  export let color: string;

  $: id = makeKebab(label) + "-color"
</script>

<div class="mb-4">
  <label for={id} class="form-label">{label}</label>
  <div class="d-flex align-items-center">
    <input
      class      = "form-control form-control-color me-2"
      type       = "color"
      id         = {id}
      bind:value = {color}
    >
    <div>{color}</div>
  </div>
</div>
