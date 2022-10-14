import { defineStore } from 'pinia'
import state from './state'
import atom from './atom'
import { INIT_WINDOW, MACK_LAYOUT_OBJ, SET_LAYOUT } from '../atom-type'
import { directionType, locationType, tag } from '../interface/enum'

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
    },
    // 拖拽边框，改变大小
    dragBorder ({ x, y }: { x: number, y: number }) {
      if (!this.dragMack.block || !this.dragMack.direction) return false
      // 纵向拖动
      if ((this.dragMack.block === locationType.BT && this.dragMack.direction === directionType.TP) || ((this.dragMack.block === locationType.TL || this.dragMack.block === locationType.TR) && this.dragMack.direction === directionType.BT)) {
        atom[SET_LAYOUT](this, {
          location: locationType.TL,
          height: y
        })
        atom[SET_LAYOUT](this, {
          location: locationType.TR,
          height: y
        })
        atom[SET_LAYOUT](this, {
          location: locationType.BT,
          height: this.window.height - y
        })
      }

      // 横向拖动
      if ((this.dragMack.block === locationType.TL && this.dragMack.direction === directionType.Fr) || (this.dragMack.block === locationType.TR && this.dragMack.direction === directionType.FL)) {
        atom[SET_LAYOUT](this, {
          location: locationType.TL,
          width: x
        })
        atom[SET_LAYOUT](this, {
          location: locationType.TR,
          width: this.window.width - x
        })
      }
    },
    // 标记操作对象
    mack ({ block, direction }: { block: locationType, direction: directionType }) {
      atom[MACK_LAYOUT_OBJ](this, { block, direction })
    }
  },
  getters: {
  }
})
