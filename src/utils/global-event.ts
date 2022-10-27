import createHash from '../tool/create-hash'

export interface EventNode {
  id?: number | string,
  callback: Function
}

const globalClickArr: EventNode[] = []

export const globalClick = (data: EventNode): void => {
  if (data.id === undefined) data.id = createHash()
  globalClickArr.push(data)
  const dom = document.getElementById('app') as HTMLFormElement
  dom.onclick = (e: Event) => {
    globalClickArr.forEach((data: EventNode) => {
      data.callback(e)
    })
  }
}

export const deleteGlobalClick = (id: number | string) => globalClickArr.splice(globalClickArr.findIndex((item: EventNode) => item.id === id), 1)
