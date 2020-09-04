<template>
  <div id="app">
    <div class="top-container">
      <VuePopover placement="bottom">
        <template v-slot:trigger>
          <button>Left button</button>
        </template>
        <template v-slot:content>
          <table class="table">
            <tr>
              <th>Column 1</th>
              <th>Column 2</th>
              <th>Column 3</th>
            </tr>
            <tr class="table__row" v-for="item in 5" :key="item">
              <td class="table__cell">text {{ item }}.1</td>
              <td class="table__cell">text {{ item }}.2</td>
              <td class="table__cell">text {{ item }}.3</td>
            </tr>
          </table>
        </template>
      </VuePopover>

      <VuePopover placement="bottom">
        <template v-slot:trigger>
          <button>Right key</button>
        </template>
        <template v-slot:content>
          <div class="form">
            <input />
            <button class="form__button">Submit</button>
          </div>
        </template>
      </VuePopover>
    </div>
  </div>
</template>

<script>

import VuePopover from './plugins/VuePopover'

export default {
  components: {
    VuePopover
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  width: 100%;
}

.top-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

button {
  cursor: pointer;
  padding: 10px;
}

input {
  height: 30px;
  margin: 15px;
}

.form {
  display: flex;
  align-items: center;

  &__button {
    height: 30px;
    padding: 5px;
  }
}

.table {
  border: 1px solid black;

  &__cell {
    padding: 5px;
    border: 1px solid #000;
    text-align: center;
  }
}
</style>
