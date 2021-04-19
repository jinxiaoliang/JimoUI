<template>
  <div class="collapse-item">
    <div class="title" @click="contentShow">
      <slot></slot>
    </div>
    <collapse-transition>
        <div class="content" v-show="isShow">
          <slot name="content"></slot>
        </div>
    </collapse-transition>

  </div>

</template>

<script>
import CollapseTransition from '../../base/collapse-transition.js'
export default {
  name: 'CollopseItem',
  props: {
    name: {
      required: true,
      type: String
    }
  },
  components: {
    CollapseTransition
  },
  data () {
    return {
      isShow: false,
      currentShow: ''
    }
  },
  methods: {
    contentShow () {
      const that = this
      this.isShow = !this.isShow
      if (this.$parent.accordion) {
        this.$parent.$children.filter(item => item.name !== that.name).map(item => {
          item.isShow = false
          return item
        })
      }
    }
  },
  created () {
    const index = this.$parent.$children.findIndex(item => item.name === this.$parent.value)
    if (index > -1) {
      this.$parent.$children[index].isShow = true
    }
  }
}
</script>

<style scoped>
  .collapse-item {
    background: #ccc;
  }
  .collapse-item .title::before {
    content: "\003E";
    font-size: 16px;
  }
  .collapse-item .title {
    padding: 10px;
    text-align: left;
    cursor: pointer;
  }
  .collapse-item .content {
    background: #fff;
    padding: 10px;
    text-align: left;
  }
</style>
