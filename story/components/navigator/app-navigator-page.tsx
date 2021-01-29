import { DefineComponent, defineComponent, markRaw, reactive, watch } from 'vue'
import { injectAppNavigator } from './app-navigator'
export default defineComponent({
  name: 'AppNavigatorPage',
  setup() {
    const navigator = injectAppNavigator()
    const state = reactive({
      PageComponent: null as null | DefineComponent
    })
    const utils = {
      reset: async () => {
        const route = navigator.state.route
        if (!route) {
          return
        }
        let { path } = route
        if (path?.charAt(0) === '/') {
          path = path.slice(1)
        }
        const Component = (await import(`story/pages/${path}`)).default
        state.PageComponent = markRaw(Component)
      }
    }

    watch(() => navigator.state.route.path, utils.reset, { immediate: true })

    return () => {
      const { PageComponent } = state
      return !!PageComponent ? <PageComponent /> : null
    }
  }
})
