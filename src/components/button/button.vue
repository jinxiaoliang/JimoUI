<template>
  <button
  :class="classes"
  :disabled="disabled"
  @click="handleClick"
  >
  <JICon :type="icon"></JICon>
  <JICon :type="loading ? 'circle-o-notch' : ''" :class="iconClass" v-show="loading"></JICon>
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
    },
    loading: {
      type: Boolean,
      default: false
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
          'btn-circle': this.shape === 'circle',
          'btn-icon': Object.keys(this.$slots).length && this.icon
        },
        'btn'
      ]
    },
    iconClass () {
      return [
        { 'btn-loading': this.loading }
      ]
    }
  },
  created () {
  }
}
</script>
