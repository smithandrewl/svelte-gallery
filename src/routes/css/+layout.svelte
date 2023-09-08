<script>
  import { page } from '$app/stores';
</script>

<h1>CSS Tools</h1>

<nav class="nav mb-4">
  <a
    class:active = {$page.url.pathname === "/css"}
    class        = "nav-link active"
    href         = "/css/"
  >
    Color Picker
  </a>

  <a
    class:active= {$page.url.pathname === "/css/shadow-generator"}
    class       = "nav-link"
    href        = "/css/shadow-generator"
  >
    Shadow Generator
  </a>

  <a
    class:active= {$page.url.pathname === "/css/gradient-generator"}
    class       = "nav-link"
    href        = "/css/gradient-generator"
  >
    Gradient Generator
  </a>

  <a
    class:active = {$page.url.pathname === "/css/border-radius-generator"}
    class        = "nav-link"
    href         = "/css/border-radius-generator"
  >
    Border Radius Generator
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



