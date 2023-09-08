
<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Nav from '$lib/components/nav.svelte';

  import '../global.css';
  import "bootstrap-icons/font/bootstrap-icons.css";

</script>

<Nav/>

<main class="container bg-light">
  <div class="mt-3">
  <slot/>
  </div>
</main>

<svelte:head>
  <style>
    body {
      background-color: rgb(50, 50, 50) !important;
    }
  </style>
</svelte:head>


