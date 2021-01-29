<template>
  <div class="app-home">
    <div class="app-head">
      <div style="margin-left:20px;font-size:16px;color:rgba(32,175,255)">
        UI 组件库
      </div>
    </div>
    <div class="app-body">
      <div class="app-body-wrapper" style="padding-left:300px">
        <div class="app-menu">
          <h1>左侧菜单栏</h1>
        </div>
        <div class="app-content-nav-list-wrapper">
          1. sdafsdfas
        </div>
        <div class="app-content">
          <app-navigator defaultPath="/normal/button">
            <app-navigator-page></app-navigator-page>
          </app-navigator>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AppNavigator } from './components/navigator/app-navigator'
import AppNavigatorPage from './components/navigator/app-navigator-page'
export default defineComponent({
  name: 'App',
  components: {
    AppNavigator,
    AppNavigatorPage
  }
})
</script>

<style lang="scss" scoped>
$headSize: 60px;
$menuSize: 300px;
.app-home {
  .app-head {
    position: fixed;
    height: $headSize;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 2px 8px #f0f1f2;
    box-sizing: border-box;
    line-height: $headSize;
  }

  .app-body {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f8faff;
    padding: 24px;
    box-sizing: border-box;
    .app-body-wrapper {
      background-color: #fff;
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-shadow: 0 7px 42px 0 rgba(126, 141, 162, 0.08);
      box-sizing: border-box;
      position: relative;
    }
  }

  .app-menu {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 24px;
    width: $menuSize;
    box-sizing: border-box;
  }

  .app-content-nav-list-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 28px;
    width: 300px;
    padding: 32px 0;
    box-sizing: border-box;
    z-index: 3;
    pointer-events: none;
  }

  .app-content {
    box-sizing: border-box;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    position: relative;
    padding-right: 300px;
    padding-left: 24px;
  }
}
</style>
