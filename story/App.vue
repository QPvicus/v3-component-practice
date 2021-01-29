<template>
  <div id="app">
    <app-navigator defaultPath="/normal/button">
      <h1>
        <app-navigator-page></app-navigator-page>
      </h1>
    </app-navigator>
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
