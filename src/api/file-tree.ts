import ajax from './ajax/index'
import { Method } from './interface/enum'
import type { Parameter } from './interface'

const getFileTreeAll = () => ajax({ url: '/api/file-tree/all', method: Method.GET }, {})

const getFileInfo = (data: Parameter) => ajax({ url: '/api/file-tree/info', method: Method.GET }, data)

const postTerminal = () => ajax({ url: '/terminal', method: Method.POST }, {})

export default {
  getFileTreeAll,
  getFileInfo,
  postTerminal
}
