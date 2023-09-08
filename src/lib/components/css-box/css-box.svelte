<script>
  export let css;

  let showingMessage = false;
  let copySucceeded = false;

  $: showCopiedMessage = showingMessage && copySucceeded;
  $: showErrorMessage = showingMessage && !copySucceeded;

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

  function resetFlags() {
    showingMessage = false;
    copySucceeded = false;
  }
  function copyToClipboard() {
    navigator.clipboard.writeText(css)
      .then(() => {
        copySucceeded = true;
        showingMessage = true;

        setTimeout(() => {
          resetFlags();
        }, 2000);
      }).catch(err => {
      alert('Unable to copy text');
        copySucceeded = false;
        showingMessage = true;

        setTimeout(() => {
          resetFlags();
        }, 2000)
    });
  }
</script>

<div  class="position-relative p-0 m-0">
  <!-- Gray Overlay -->
  <div id="copy-header" class="position-absolute bg-dark text-white d-flex justify-content-between" style="width: 100%; height: 1.5em; z-index: 1;">
    <small class="ms-2">CSS</small>
    <small id="copy-icon" href="#" class="pe-2" on:click = {copyToClipboard}>

      {#if showingMessage === false}
      <i class="bi bi-clipboard-fill" ></i> Copy Code
      {/if}

      {#if showCopiedMessage}
        <i class="bi bi-check text-success"></i>Copied!
      {/if}

      {#if showErrorMessage}
        <i class="bi bi-x text-danger"></i>Failed to copy to clipboard.
      {/if}
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
