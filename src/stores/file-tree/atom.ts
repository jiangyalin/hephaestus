import { EXPAND_FOLDER, INIT_FILE, SELECT_RESOURCE } from '../atom-type'
import type { resourceNode } from '../interface/type'
import { resourceType } from '../interface/enum'
import type { Ref } from 'vue'

export default {
  // 选中资源
  [SELECT_RESOURCE] (checked: Ref<number>, { id }: { id: number }) {
    checked.value = id
  },
  // 展开文件夹
  [EXPAND_FOLDER] (resourceTree: Ref<Array<resourceNode>>, id: number) {
    const mapTree = (tree: any) => {
      return tree.map((item: any) => {
        return {
          ...item,
          isExpand: item.id === id ? !item.isExpand : item.isExpand,
          node: mapTree(item.node)
        }
      })
    }

    resourceTree.value = mapTree(resourceTree.value)
  },
  // 初始化文件树
  [INIT_FILE] (resourceTree: Ref<Array<resourceNode>>, data: Array<resourceNode>) {
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
    resourceTree.value = mapTree(data)
  }
}
