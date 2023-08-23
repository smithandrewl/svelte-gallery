<script>
import ColorPicker from "$lib/components/color-picker/color-picker.svelte";
</script>

<ColorPicker></ColorPicker>

<svelte:head>
  <style>
    body {
      background: url(/colors.png) no-repeat center center fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }
  </style>
</svelte:head>

