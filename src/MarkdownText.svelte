<script lang="ts">
  import { markdownTextStore } from './stores'

  let value = '# Markdown editor'
  $: markdownTextStore.set(value)
</script>

<textarea bind:value />

<style>
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
  }
</style>
