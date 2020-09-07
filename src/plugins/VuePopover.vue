<template>
  <div id="popover" @click.stop="visible = true">
    <div ref="trigger">
      <slot name="trigger"></slot>
    </div>
    <div v-if="visible" ref="dropdown" class="popover__dropdown" :style="dropdownStyles">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<script>

import { getDropdownPosition } from '../utils'

export default {
  props: {
    placement: {
      type: String,
      default: 'left'
    },
    offset: {
      type: Number,
      default: 0
    }
  },

  data () {
    return {
      visible: false,
      dropdownStyles: null
    }
  },

  created () {
    window.addEventListener('resize', this.resizeWindow)
    document.addEventListener('click', this.hidePopover, 0)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.resizeWindow)
    document.removeEventListener('click', this.hidePopover)
  },

  methods: {
    hidePopover () {
      this.visible = false
    },
    resizeWindow () {
      if (!this.visible) return
      this.visible = false
      this.$nextTick(() => {
        this.visible = true
      })
    }
  },

  watch: {
    visible (value) {
      if (value) {
        this.$nextTick(() => {
          this.dropdownStyles = getDropdownPosition(this.$refs.trigger, this.$refs.dropdown, this.placement, this.offset)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.popover__dropdown {
  position: absolute;
  padding: 0 5px;
  border-radius: 5px;
  background: #f1f0f0;
  z-index: 2000;
}
</style>
