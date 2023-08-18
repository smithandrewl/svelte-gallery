<h1>CSS Tools</h1>

<nav class="nav mb-5">
  <a class="nav-link active" href="/css/">Color Picker</a>
  <a class="nav-link" href="/css/other">Other</a>
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
