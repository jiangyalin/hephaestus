import { tagName } from '../interface/enum'
import type { layout } from '../interface/type'

export default (): layout => ({
  tlBlock: {
    tag: tagName.FILE_TREE,
    width: 100,
    height: 100
  },
  trBlock: {
    tag: tagName.EDITOR,
    width: 100,
    height: 100
  },
  btBlock: {
    tag: tagName.TERMINAL,
    width: 100,
    height: 100
  },
  window: {
    width: 100,
    height: 100
  },
  dragMack: { // 拖拽中标记
    block: '',
    direction: ''
  }
})
