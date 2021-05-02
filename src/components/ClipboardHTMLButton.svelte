<script lang="ts">
  import { convertedHtmlStore } from '../stores'
  import Button from './Button.svelte'

  let html = ''
  convertedHtmlStore.subscribe((convertedHtml) => (html = convertedHtml))

  function onClick() {
    alert('HTML copied to clipboard')
    navigator.clipboard.writeText(html)
  }
</script>

<Button {onClick}>Copy HTML to clipboard</Button>
