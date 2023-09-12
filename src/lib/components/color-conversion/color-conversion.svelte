<script lang="ts">

  import {createColorConversionStore, createColorInfoStore} from "$lib/stores/color-conversion-store.ts";

  let colorConversionStore = createColorConversionStore();

  let colorInfoStore = createColorInfoStore(colorConversionStore);

</script>

<div class="row">
  <div class="col-sm-6">
    <!-- Hex -->
    <div class="row">
      <div class="col-sm-2">
        <input id="rdioHex" type="radio" name="type"/>
        <label for="rdioHex">Hex</label>
      </div>
      <div class="col-sm-8"><input type="text"/></div>
    </div>

    <!-- RGB -->
    <div class="row">
      <div class="col-sm-2">
        <input id="rdioRgb" type="radio" name="type"/>
        <label for="rdioRgb">RGB</label>
      </div>
      <div class="col-sm-8">
        <label for="numRed">Red: </label> <input type="number" size="3"/>
        <label for="numGreen">Green: </label> <input type="number" size="3"/>
        <label for="numBlue">Blue: </label><input type="number" size="3"/>
      </div>
    </div>

    <!-- HSL -->
    <div class="row">
      <div class="col-sm-12">
        <input id="rdioHsl" type="radio" name="type"/>
        <label for="rdioHsl">HSL</label>
      </div>
    </div>

  </div>
  <div class="col-sm-6">
    <h3>Color Details:</h3>
    <pre>
      Hex: {$colorInfoStore.hex}
      RGB: {$colorInfoStore.rgb.red}, {$colorInfoStore.rgb.green}, {$colorInfoStore.rgb.blue}
      HSL: {$colorInfoStore.hsl.h}, {$colorInfoStore.hsl.s}, {$colorInfoStore.hsl.l}
    </pre>
  </div>
</div>
