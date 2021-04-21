<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Collopse',
  props: {
    value: {
      type: String
    },
    accordion: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>
