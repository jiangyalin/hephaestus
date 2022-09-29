export interface eventNode {
  id: number,
  callback: Function
}

const globalClickArr: eventNode[] = []

export const globalClick = (data: eventNode): void => {
  globalClickArr.push(data)
  const dom = document.getElementById('app') as HTMLFormElement
  dom.onclick = (e: object) => {
    globalClickArr.forEach((data: eventNode) => {
      data.callback(e)
    })
  }
}

export const deleteGlobalClick = (id: number) => globalClickArr.splice(globalClickArr.findIndex((item: eventNode) => item.id === id), 1)
