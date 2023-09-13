<script lang="ts">
  export let name:  string;
  export let value: number;
  export let min:   string;
  export let max:   string;

  import {makeKebab} from "$lib/util/string.js"
</script>
<div class="row">
  <div class="col-sm-12 d-flex justify-content-between">
    <label for={makeKebab(name) + '-slider'}>
      {name}({value})
    </label>
    <span>
      <input
        type       = "number"
        id         = {"txt-" + makeKebab(name)}
        bind:value = {value}
        style      = "width:65px"
      />&nbsp;px</span>
  </div>
</div>
<div class="row">
  <input
    class      = "form-range"
    type       = "range"
    id         = {makeKebab(name) + '-slider'}
    min        = {min}
    max        = {max}
    bind:value = {value}
  >
</div>
