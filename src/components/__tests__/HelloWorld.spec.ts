import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFileTreeStore } from '../../stores/file-tree/counter'
import type { resourceNode } from '../../stores/interface/type'

describe('file-tree', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('展开文件夹', () => {
    const counter = useFileTreeStore()
    counter.expandElement(2)
    const treeMap: {
      [index: number]: resourceNode
    } = {}
    const eachTree = (tree: any) => {
      return tree.map((item: any) => {
        treeMap[item.id] = item
        return {
          ...item,
          node: eachTree(item.node)
        }
      })
    }
    eachTree(counter.resourceTree)
    expect(treeMap[2].isExpand).toBe(true)
  })
})
