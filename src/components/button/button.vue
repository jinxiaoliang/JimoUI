<template>
  <button
  :class="classes"
  :disabled="disabled"
  @click="handleClick"
  >
  <JICon :type="icon"></JICon>
   <span><slot></slot></span>
  </button>
</template>

<script>
import JICon from '../icon'
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
    },
    icon: {
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: ''
    }
  },
  components: {
    JICon
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  },
  computed: {
    classes () {
      return [
        {
          [`btn-${this.type}`]: this.type,
          'btn-disabled': this.disabled,
          [`btn-${this.shape}`]: this.shape
        },
        'btn'
      ]
    }
  }
}
</script>
