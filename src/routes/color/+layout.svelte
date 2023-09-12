<script>
  import { page } from '$app/stores';
</script>

<h1>Color Tools</h1>

<nav class="nav mb-4">
  <a
    class:active = {$page.url.pathname === "/color"}
    class        = "nav-link active"
    href         = "/color/"
  >
    Color Picker
  </a>

</nav>

<slot/>

<style>
  .nav-link {
    color: dimgray;
  }
  .nav-link.active {
    color: black;
  }
</style>



