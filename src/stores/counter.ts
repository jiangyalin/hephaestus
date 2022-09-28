import { defineStore } from 'pinia'
import type { fileTree } from './interface'
import { resourceType } from './interface'
import atom from './atom'
import { SELECT_RESOURCE } from './atom-type'

export const useCounterStore = defineStore('file-tree', {
  state: () :fileTree => {
    return {
      checked: 0, // 选中文件
      resourceTree: [{ // 文件树
        id: 1,
        name: 'api',
        type: resourceType.FOLDER,
        node: [{
          id: 2,
          name: 'ajax',
          type: resourceType.FOLDER,
          node: [{
            id: 3,
            name: 'err-code.ts',
            type: resourceType.FILE,
            node: []
          }, {
            id: 4,
            name: 'index.ts',
            type: resourceType.FILE,
            node: []
          }]
        }, {
          id: 5,
          name: 'mock.ts',
          type: resourceType.FILE,
          node: []
        }]
      }, {
        id: 6,
        name: 'assets',
        type: resourceType.FOLDER,
        node: []
      }, {
        id: 7,
        name: 'components',
        type: resourceType.FOLDER,
        node: []
      }, {
        id: 8,
        name: 'config',
        type: resourceType.FOLDER,
        node: []
      }, {
        id: 9,
        name: 'main.ts',
        type: resourceType.FILE,
        node: []
      }]
    }
  },
  actions: {
    selectResource (resourceId: number) { // 选中资源
      atom[SELECT_RESOURCE](this, { id: resourceId })
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
  }
})
