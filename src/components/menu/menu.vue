<template>
  <ul :class="classes">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    value: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'level'
    }
  },
  data () {
    return {}
  },
  computed: {
    classes: function () {
      return [
        'menu',
        `menu-${this.mode}`
      ]
    }
  }
}
</script>
