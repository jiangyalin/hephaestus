import Axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import ajax from './ajax'
import type { ResPage } from './interface'
import { Method } from './interface/enum'
import mockData from './mock-data/index'

const mock = new MockAdapter(Axios, { delayResponse: 1000 })

mock
  // .onGet('/file-tree/all')
  // .reply(200, {
  //   code: 200,
  //   data: mockData.fileTree,
  //   msg: ''
  // })
  .onGet('/file-data/9')
  .reply(200, {
    code: 200,
    data: mockData.fileData.find(item => item.id === 9),
    msg: ''
  })
  .onGet('/file-data/10')
  .reply(200, {
    code: 200,
    data: mockData.fileData.find(item => item.id === 10),
    msg: ''
  })
  .onAny()
  .passThrough()

export const getTalentList = (data: ResPage): any => {
  return ajax(
    {
      url: '/file-tree/all',
      method: Method.GET
    },
    data
  )
}

// const getFileTreeAll = (): any => {
//   return ajax(
//     {
//       url: '/api/file-tree/all',
//       method: Method.GET
//     },
//     {}
//   )
// }

// const getFileData = (data: { path: { id: number } }): any => {
//   return ajax(
//     {
//       url: '/file-data/' + data.path.id,
//       method: Method.GET
//     },
//     data
//   )
// }

export default {
  // getFileTreeAll,
  // getFileData
}
