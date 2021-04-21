<template>
  <ul class="menu">
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
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .menu {
    width: 100%;
    min-width: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    line-height: 60px;
    z-index: 999;
  }
</style>
