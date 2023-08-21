<script lang="ts">
  export let startColor: string;
  export let endColor:   string;
  export let angle:      number;
  export let type:       string;

  $: isRadial = type === 'radial';

  $: linearStyle = `background:linear-gradient(${angle}deg,${startColor} 0%, ${endColor} 100%)`;
  $: radialStyle = `background:radial-gradient(circle, ${startColor} 0%, ${endColor} 100%)`;

  $: style = isRadial ? radialStyle: linearStyle;
</script>

<style>
  .gradient-box {
    width:100%;
    padding-top:100%;
  }
</style>

<div class="gradient-box" style={style}>

</div>
