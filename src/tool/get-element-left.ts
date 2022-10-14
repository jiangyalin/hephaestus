// 获取元素距离左侧距离
const getElementLeft = (element: HTMLElement) => {
  let actualLeft: number = element.offsetLeft
  let current = element.offsetParent as HTMLElement | null

  while (current !== null) {
    actualLeft += (current || {}).offsetLeft || 0
    current = current.offsetParent as HTMLElement | null
  }

  return actualLeft
}

export default getElementLeft
