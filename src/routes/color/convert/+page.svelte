
<script lang="ts">
  import {
    colorConversionStore,
    colorInfoStore,
    colorConversionCss
  } from "$lib/stores/color-conversion-store.ts";

  import { isValidHexColor } from "$lib/util/colors";

  let hex;

  import { onMount } from 'svelte';

  import {hexToHSL} from '$lib/util/colors';


  onMount(() => {
    hex = $colorConversionStore;
  });

  function updateColor() {
    if(isValidHexColor(hex)) {
      colorConversionStore.setColorFromHex(hex);
    } else {
      colorConversionStore.setNoColor();
    }

  }
</script>

<form>
  <div class="form-group">
    <label for="hue">Hex:</label>
    <input class="form-control" on:input={updateColor} bind:value={hex}/>
  </div>
</form>
