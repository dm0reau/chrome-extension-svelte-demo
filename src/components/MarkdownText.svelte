<script lang="ts">
  import { markdownTextStore } from '../stores'

  let value = '# Markdown editor'
  $: markdownTextStore.set(value)
</script>

<textarea bind:value />

<style>
  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    padding: 2%;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
  }
</style>
