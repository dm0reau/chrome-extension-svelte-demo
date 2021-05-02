<script lang="ts">
  import { editorEnabledStore, markdownTextStore } from '../stores'
  import Button from './Button.svelte'

  let markdown = ''
  markdownTextStore.subscribe((markdownText) => (markdown = markdownText))

  function onClick() {
    alert('Markdown copied to clipboard')
    navigator.clipboard.writeText(markdown)
    editorEnabledStore.set(false)
  }
</script>

<Button {onClick}>Copy Markdown to clipboard</Button>
