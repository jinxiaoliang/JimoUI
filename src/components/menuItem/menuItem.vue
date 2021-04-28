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
    },
    to: [Object, String]
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
      this.to instanceof Object ? this.$router.push(this.to.path || this.to.name) : this.$router.push(this.to)
    }
  },
  computed: {
    classes: function () {
      return [
        { [`menu-item-${this.$parent.mode}-active`]: this.isActive },
        `menu-item-${this.$parent.mode}`
      ]
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
