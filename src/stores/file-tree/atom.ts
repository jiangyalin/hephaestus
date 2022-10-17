import { EXPAND_FOLDER, INIT_FILE, SELECT_RESOURCE } from '../atom-type'
import type { fileTree, resourceNode } from '../interface'
import { resourceType } from '../interface/enum'

export default {
  // 选中资源
  [SELECT_RESOURCE] (state: fileTree, { id }: { id: number }) {
    state.checked = id
  },
  // 展开文件夹
  [EXPAND_FOLDER] (state: fileTree, id: number) {
    const mapTree = (tree: any) => {
      return tree.map((item: any) => {
        return {
          ...item,
          isExpand: item.id === id ? !item.isExpand : item.isExpand,
          node: mapTree(item.node)
        }
      })
    }

    state.resourceTree = mapTree(state.resourceTree)
  },
  // 初始化文件树
  [INIT_FILE] (state: fileTree, data: Array<resourceNode>) {
    const map = {
      [resourceType.FOLDER]: 100000,
      [resourceType.FILE]: 0
    }
    const mapTree = (tree: any) => {
      return tree
        .sort((a: resourceNode, b: resourceNode) => (b.name.charCodeAt(0) + map[b.type]) - (a.name.charCodeAt(0) + map[a.type]))
        .map((item: any) => {
          return {
            ...item,
            isExpand: false,
            node: mapTree(item.node)
          }
        })
    }
    state.resourceTree = mapTree(data)
  }
}
