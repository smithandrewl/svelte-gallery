
<script lang="ts">
  import Slider from '$lib/components/color-picker/slider.svelte'
  import CssBox from '$lib/components/css-box/css-box.svelte';

  import {
    createColorPickerCSSStore,
    createColorPickerDetailedStore,
    createColorPickerStore
  } from '$lib/stores/color-picker-store';

  let colorPickerStore     = createColorPickerStore();
  let colorRepresentations = createColorPickerDetailedStore(colorPickerStore);
  let css                  = createColorPickerCSSStore(colorPickerStore);
</script>

<div class="row">
  <div class="col-sm-6">
    <div class="row">
      <div class="col-sm-12">
        <div class="card mb-3">
          <div class="card-body">
            <Slider color="Red"   bind:value={$colorPickerStore.red}/>
            <Slider color="Green" bind:value={$colorPickerStore.green}/>
            <Slider color="Blue"  bind:value={$colorPickerStore.blue}/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h2>{$colorRepresentations.rgb}</h2>
            <div
              class = "color-box"
              style ={$css}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <CssBox css={$css}/>
  </div>
</div>

<style>
  .sliders {
    width: 400px;
  }

  .color-box {
    height:        400px;
    width:         400px;
    border-style:  solid;
    border-width:  10px;
    border-radius: 5px;
  }
</style>
