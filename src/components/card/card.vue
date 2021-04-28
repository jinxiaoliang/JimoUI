<template>
  <div class="card"
    :style="[{border: (border ? '1px solid #ccc' : 'none')}, {boxShadow:(shadow ? '' : '')}]"
    :class="{'card-pointer': !shadow}"
  >
    <div class="card-title" v-if="$slots.title || $slots.extra">
      <slot name="title"></slot>
      <slot name="extra"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JCard',
  props: {
    border: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  }
}
</script>
