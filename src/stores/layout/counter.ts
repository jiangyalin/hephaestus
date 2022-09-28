import { defineStore } from 'pinia'
import state from './state'
import atom from './atom'
import { INIT_WINDOW, SET_LAYOUT } from '../atom-type'
import { locationType, tag } from '../interface'

export const useCounterStore = defineStore('layout', {
  state,
  actions: {
    // 初始化布局
    initLayout ({ width, height }: { width: number, height: number }) {
      atom[INIT_WINDOW](this, { width, height })
      atom[SET_LAYOUT](this, {
        location: locationType.TL,
        width: Math.round(this.window.width * 0.3),
        height: Math.round(this.window.height * 0.8)
      })
      atom[SET_LAYOUT](this, {
        location: locationType.TR,
        width: Math.round(this.window.width * 0.7),
        height: Math.round(this.window.height * 0.8)
      })
      atom[SET_LAYOUT](this, {
        location: locationType.BT,
        width: this.window.width,
        height: Math.round(this.window.height * 0.2)
      })
    },
    setLayout ({ location, tag, width, height }: { location: locationType, tag?: tag, width?: number, height?: number }) {
      atom[SET_LAYOUT](this, { location, tag, width, height })
    }
  },
  getters: {
  }
})
