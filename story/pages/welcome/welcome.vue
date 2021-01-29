<template>
  <div class="welcome">
    <div style="font-size:120px" class="title">ZZZ-UI</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'WelcomePage'
})
</script>

<style lang="scss" scoped>
.welcome {
  .title {
    text-align: center;
    padding: 60px 30px;
    font-style: italic;
    font-weight: 600;
    color: rgb(32, 175, 255);
  }
}
</style>
