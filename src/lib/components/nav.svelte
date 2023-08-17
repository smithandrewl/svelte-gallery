<script>

  import { page } from '$app/stores';

  let menuVisible = false;

  function toggleMenu() {
    menuVisible = !menuVisible;
  }

</script>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Svelte Gallery</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
      on:click={toggleMenu}
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav" class:show={menuVisible}>
      <ul class="navbar-nav">
          <li class="nav-item">
            <a class:active={$page.url.pathname === '/'} class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class:active={$page.url.pathname === '/color-picker'} class="nav-link" href="/color-picker">Color Picker</a>
          </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  .nav-item > span {
    cursor: pointer;
  }
</style>
