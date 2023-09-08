<script>
  export let css;

  function highlightCode(node, content) {
    hljs.highlightElement(node);

    return {
      update(newContent) {
        if (newContent !== content) {
          content = newContent;
          node.textContent = content;
          hljs.highlightElement(node);
        }
      }
    };
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(css).catch(err => {
      alert('Unable to copy text');
    });
  }
</script>
<h2>Css</h2>

<pre class="p-0"><code use:highlightCode={css} id="generatedCss">{css}</code></pre>

<div class="p-0 d-flex justify-content-center">
  <button
    class    = "btn btn-success"
    on:click = {copyToClipboard}
  >
    <i class="bi bi-clipboard-fill"></i>&nbsp; Copy
  </button>
</div>

<style>
  code {
    border-radius: 5px;
  }
</style>
