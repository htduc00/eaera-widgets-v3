// import Vue from 'vue'

// Vue.config.productionTip = false

// new Vue({})

// import * as components from './components'


import * as components from './components'

const ComponentLibrary = {
  install(Vue, options = {}) {
    // components
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}