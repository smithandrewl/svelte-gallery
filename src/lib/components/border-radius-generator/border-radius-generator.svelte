<script>
import CssBox from "$lib/components/css-box/css-box.svelte";

import BorderRadiusBox from "$lib/components/border-radius-generator/border-radius-box.svelte";

import BorderRadiusSlider from "$lib/components/border-radius-generator/slider.svelte";

import {
  createBorderRadiusCSSStore,
  createBorderRadiusGeneratorStore,
} from '$lib/stores/border-radius-generator-store';

const store = createBorderRadiusGeneratorStore();
const css = createBorderRadiusCSSStore(store);

</script>

<div class="row">
  <div class="col-sm-8">
    <div class="row">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-6">
              <div class="row">
                <BorderRadiusSlider bind:value={$store.topLeftRadius} caption="Top Left Radius"/>
              </div>
              <div class="row">
                <BorderRadiusSlider bind:value={$store.bottomLeftRadius} caption="Bottom Left Radius"/>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="row">
                <BorderRadiusSlider bind:value={$store.topRightRadius} caption="Top Right Radius"/>
              </div>
              <div class="row">
                <BorderRadiusSlider bind:value={$store.bottomRightRadius} caption="Bottom Right Radius"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3">
      <CssBox css={$css}/>
    </div>
  </div>
  <div class="col-sm-4">
    <BorderRadiusBox/>
  </div>
</div>
