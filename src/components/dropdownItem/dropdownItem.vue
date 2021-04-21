<template>
  <li class="dropdown-item" :class="{'is-disabled': disabled}">
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
