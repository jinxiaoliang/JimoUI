import Dropdown from './components/dropdown'
import DropdownItem from './components/dropdownItem'
import JButton from './components/button'
import Jsplit from './components/split'
import Jcard from './components/card'
const components = {
  Dropdown,
  DropdownItem,
  JButton,
  Jsplit,
  Jcard
}
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components
}
