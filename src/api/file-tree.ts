import ajax from './ajax/index'
import { Method } from './interface'

const getFileTreeAll = () => ajax({ url: '/api/file-tree/all', method: Method.GET }, {})

export default {
  getFileTreeAll
}
