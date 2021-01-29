<template>
  <!--暂时占位下 -->
  <div style="text-indent:-999px;height:20px"></div>
  <div class="a-menu" v-for="m in menu" :key="m.name">
    <ul class="menu-group">
      <li class="menu-group-title">{{ m.name }}</li>
      <div class="menu-group-list" v-if="m.children">
        <div
          class="menu-list-item"
          v-for="item in m.children"
          :key="item.name"
          @click="handleClickMenu(item)"
        >
          <div>
            <span class="menu-list-item-name">{{ item.name }}</span>
            <span class="menu-list-item-icon">{{ item.title }}</span>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { useAppNavigator } from '../navigator/navigator'
import { AppMenu, MENUS } from './menus'
export default defineComponent({
  name: 'AppMenu',
  props: ['defaultPath'],
  setup() {
    const na = useAppNavigator({ defaultPath: '' })
    const handleClickMenu = (menu: AppMenu) => {
      na.method.go(menu.page)
    }
    return {
      menu: MENUS,
      handleClickMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.menu-group {
  font-size: 14px;
  letter-spacing: 1px;
  color: #3f536e;
  &-title {
    padding-left: 24px;
    font-weight: 700;
    color: #1890ff;
  }
  &-list {
    padding: 16px 0;
    .menu-list-item {
      transition: all 0.3s linear;
      padding: 8px 34px;
      letter-spacing: 0;
      &-icon {
        color: #b6b6b6;
        font-size: 16px;
        margin-left: 1em;
      }
      &:hover {
        background-color: #f8f9ff;
        color: #1890ff;
        cursor: pointer;
      }
    }
  }
}
</style>
