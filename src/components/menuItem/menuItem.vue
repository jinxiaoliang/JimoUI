<template>
    <li class="menu-item" :class="classes" @click="handleClick">
      <slot></slot>
    </li>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    handleClick () {
      this.$parent.$children.filter(item => item.name === this.name)[0].isActive = true
      this.$parent.$children.filter(item => item.name !== this.name).map(item => {
        item.isActive = false
        return item
      })
    }
  },
  computed: {
    classes: function () {
      return { 'menu-item-active': this.isActive }
    }
  },
  created () {
    const index = this.$parent.$children.findIndex(item => item.name === this.$parent.value)
    if (index > -1) {
      this.$parent.$children[index].isActive = true
    }
  }
}
</script>
<style scoped>
.menu-item {
  transition: all .5s;
  border-bottom: transparent;
  padding: 0 20px;
  font-size: 20px;
  font-weight: 400;
  height: 60px;
  box-sizing: border-box;
  cursor: pointer;
}
.menu-item-active, .menu-item:hover {
  color: #2d8cf0;
  border-bottom: 2px solid #2d8cf0 ;
}
</style>
