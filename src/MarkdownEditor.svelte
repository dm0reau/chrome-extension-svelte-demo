<script>
  import MarkdownText from "./MarkdownText.svelte";
  import MarkdownPreview from "./MarkdownPreview.svelte";
</script>

<main>
  <div class="editor">
    <div class="pane">
      <MarkdownText />
    </div>
    <div class="pane">
      <MarkdownPreview />
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
    display: flex;
    margin-top: 8%;
    width: 65%;
    min-height: 50rem;
    box-shadow: 3px 5px 17px -2px rgba(0, 0, 0, 0.81);
    border-radius: 15px;
  }

  .pane {
    flex: 50%;
    padding: 4%;
  }

  .pane:last-child {
    border-left: 2px solid black;
  }
</style>
