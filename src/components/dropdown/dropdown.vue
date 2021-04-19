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
<style scoped>
  .dropdown {
    min-width: 100px;
    position: relative;
  }
  .dropdown .btn {
    width: 100%;
    display: block;
    color: #fff;
    background: #2d8cf0;
    border: #2d8cf0;
    padding: 6px 10px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    margin: 0;
  }
  .dropdown-menu {
    min-width: 100px;
    margin: 0;
    padding: 0;
    background: #fff;
    box-shadow: 0 0 10px #ccc;
    margin-top: 10px;
    position: absolute;

  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-to  {
      opacity: 0
  }
</style>
