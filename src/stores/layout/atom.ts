import { INIT_WINDOW, MACK_LAYOUT_OBJ, SET_LAYOUT } from '../atom-type'
import type { layout } from '../interface/type'
import { directionType, locationType, tagName } from '../interface/enum'

export default {
  // 初始化窗口数据
  [INIT_WINDOW] (state: layout, { width, height }: { width: number, height: number }) {
    state.window.width = width
    state.window.height = height
  },
  // 设置布局
  [SET_LAYOUT] (state: layout, { location, tag, width, height }: { location: locationType, tag?: tagName, width?: number, height?: number }) {
    if (location === locationType.TL) {
      state.tlBlock.tag = tag || state.tlBlock.tag
      state.tlBlock.width = width || state.tlBlock.width
      state.tlBlock.height = height || state.tlBlock.height
    }
    if (location === locationType.TR) {
      state.trBlock.tag = tag || state.trBlock.tag
      state.trBlock.width = width || state.trBlock.width
      state.trBlock.height = height || state.trBlock.height
    }
    if (location === locationType.BT) {
      state.btBlock.tag = tag || state.btBlock.tag
      state.btBlock.width = width || state.btBlock.width
      state.btBlock.height = height || state.btBlock.height
    }
  },
  // 标记操作对象
  [MACK_LAYOUT_OBJ] (state: layout, { block, direction }: { block: locationType | '', direction: directionType | '' }) {
    state.dragMack.block = block
    state.dragMack.direction = direction
  }
}
