import { defineStore } from 'pinia'
import atom from './atom'
import { EXPAND_FOLDER, INIT_FILE, SELECT_RESOURCE } from '../atom-type'
import state from './state'
import type { fileTree, resourceNode } from '../interface'
import bus from '../../tool/bus'
import { resourceType } from '../interface/enum'

export const useCounterStore = defineStore('file-tree', {
  state,
  actions: {
    selectResource (resourceId: number) { // 选中资源
      atom[SELECT_RESOURCE](this, { id: resourceId })
    },
    expandElement (id: number) { // 展开元素
      if (this.resourceMap[id].type === resourceType.FILE) bus.emit('open-file', id)
      if (this.resourceMap[id].type === resourceType.FOLDER) atom[EXPAND_FOLDER](this, id)
    },
    initFileTree (data: Array<resourceNode>) { // 初始化文件树
      atom[INIT_FILE](this, data)
    }
  },
  getters: {
    // fileTreeData (state: fileTree) {
    //   return state.resourceTree.map(item => ({
    //     ...item,
    //     propPath: props.propPath + '/' + item.name,
    //     selected: item.id === props.checked
    //   }))
    // }
    resourceMap: (state: fileTree) => {
      const map: {
        [index: number]: resourceNode
      } = {}
      const eachTree = (tree: any) => {
        return tree.map((item: any) => {
          map[item.id] = item
          return {
            ...item,
            node: eachTree(item.node)
          }
        })
      }
      eachTree(state.resourceTree)

      return map
    }
  }
})
