<script>
  import MarkdownText from './MarkdownText.svelte'
  import MarkdownPreview from './MarkdownPreview.svelte'
  import ClipboardButton from './ClipboardButton.svelte'
</script>

<main>
  <div class="editor">
    <div class="panes">
      <div class="pane">
        <MarkdownText />
      </div>
      <div class="pane">
        <MarkdownPreview />
      </div>
    </div>
    <div class="buttons">
      <ClipboardButton />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .editor {
    margin-top: 8%;
    width: 65%;
    box-shadow: 3px 5px 17px -2px rgba(0, 0, 0, 0.81);
    border-radius: 15px;
  }

  .panes {
    display: flex;
    min-height: 50rem;
  }

  .pane {
    flex: 50%;
    padding: 4%;
  }

  .pane:last-child {
    border-left: 2px solid black;
  }

  .buttons {
    display: flex;
    align-items: flex-end;
    justify-content: end;
    padding-right: 2%;
  }
</style>
