<template>
  <div class="split-pane-wrapper" ref="splitOuter">
    <div
      class="pane pane-left"
      :style="{
        width: leftOffSetPercent,
        paddingRight: `${this.triggerWidth}px`
      }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="pane pane-trigger"
      :style="{ left: triggerLeft, width: `${this.triggerWidth}px` }"
      @mousedown="mousedownClick"
    >
      <span>-</span>
      <span>-</span>
      <span>-</span>
      <span>-</span>
    </div>
    <div
      class="pane pane-right"
      :style="{
        left: leftOffSetPercent,
        paddingLeft: `${this.triggerWidth}px`
      }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JSplit',
  props: {
    value: {
      type: Number,
      default: 0.3
    },
    max: {
      type: Number,
      default: 0.9
    },
    min: {
      type: Number,
      default: 0.1
    }
  },
  data () {
    return {
      leftOffSet: this.value,
      triggerWidth: 6,
      canMove: true
    }
  },
  computed: {
    leftOffSetPercent () {
      return `${this.leftOffSet * 100}%`
    },
    triggerLeft () {
      return `calc(${this.leftOffSet * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    mousedownClick () {
      document.addEventListener('mousemove', this.mousemoveHandleClick)
      document.addEventListener('mouseup', this.mouseupHandleClick)
      this.canMove = true
    },
    mousemoveHandleClick (e) {
      if (!this.canMove) return
      const outerLeft = this.$refs.splitOuter.getBoundingClientRect().left
      const outerWidth = this.$refs.splitOuter.getBoundingClientRect().width
      const currentLeft =
        (e.pageX - outerLeft + this.triggerWidth / 2) / outerWidth
      this.leftOffSet = currentLeft
      if (currentLeft < this.min) this.leftOffSet = this.min
      if (currentLeft > this.max) this.leftOffSet = this.max
    },
    mouseupHandleClick (e) {
      this.canMove = false
    }
  }
}
</script>
<style scoped>
.split-pane-wrapper {
  min-width: 300px;
  min-height: 200px;
  width: 100%;
  height: 100%;
  position: relative;
  text-align: left;
  border: 1px solid #ccc;
}
.split-pane-wrapper .pane {
  height: 100%;
  position: absolute;
  top: 0;
}
.split-pane-wrapper .pane-left {
  height: 100%;
  width: 20%;
  background: #fff;
  word-break: break-all;
}
.split-pane-wrapper .pane-right {
  height: 100%;
  right: 0;
  bottom: 0;
  left: 20%;
  background: #fff;
}
.split-pane-wrapper .pane-trigger {
  height: 100%;
  background: #f8f8f9;
  border: 1px solid #dcdee2;
  border-top: none;
  border-bottom: none;
  z-index: 99;
  cursor: col-resize;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.split-pane-wrapper .pane-trigger span {
  display: block;
  color: #ccc;
  text-align: center;
}
</style>
