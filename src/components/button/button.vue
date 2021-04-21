<template>
  <button
  :class="[
    type === 'primary' ? 'btn-primary' : '',
    type === 'dashed' ? 'btn-dashed' : '',
    type === 'info' ? 'btn-info' : '',
    type === 'success' ? 'btn-success' : '',
    type === 'warning' ? 'btn-warning' : '',
    type === 'error' ? 'btn-error' : '',
    disabled ? 'btn-disabled' : ''
  ]"
  class="btn"
  :disabled="disabled"
  @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'JButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>
