<script>
  import MarkdownText from './MarkdownText.svelte'
  import MarkdownPreview from './MarkdownPreview.svelte'
  import ClipboardHTMLButton from './ClipboardHTMLButton.svelte'
  import ClipboardMarkdownButton from './ClipboardMarkdownButton.svelte'
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
      <ClipboardMarkdownButton />
      <ClipboardHTMLButton />
    </div>
  </div>
</main>

<style>
  main {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .editor {
    background-color: white;
    margin-top: 5%;
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
    justify-content: flex-end;
    padding-right: 2%;
  }
</style>
