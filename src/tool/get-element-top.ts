// 获取元素距离顶部距离
const getElementTop = (element: HTMLElement) => {
  let actualTop: number = element.offsetTop
  let current = element.offsetParent as HTMLElement | null

  while (current !== null) {
    actualTop += current.offsetTop
    current = current.offsetParent as HTMLElement | null
  }

  return actualTop
}

export default getElementTop
