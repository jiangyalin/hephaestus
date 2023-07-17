// import { globalClick } from '../utils/global-event'
// import createHash from '../tool/create-hash'

export const vUseDoubleClick = {
  mounted: (el: HTMLFormElement, binding: any) => {
    console.log('el')
    window.setTimeout(() => {
      console.dir(el)
    }, 1000)
    // el.focus()
    // binding.value()
    // el.setAttribute('data-double', '0')
    // globalClick({
    //   id: createHash(),
    //   callback: (e: any) => {
    //     console.log('el.contains(e.target)', el.contains(e.target))
    //     console.dir(el)
    //     const dataDouble = el.getAttribute('data-double')
    //     if (dataDouble === '0') el.setAttribute('data-double', '2')
    //     if (!el.contains(e.target)) binding.value()
    //     const timeout = window.setTimeout(() => {
    //     }, 300)
    //   }
    // })
  }
}
