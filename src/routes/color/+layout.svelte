<script>
  import { page } from '$app/stores';
</script>

<h1>Color Tools</h1>

<nav class="nav mb-4">
  <a
    class:active = {$page.url.pathname === "/color"}
    class        = "nav-link"
    href         = "/color/"
  >
    Color Picker
  </a>

  <a
    class:active = {$page.url.pathname === "/color/convert"}
    class = "nav-link"
    href = "/color/convert"
    >Color Conversion</a>

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



