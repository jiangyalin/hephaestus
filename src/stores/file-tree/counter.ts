import { defineStore } from 'pinia'
import atom from './atom'
import { SELECT_RESOURCE } from '../atom-type'
import state from './state'

export const useCounterStore = defineStore('file-tree', {
  state,
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
