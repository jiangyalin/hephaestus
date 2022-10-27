import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import atom from './atom'
import { EXPAND_FOLDER, INIT_FILE, SELECT_RESOURCE } from '../atom-type'
import type { resourceNode } from '../interface/type'
import bus from '../../tool/bus'
import { resourceType } from '../interface/enum'

/*
* pinia组合式api测试，暂时无法拆开文件模块
* */

export const useFileTreeStore = defineStore('file-tree', () => {
  const checked = ref<number>(0)
  const resourceTree = ref<Array<resourceNode>>([])

  const resourceMap = computed(() => {
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
    eachTree(resourceTree.value)

    return map
  })
  const checkedResourceNode = computed(() => {
    return resourceMap.value[checked.value]
  })

  return {
    checked,
    resourceTree,
    selectResource (resourceId: number) { // 选中资源
      atom[SELECT_RESOURCE](checked, { id: resourceId })
    },
    expandElement (id: number) { // 展开元素
      if (resourceMap.value[id].type === resourceType.FILE) bus.emit('open-file', resourceMap.value[id].path)
      if (resourceMap.value[id].type === resourceType.FOLDER) atom[EXPAND_FOLDER](resourceTree, id)
    },
    initFileTree (data: Array<resourceNode>) { // 初始化文件树
      atom[INIT_FILE](resourceTree, data)
    },
    resourceMap,
    checkedResourceNode
  }
})

// export const useCounterStore = defineStore('file-tree', {
//   state,
//   actions: {
//     selectResource (resourceId: number) { // 选中资源
//       atom[SELECT_RESOURCE](this, { id: resourceId })
//     },
//     expandElement (id: number) { // 展开元素
//       if (this.resourceMap[id].type === resourceType.FILE) bus.emit('open-file', this.resourceMap[id].path)
//       if (this.resourceMap[id].type === resourceType.FOLDER) atom[EXPAND_FOLDER](this, id)
//     },
//     initFileTree (data: Array<resourceNode>) { // 初始化文件树
//       atom[INIT_FILE](this, data)
//     }
//   },
//   getters: {
//     resourceMap: (state: fileTree) => {
//       const map: {
//         [index: number]: resourceNode
//       } = {}
//       const eachTree = (tree: any) => {
//         return tree.map((item: any) => {
//           map[item.id] = item
//           return {
//             ...item,
//             node: eachTree(item.node)
//           }
//         })
//       }
//       eachTree(state.resourceTree)
//
//       return map
//     }
//   }
// })
