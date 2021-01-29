import { defineComponent, inject } from 'vue'
import { useAppNavigator } from './navigator'

export default defineComponent({
  name: 'AppNavigator',
  props: {
    defaultPath: String // 当没有路径的时候  默认显示的页面
  },
  setup(props, ctx) {
    useAppNavigator(props)
    return () => (!!ctx.slots.default ? ctx.slots.default() : null)
  }
})
