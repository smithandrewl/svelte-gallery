<script>
  import GradientGenerator from "$lib/components/gradient-generator/gradient-generator.svelte";
</script>

<GradientGenerator/>

<svelte:head>
  <style>
    body {
      background: url(/gradient.png) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  </style>
</svelte:head>
