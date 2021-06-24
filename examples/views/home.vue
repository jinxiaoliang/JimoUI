<template>
    <div style="text-align:center">
      <div style="width: 500px; margin: 10px auto">
          <h5>Icon图标</h5>
          <j-icon type="camera-retro"  color="red"></j-icon>
          <j-icon type="camera-retro"  color="red" times="2"></j-icon>
          <j-icon type="camera-retro"  color="red" times="3"></j-icon>
          <j-icon type="camera-retro"  color="red" times="4"></j-icon>
          <j-icon type="camera-retro"  color="red" times="5"></j-icon>
        </div>
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
          <j-button type="primary" icon="search"></j-button>
          <j-button type="primary" icon="search" shape="circle"></j-button>
          <j-button type="primary" icon="search">Primary</j-button>
          <j-button type="primary" loading></j-button>
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
        <div style="margin: 10px auto">
          <h5>菜单</h5>
          <Menu v-model="menuValue">
            <MenuItem name="1">
              <JIcon type="ambulance"></JIcon>
              菜单1
            </MenuItem>
            <MenuItem name="2">
              <JIcon type="address-card"></JIcon>
              菜单2
            </MenuItem>
            <MenuItem name="3">
              <JIcon type="address-card"></JIcon>
              菜单3
            </MenuItem>
            <MenuItem name="4">
              <JIcon type="grav"></JIcon>
              菜单4
            </MenuItem>
          </Menu>
        </div>
        <div style="height: 400px; margin: 10px auto">
          <h5>Input输入框</h5>
          <Input placeholder="Enter Something...." v-model="inputValue" clearable></Input>
          <Input placeholder="Enter Something...." type="password" password></Input>
          <Input placeholder="Enter Something...." icon="bath"></Input>
          <Input placeholder="Enter Something...." icon="bath" position="start"></Input>
          <Input placeholder="Enter Something...." maxlength="10" v-model="maxValue"></Input>
          <Input placeholder="Enter Something...." search v-model="search"></Input>
          <Input placeholder="Enter Something...." disabled></Input>
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
import JIcon from '@/components/icon'
import Menu from '@/components/menu'
import MenuItem from '@/components/menuItem'
import Input from '@/components/input'
export default {
  data () {
    return {
      value: 0.5,
      collapseValue: '2',
      menuValue: '1',
      inputValue: 'test--test--test',
      maxValue: '111111111',
      search: ''
    }
  },
  components: {
    Dropdown,
    DropdownItem,
    JButton,
    JSplit,
    JCard,
    Collapse,
    CollapseItem,
    JIcon,
    Menu,
    MenuItem,
    Input
  },
  methods: {
    onClick () {
    }
  }

}
</script>
