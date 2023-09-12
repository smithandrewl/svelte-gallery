<script lang="ts">

  import {createColorConversionStore, createColorInfoStore} from "$lib/stores/color-conversion-store.ts";

  let colorConversionStore = createColorConversionStore();

  let colorInfoStore = createColorInfoStore(colorConversionStore);

</script>

<pre>

  Hex: {$colorInfoStore.hex}
  RGB: {$colorInfoStore.rgb.red}, {$colorInfoStore.rgb.green}, {$colorInfoStore.rgb.blue}
  HSL: {$colorInfoStore.hsl.h}, {$colorInfoStore.hsl.s}, {$colorInfoStore.hsl.l}
</pre>
