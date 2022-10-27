import { defineStore } from 'pinia'
import state from './state'
import api from '../../api'
import type { MenuNode } from '../interface/type'
import { useFileTreeStore } from '../file-tree/counter'

export const useCounterStore = defineStore('menu', {
  state,
  actions: {
    // 点击菜单
    clickMenu (value: number) {
      const fileTreeStore = useFileTreeStore()
      const isNewFile = [15, 16, 17, 18, 19, 20].includes(value)

      if (isNewFile) {
        const checkedPath = (fileTreeStore.checkedResourceNode || {}).path || ''
        api.menu.postMenuNewFile({
          type: this.menuMap[value].code,
          path: '/' + checkedPath.substring(0, checkedPath.lastIndexOf('/'))
        })
      }
    }
  },
  getters: {
    menuMap () {
      const map: {
        [index: number]: MenuNode
      } = {}
      const eachTree = (tree: any) => {
        return tree.map((item: any) => {
          map[item.value] = item
          return {
            ...item,
            menuNode: item.menuNode ? eachTree(item.menuNode) : {}
          }
        })
      }
      eachTree(state())

      return map
    }
  }
})
