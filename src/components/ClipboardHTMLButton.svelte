<script lang="ts">
  import { convertedHtmlStore } from '../stores'
  let html = ''
  convertedHtmlStore.subscribe((convertedHtml) => (html = convertedHtml))

  function onClick() {
    alert('HTML copied to clipboard')
    navigator.clipboard.writeText(html)
  }
</script>

<button on:click={onClick}>Copy HTML to clipboard</button>
