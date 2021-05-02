<script lang="ts">
  async function onClick() {
    const tabs = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    })
    const activeTab = tabs[0]
    chrome.tabs.sendMessage(activeTab.id, 'toggle')
  }
</script>

<main>
  <button on:click={onClick}>Toggle editor</button>
</main>

<style>
  main {
    width: 100px;
    height: 80px;
    padding: 10px;
    padding-top: 30px;
  }

  button {
    font-size: 1.2rem;
  }
</style>
