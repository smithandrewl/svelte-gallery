<script lang="ts">
  export let value: number;
  export let caption: string;

  import {makeKebab} from "$lib/util/string.js"

  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher();

  function handleChange(e) {
    dispatch('valueChanged', {
      value: e.target.value
    });
  }
</script>

<div class="row">
  <div class="col-sm-12">
    <label for={makeKebab(caption) + '-slider'}>{caption}({value})</label>
  </div>
</div>
<div class="row">
  <div class="col-sm-12">
    <input
      class      = "form-range"
      type       = "range"
      id         = {makeKebab(caption) + '-slider'}
      bind:value = {value}
      min        = "0"
      max        = "200"
      on:input  = {handleChange}
      on:change = {handleChange}
    >
  </div>
</div>
