<template>
  <div id="app">
    <button>Left button</button>

    <button>Right button</button>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: space-between;
}

  button {
    cursor: pointer;
    padding: 10px;
  }

</style>
