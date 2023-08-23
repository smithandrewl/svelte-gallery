<script>
  import ShadowGenerator from "$lib/components/shadow-generator/shadow-generator.svelte"
</script>

<ShadowGenerator></ShadowGenerator>

<svelte:head>
  <style>
    body {
      background: url(/shadows.png) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  </style>
</svelte:head>
