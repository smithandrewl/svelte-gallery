
<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Nav from '$lib/components/nav.svelte';

  import '../global.css';
</script>

<Nav/>

<main class="container bg-body-secondary">
  <div class="mt-3">
  <slot/>
  </div>
</main>

<svelte:head>
  <style>
    body {
      background-color: #560062 !important;
    }
  </style>
</svelte:head>


