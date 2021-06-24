<template>
  <div :class="classes" ref="splitOuter">
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
    },
    classes () {
      return [
        'split-pane-wrapper'
      ]
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
