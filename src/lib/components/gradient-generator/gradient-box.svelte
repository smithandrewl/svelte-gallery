<script lang="ts">
  import {getContext} from 'svelte';
  import type {Readable} from 'svelte/store';

  export let startColor: string;
  export let endColor:   string;
  export let angle:      number;
  export let type:       string;

  $: isRadial = type === 'radial';

  $: linearStyle = `background:linear-gradient(${angle}deg,${startColor} 0%, ${endColor} 100%)`;
  $: radialStyle = `background:radial-gradient(circle, ${startColor} 0%, ${endColor} 100%)`;

  $: style = isRadial ? radialStyle: linearStyle;

  const cssStore: Readable<string> = getContext('gradientGeneratoreCSSStore');

</script>

<style>
  .gradient-box {
    width:100%;
    padding-top:100%;
    border-style: solid;
    border-width: 5px;
  }
</style>

<div class="gradient-box" style={$cssStore}>

</div>
