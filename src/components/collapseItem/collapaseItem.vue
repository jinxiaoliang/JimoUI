<template>
  <div class="collapse-item">
    <div class="title" @click="contentShow">
      <j-icon type="angle-right" :class="icons"></j-icon>
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
import JIcon from '../icon'
export default {
  name: 'CollopseItem',
  props: {
    name: {
      required: true,
      type: String
    }
  },
  components: {
    CollapseTransition,
    JIcon
  },
  data () {
    return {
      isShow: false
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
  computed: {
    icons: function () {
      let icons = ''
      if (this.isShow) {
        icons = 'icons-bottom'
      } else {
        icons = 'icons-right'
      }
      return icons
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
