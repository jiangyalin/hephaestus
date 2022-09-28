import { resourceType } from '../interface'
import type { fileTree } from '../interface'

export default ():fileTree => ({
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
})
