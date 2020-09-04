<template>
  <div id="popover" @click.stop="visible = true">
    <div ref="trigger">
      <slot name="trigger"></slot>
    </div>
    <div v-if="visible" ref="content" class="popover__dropdown" :style="dropdownStyles">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
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
      this.visible = false
      this.$nextTick(() => {
        this.visible = true
      })
    }
  },

  watch: {
    visible (value) {
      if (value) {
        setTimeout(() => {
          const { innerWidth, innerHeight } = window
          const { height: contentHeight, width: contentWidth } = this.$refs.content.getBoundingClientRect()
          const { left, top, width: triggerWidth, height: triggerHeight } = this.$refs.trigger.getBoundingClientRect()

          switch (this.placement) {
            default:
            case 'left': {
              let offsetLeft = left - contentWidth - this.offset
              offsetLeft = offsetLeft < 0 ? 0 : offsetLeft
              this.dropdownStyles = { left: `${offsetLeft}px`, top: `${top + triggerHeight - (contentHeight / 2)}px` }
              return
            }
            case 'right': {
              let offsetLeft = left + triggerWidth + this.offset
              offsetLeft = offsetLeft + triggerWidth > innerWidth ? innerWidth - this.offset - contentWidth : offsetLeft
              this.dropdownStyles = { left: `${offsetLeft}px`, top: `${top + triggerHeight - (contentHeight / 2)}px` }
              return
            }
            case 'top': {
              let offsetTop = top - triggerHeight - this.offset
              offsetTop = offsetTop - contentHeight < 0 ? 0 : offsetTop
              this.dropdownStyles = { left: `${left + (triggerWidth / 2) - (contentWidth / 2)}px`, top: `${offsetTop}px` }
              return
            }
            case 'bottom': {
              let offsetTop = Math.ceil(top) + triggerHeight * 1.4 + this.offset
              offsetTop = offsetTop + triggerHeight > innerHeight ? innerHeight - contentHeight - (triggerHeight / 1.3) - this.offset : offsetTop
              this.dropdownStyles = { left: `${left + (triggerWidth / 2) - (contentWidth / 2)}px`, top: `${offsetTop}px` }
            }
          }
        }, 0)
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
