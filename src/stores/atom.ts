import { SELECT_RESOURCE } from './atom-type'
import type { fileTree } from './interface'

export default {
  // 选中资源
  [SELECT_RESOURCE] (state: fileTree, { id }: { id: number }) {
    state.checked = id
  }
}
