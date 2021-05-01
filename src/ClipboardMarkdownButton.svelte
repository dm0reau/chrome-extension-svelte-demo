<script lang="ts">
  import { markdownTextStore } from './stores'
  let markdown = ''
  markdownTextStore.subscribe((markdownText) => (markdown = markdownText))

  function onClick() {
    alert('Markdown copied to clipboard')
    navigator.clipboard.writeText(markdown)
  }
</script>

<button on:click={onClick}>Copy Markdown to clipboard</button>

<style>
  button {
    margin-right: 1%;
  }
</style>
