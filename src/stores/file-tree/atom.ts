import { EXPAND_FOLDER, SELECT_RESOURCE } from '../atom-type'
import type { fileTree } from '../interface'

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
  }
}
