import { inject, onBeforeUnmount, provide, reactive } from 'vue'

export const APP_NAVIGATOR_PROVIDER = '@@APP_NAVIGATOR_PROVIDER'

export interface AppRoute {
  path?: string
  hash?: string
  param?: {
    [key: string]: string
  }
}

export function useAppNavigator(props: { defaultPath?: string }) {
  let initRoute = getRoute()
  if (!initRoute) {
    initRoute = {
      path: props.defaultPath
    }
  }
  // initRoute.path && initRoute.path = props.defaultPath
  const state = reactive({
    route: initRoute
  })
  const utils = {
    reset: () => {
      const route = getRoute()
      if (!!route) {
        state.route = route
      }
    }
  }
  const method = {
    go: (path: string) => {
      window.location.hash = encodeURIComponent(path)
    }
  }
  const handler = {
    hashchange: () => utils.reset()
  }
  window.addEventListener('hashchange', handler.hashchange)
  onBeforeUnmount(() => {
    window.addEventListener('hashchange', handler.hashchange)
  })
  const refer = {
    state,
    utils,
    method
  }

  provide(APP_NAVIGATOR_PROVIDER, refer)
  return refer
}

export function injectAppNavigator(): ReturnType<typeof useAppNavigator> {
  return inject(APP_NAVIGATOR_PROVIDER) as any
}

export function getRoute(): AppRoute | null {
  let locationHash = window.location.hash || ''
  if (!locationHash) {
    return null
  }
  if (locationHash.charAt(0) === '#') {
    locationHash = locationHash.slice(1)
  }
  const [path, hash] = decodeURIComponent(locationHash).split('#')
  return {
    path,
    hash
  }
}
