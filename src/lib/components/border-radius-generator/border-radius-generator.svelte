<script>
import CssBox from "$lib/components/css-box/css-box.svelte";

import BorderRadiusBox from "$lib/components/border-radius-generator/border-radius-box.svelte"

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
            </div>
            <div class="col-sm-6">

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
