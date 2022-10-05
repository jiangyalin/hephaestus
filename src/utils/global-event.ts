export interface EventNode {
  id: number | string,
  callback: Function
}

const globalClickArr: EventNode[] = []

export const globalClick = (data: EventNode): void => {
  globalClickArr.push(data)
  const dom = document.getElementById('app') as HTMLFormElement
  dom.onclick = (e: object) => {
    globalClickArr.forEach((data: EventNode) => {
      data.callback(e)
    })
  }
}

export const deleteGlobalClick = (id: number) => globalClickArr.splice(globalClickArr.findIndex((item: EventNode) => item.id === id), 1)
