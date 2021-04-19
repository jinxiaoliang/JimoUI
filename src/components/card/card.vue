<template>
  <div class="card"
    :style="[{border: (border ? '1px solid #ccc' : 'none')}, {boxShadow:(shadow ? '' : '')}]"
    :class="{'card-pointer': !shadow}"
  >
    <div class="title">
      <slot name="title"></slot>
      <slot name="extra"></slot>
    </div>
    <div class="content">
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

<style scoped>
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
    padding: 0
  }
  ul, li {
    list-style: none;
  }
  .card {
    min-width: 200px;
    background: #fff;
    border: 1px solid #ccc;
    transition: .5s;
  }
  .card-pointer {
    pointer-events: none;
  }
  .title {
    border-bottom: 1px solid #ccc;
    padding: 20px;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    padding: 20px;
    text-align: left;
  }
  .card:hover {
    box-shadow: 0 0 10px #ccc;
  }
</style>
