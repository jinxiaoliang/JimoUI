<template>
  <i :class="classes" :style="styles" @click="handleClick"></i>
</template>

<script>
export default {
  name: 'JIcon',
  props: {
    type: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    times: {
      type: String,
      default: 'lg'
    }
  },
  computed: {
    classes: function () {
      return [
        'fa',
        {
          [`fa-${this.type}`]: this.type !== '',
          [`fa-${this.times}x`]: this.times !== ''
        }
      ]
    },
    styles: function () {
      const style = {}
      if (this.size) {
        style['font-size'] = `${this.size}px`
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
