import ajax from './ajax/index'
import { Method } from './interface/enum'
import type { Parameter } from './interface/type'

const postMenuNewFile = (data: Parameter) => ajax({ url: '/api/menu/new-file', method: Method.POST }, data)

export default {
  postMenuNewFile
}
