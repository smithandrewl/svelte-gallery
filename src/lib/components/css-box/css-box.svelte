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

<div  class="position-relative p-0 m-0">
  <!-- Gray Overlay -->
  <div id="copy-header" class="position-absolute bg-dark text-white d-flex justify-content-end" style="width: 100%; height: 1.5em; z-index: 1;">
    <small id="copy-icon" href="#" class="pe-2" on:click = {copyToClipboard}>
      <i class="bi bi-clipboard-fill"></i> Copy Code
    </small>
  </div>
    <pre class="p-0" style="z-index: 0; width: 100%;"><code class="mt-3" use:highlightCode={css} id="generatedCss">{css}</code></pre>
</div>

<style>
  #copy-icon {
    cursor: pointer;
  }
  code {
    border-radius: 5px;
  }

  pre {
    margin: 0;
  }

  #copy-header{
    border-radius: 5px;
  }
</style>
