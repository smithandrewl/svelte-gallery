<script lang="ts">
  import {
    createBorderRadiusCSSStore,
    createBorderRadiusGeneratorStore,
  } from '$lib/stores/border-radius-generator-store';

  const store = createBorderRadiusGeneratorStore();
  const css = createBorderRadiusCSSStore(store);
</script>

<style>
  .border-radius-box {
    padding-top:   100%;
    margin-left:   10%;
    border-style:  solid;
    border-width:  5px;
  }
</style>

<div class="border-radius-box" style={$css}>

</div>
