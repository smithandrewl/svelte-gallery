<script>
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Nav from '$lib/components/nav.svelte';

  import '../global.css';
</script>

<Nav/>

<main class="container">
  <slot/>
</main>
