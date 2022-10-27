import { globalClick } from './global-event'

export interface Binding {
  value: Function,
  oldValue?: Function,
  arg?: string,
  modifiers?: object
}

// 元素外点击指令
export const vClickOutside = {
  mounted (el: HTMLFormElement, binding: Binding) {
    globalClick({
      callback: (e: any) => {
        if (!el.contains(e.target)) binding.value()
      }
    })
  }
}
