import MarkdownEditor from "./MarkdownEditor.svelte";

const markdownEditor = new MarkdownEditor({
  target: document.body,
  props: {
    name: "world",
  },
});

export default markdownEditor;
