import { defineStore } from 'pinia'

export const useCounterStore = defineStore('file-tree', {
  state: () => {
    return [{
      name: 'api',
      type: 'folder',
      node: [{
        name: 'ajax',
        type: 'folder',
        node: [{
          name: 'err-code.ts',
          type: 'file'
        }, {
          name: 'index.ts',
          type: 'file'
        }]
      }, {
        name: 'mock.ts',
        type: 'file'
      }]
    }, {
      name: 'assets',
      type: 'folder',
      node: []
    }, {
      name: 'components',
      type: 'folder',
      node: []
    }, {
      name: 'config',
      type: 'folder',
      node: []
    }, {
      name: 'main.ts',
      type: 'file',
      node: []
    }]
  },
  actions: {
  }
})
