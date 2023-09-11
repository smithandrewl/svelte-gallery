<script lang="ts">
  export let horizontalLength: number;
  export let verticalLength:   number;
  export let blurRadius:       number;
  export let spreadRadius:     number;

  import CssBox from '$lib/components/css-box/css-box.svelte';

  function buildStyleValues(
    horizontalLength: number,
    verticalLength:   number,
    blurRadius:       number,
    spreadRadius:     number
  ) {
      return `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px`;
  }

  $: styleValues = buildStyleValues(
    horizontalLength,
    verticalLength,
    blurRadius,
    spreadRadius
  );

  $: css =
    "-webkit-box-shadow: " + styleValues + ";\n" +
    "-moz-box-shadow:    " + styleValues + ";\n" +
    "box-shadow:         " + styleValues + ";";
</script>

<div class="row">
  <div class="col-sm-6">
    <div id="shadow-box" style={css} class="mb-5"/>
  </div>
  <div class="col-sm-6">
    <CssBox css={css}/>
  </div>
</div>

<style>
  #shadow-box {
    border-style:     solid;
    border-width:     1px;
    border-color:     black;
    border-radius:    5px;
    height:           400px;
    width:            400px;
    background-color: #000080;
  }
</style>
