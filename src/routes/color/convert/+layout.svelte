<script lang="ts">
  import {
    colorConversionStore,
    colorInfoStore,
    colorConversionCss
  } from "$lib/stores/color-conversion-store.ts";

  import CssBox from '$lib/components/css-box/css-box.svelte';

  import { page } from '$app/stores';
</script>

<style>
  .form-control {
    width: 5em;
  }
</style>

<div class="row">
  <div class="col-sm-6">
    <div class="row">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a href="/color/convert" class:active = {$page.url.pathname === "/color/convert"} class="nav-link">Hex</a>
        </li>
        <li class="nav-item">
          <a href="/color/convert/rgb" class:active = {$page.url.pathname === "/color/convert/rgb"} class="nav-link">RGB</a>
        </li>
        <li class="nav-item">
          <a href="/color/convert/hsl" class:active = {$page.url.pathname === "/color/convert/hsl"} class="nav-link">HSL</a>
        </li>
      </ul>
    </div>

    <div class="row mt-3">
      <div class="col-sm-12">
        <slot/>
      </div>
    </div>
  </div>
  <div class="col-sm-6">


    <div class="row">
      <h3>Color Details:</h3>

      {#if $colorInfoStore && $colorInfoStore.rgb}
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
        <div class="row mt-5">
          <CssBox css={$colorConversionCss}/>
        </div>
      {:else}
        <div class="row">
          No color information available.
        </div>
      {/if}
    </div>


  </div>
</div>


