import './styles/index.css'
import Dropdown from './components/dropdown'
import DropdownItem from './components/dropdownItem'
import JButton from './components/button'
import JSplit from './components/split'
import JCard from './components/card'
import Collapse from './components/collapse'
import CollapseItem from './components/collapseItem'
const components = {
  Dropdown,
  DropdownItem,
  JButton,
  JSplit,
  JCard,
  Collapse,
  CollapseItem
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
