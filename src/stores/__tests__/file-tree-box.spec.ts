import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useFileTreeStore } from '../file-tree/counter'
import type { resourceNode } from '../interface/type'
import mockData from './file-tree-box-mock.json'

describe('file-tree', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('展开文件夹', () => {
    const counter = useFileTreeStore()
    counter.initFileTree(<Array<resourceNode>>mockData.data)
    counter.expandElement(20)
    expect((counter.resourceTree.find(item => item.id === 20) || {}).isExpand).toBe(true)
  })
  it('选中资源', () => {
    const counter = useFileTreeStore()
    counter.initFileTree(<Array<resourceNode>>mockData.data)
    counter.selectResource(118)
    expect(counter.checked).toBe(118)
  })
})
