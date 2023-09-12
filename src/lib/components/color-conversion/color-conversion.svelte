<script lang="ts">

  import {createColorConversionStore, createColorInfoStore, createColorInfoCSSStore} from "$lib/stores/color-conversion-store.ts";

  let colorConversionStore = createColorConversionStore();

  let colorInfoStore = createColorInfoStore(colorConversionStore);
  let css = createColorInfoCSSStore(colorInfoStore);

  import CssBox from '$lib/components/css-box/css-box.svelte';
</script>

<style>
  .form-control {
    width: 5em;
  }
</style>
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
        <div class="row">
          <label for="numRed">Red: </label> <input type="number" class="form-control form-control-sm"/>
        </div>
        <div class="row">
          <label for="numGreen">Green: </label> <input type="number" class="form-control form-control-sm"/>
          </div>
        <div class="row">
        <label for="numBlue">Blue: </label><input type="number" class="form-control form-control-sm"/>
          </div>
      </div>
    </div>

    <!-- HSL -->
    <div class="row">
      <div class="col-sm-2">
        <input id="rdioRgb" type="radio" name="type"/>
        <label for="rdioRgb">HSL</label>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <label for="numRed">Hue: </label> <input type="number" class="form-control form-control-sm"/>
        </div>
        <div class="row">
          <label for="numGreen">Saturation: </label> <input type="number" class="form-control form-control-sm"/>
        </div>
        <div class="row">
          <label for="numBlue">Lightness: </label><input type="number" class="form-control form-control-sm"/>
        </div>
      </div>
    </div>

  </div>
  <div class="col-sm-6">
    <div class="row">
      <h3>Color Details:</h3>

      <div class="row">
        <div class="col-sm-12">
          <b>Hex:</b> {$colorInfoStore.hex}
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <b>RGB:</b> {$colorInfoStore.rgb.red}, {$colorInfoStore.rgb.green}, {$colorInfoStore.rgb.blue}
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <b>HSL:</b> {$colorInfoStore.hsl.h}&deg;, {$colorInfoStore.hsl.s}&percnt;, {$colorInfoStore.hsl.l}&percnt;
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <CssBox css={$css}/>
    </div>
  </div>
</div>
