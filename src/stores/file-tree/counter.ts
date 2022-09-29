import { defineStore } from 'pinia'
import atom from './atom'
import { EXPAND_FOLDER, SELECT_RESOURCE } from '../atom-type'
import state from './state'

export const useCounterStore = defineStore('file-tree', {
  state,
  actions: {
    selectResource (resourceId: number) { // 选中资源
      atom[SELECT_RESOURCE](this, { id: resourceId })
    },
    expandFolder (id: number) { // 展开文件夹
      atom[EXPAND_FOLDER](this, id)
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
