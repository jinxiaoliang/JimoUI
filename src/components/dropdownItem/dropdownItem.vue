<template>
  <li class="dropitem" :class="{'is-disabled': disabled}">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  }
}
</script>
<style>
  .dropitem {
    list-style: none;
    margin: 2px 0;
    padding: 6px 0;
    cursor: pointer;
  }
  .dropitem:hover {
    background: rgb(245, 242, 242);
  }
  .dropitem-option.is-disabled * {
    color: #ccc;
    pointer-events: none;
    background-color: transparent;
  }
</style>
