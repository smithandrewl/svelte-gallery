<script lang="ts">

  import {createColorConversionStore, createColorInfoStore} from "$lib/stores/color-conversion-store.ts";

  let colorConversionStore = createColorConversionStore();

  let colorInfoStore = createColorInfoStore(colorConversionStore);

</script>

<div class="row">
  <div class="col-sm-6"></div>
  <div class="col-sm-6">
    <h3>Color Details:</h3>
    <pre>
      Hex: {$colorInfoStore.hex}
      RGB: {$colorInfoStore.rgb.red}, {$colorInfoStore.rgb.green}, {$colorInfoStore.rgb.blue}
      HSL: {$colorInfoStore.hsl.h}, {$colorInfoStore.hsl.s}, {$colorInfoStore.hsl.l}
    </pre>
  </div>
</div>
