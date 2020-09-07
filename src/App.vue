<template>
  <div id="app">
    <VuePopover placement="top">
      <template v-slot:trigger>
        <button class="button">Left button</button>
      </template>
      <template v-slot:dropdown>
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

    <VuePopover placement="right">
      <template v-slot:trigger>
        <button class="button">Right key</button>
      </template>
      <template v-slot:dropdown>
        <div class="form">
          <input />
          <button class="form__button">Submit</button>
        </div>
      </template>
    </VuePopover>
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
  justify-content: space-between;
  height: 100vh;
  width: 100%;
}

.button {
  cursor: pointer;
  padding: 10px;
  color: #fff;
  background: #1493f6;
  border: none;
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
