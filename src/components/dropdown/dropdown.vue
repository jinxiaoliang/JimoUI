<template>
  <div class="dropdown">
  <button class="btn" @click.prevent="isShowFn" ref="dropdownLink">{{ title }}</button>
  <transition name="fade">
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isShow" ref="dropdownRef">
      <slot></slot>
    </ul>
  </transition>
  </div>
</template>
<script>
export default {
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    isShowFn () {
      this.isShow = !this.isShow
    },
    handler (e) {
      if (this.$refs.dropdownRef) {
        if (e.target === this.$refs.dropdownLink) {
          this.isShow = true
        } else if (this.$refs.dropdownRef.contains(e.target)) {
          this.$emit('on-click', e.target.innerHTML)
          this.isShow = false
        } else {
          this.$emit('on-clickoutside')
          this.isShow = false
        }
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.handler)
  },
  unmounted () {
    document.addEventListener('click', this.handler)
  }
}
</script>
