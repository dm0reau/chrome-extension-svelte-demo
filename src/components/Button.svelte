<script lang="ts">
  export let onClick: () => void
</script>

<button on:click={onClick}><slot /></button>

<style>
  button {
    font-family: inherit;
    margin-bottom: 1%;
    margin-right: 1%;
    background-color: #eee;
    font-size: 1.2rem;
    padding: 0.4rem;
    border: 2px dotted black;
  }
</style>
