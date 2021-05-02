<script lang="ts">
  import { convertedHtmlStore } from '../stores'

  let html = ''

  convertedHtmlStore.subscribe((convertedHtml) => {
    html = convertedHtml
  })
</script>

<div>{@html html}</div>
