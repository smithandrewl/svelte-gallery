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
</script>
<h2>Css</h2>
<pre>
  <code use:highlightCode={css} id="generatedCss">{css}</code>
</pre>
