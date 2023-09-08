<script lang="ts">
  import {getContext} from 'svelte';
  import type {Readable} from 'svelte/store';

  export let startColor: string;
  export let endColor:   string;
  export let angle:      number;
  export let type:       string;

  const cssStore: Readable<string> = getContext('gradientGeneratoreCSSStore');

</script>

<style>
  .gradient-box {
    padding-top:100%;
    margin-left:10%;
    border-style: solid;
    border-width: 5px;
    border-radius: 5px;
  }
</style>

<div class="gradient-box" style={$cssStore}>

</div>
