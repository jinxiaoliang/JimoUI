<template>
  <div class="j-input" @mouseover="handleMouseover" @mouseout="handleMouseout"  >
    <input
      :class="classes"
      :type="type"
      v-model="newValue"
      v-bind="$attrs"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <j-icon type="close" :class="icons" v-show="clearable && iconShow && hoverShow" @click="iconsClick"></j-icon>
    <j-icon type="eye" :class="icons" v-if="password && passwordShow" @click="passwordClick"></j-icon>
    <j-icon type="eye-slash" :class="icons" v-if="password && !passwordShow" @click="passwordClick"></j-icon>
    <j-icon :type="icon" :class="icons" v-if="icon" @click="passwordClick"></j-icon>
  </div>
</template>

<script>
import JIcon from '../icon'
export default {
  name: 'Input',
  props: {
    value: {
      type: [Number, String]
    },
    type: {
      type: String,
      default: 'text'
    },
    clearable: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'end'
    }
  },
  components: {
    JIcon
  },
  data () {
    return {
      focusActive: false,
      iconShow: false,
      hoverShow: false,
      passwordShow: false,
      typeShow: false
    }
  },
  methods: {
    handleFocus () {
      this.focusActive = true
    },
    handleBlur () {
      this.focusActive = false
    },
    handleMouseover () {
      this.hoverShow = true
    },
    handleMouseout () {
      this.hoverShow = false
    },
    iconsClick () {
      this.newValue = ''
    },
    passwordClick () {
      this.passwordShow = !this.passwordShow
    }
  },
  computed: {
    newValue: {
      get: function () {
        return this.value
      },
      set: function (val) {
        this.$emit('input', val)
      }
    },
    classes: function () {
      return [
        {
          'input-active': this.focusActive,
          'input-end': this.position === 'end',
          'input-start': this.position === 'start'
        }
      ]
    },
    icons: function () {
      return [
        { 'input-icons-end': this.position === 'end' },
        { 'input-icons-start': this.position === 'start' }
      ]
    }
  },
  watch: {
    value () {
      if (this.value) {
        this.iconShow = true
      } else {
        this.iconShow = false
      }
    },
    passwordShow () {
      if (this.passwordShow) {
        this.type = ''
      } else {
        this.type = 'password'
      }
    }
  }
}
</script>
