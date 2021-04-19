<template>
    <div style="text-align:center">
      <div style="width: 100px; margin: 10px auto">
          <h5>下拉菜单</h5>
          <dropdown title="下拉菜单">
            <dropdown-item>下拉菜单1</dropdown-item>
            <dropdown-item>下拉菜单2</dropdown-item>
            <dropdown-item>下拉菜单3</dropdown-item>
            <dropdown-item>下拉菜单4</dropdown-item>
          </dropdown>
        </div>
        <div>
          <h5>按钮</h5>
          <j-button>Default</j-button>
          <j-button type="primary">Primary</j-button>
          <j-button type="dashed">Dashed</j-button>
          <j-button type="info">Info</j-button>
          <j-button type="success">Success</j-button>
          <j-button type="warning">Warning</j-button>
          <j-button type="error">Error</j-button>
          <j-button disabled type="warning">Disabled</j-button>
        </div>
        <div style="width: 500px; margin: 10px auto">
          <h5>分割面板</h5>
          <j-split v-model="value">
            <div slot="left">我是左边</div>
            <div slot="right">我是右边</div>
          </j-split>
        </div>
        <div style="width: 500px; margin: 10px auto">
          <h5>卡片</h5>
          <j-card>
            <p slot="title" @click="onClick">卡片title</p>
            <div>
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
              <p>card content</p>
            </div>
          </j-card>
        </div>
        <div style="width: 500px; margin: 10px auto">
          <h5>折叠面板</h5>
          <collapse v-model="collapseValue">
            <collapse-item name="1">
              史蒂夫·乔布斯
              <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </collapse-item>
            <collapse-item name="2">
              史蒂夫·乔布斯
              <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </collapse-item>
            <collapse-item name="3">
              史蒂夫·乔布斯
              <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
            </collapse-item>
          </collapse>
        </div>
    </div>
</template>

<script>
import Dropdown from '@/components/dropdown'
import DropdownItem from '@/components/dropdownItem'
import JButton from '@/components/button'
import JSplit from '@/components/split'
import JCard from '@/components/card'
import Collapse from '@/components/collapse'
import CollapseItem from '@/components/collapseItem'
export default {
  data () {
    return {
      value: 0.5,
      collapseValue: '2'
    }
  },
  components: {
    Dropdown,
    DropdownItem,
    JButton,
    JSplit,
    JCard,
    Collapse,
    CollapseItem
  },
  methods: {
    onClick () {
    }
  }

}
</script>

<style>
  button {
    margin: 0 4px;
  }
  p {
    margin: 0;
    padding: 0
  }
</style>
