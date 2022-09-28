import { tag } from '../interface'
import type { layout } from '../interface'

export default (): layout => ({
  tlBlock: {
    tag: tag.FILE_TREE,
    width: 100,
    height: 100
  },
  trBlock: {
    tag: tag.DIV,
    width: 100,
    height: 100
  },
  btBlock: {
    tag: tag.DIV,
    width: 100,
    height: 100
  },
  window: {
    width: 100,
    height: 100
  }
})
