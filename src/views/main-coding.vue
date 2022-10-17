<template>
  <!--<file-tree-box></file-tree-box>-->
  <div
    v-if="windowInitFinish"
    class="g-box g-main-coding-box"
    @mousemove="mousemove"
    @mouseup="mouseup"
  >
    <div class="u-tp">
      <div class="m-tl m-box">
        <layout
          :name="locationType.TL"
          :tag="layoutState.tlBlock.tag"
          :width="layoutState.tlBlock.width"
          :height="layoutState.tlBlock.height"
        ></layout>
      </div>
      <div class="m-tr m-box">
        <layout
          :name="locationType.TR"
          :tag="layoutState.trBlock.tag"
          :width="layoutState.trBlock.width"
          :height="layoutState.trBlock.height"
        ></layout>
      </div>
    </div>
    <div class="m-bt m-box">
      <layout
        :name="locationType.BT"
        :tag="layoutState.btBlock.tag"
        :width="layoutState.btBlock.width"
        :height="layoutState.btBlock.height"
      ></layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import layout from '../components/module/layout.vue'
import { locationType } from '../stores/interface/enum'
import { io } from 'socket.io-client'
import config from '../config'

import { useCounterStore } from '../stores/layout/counter'

const layoutState = useCounterStore()

const windowInitFinish = ref(false) // 窗口初始化完成
const init = () => {
  layoutState.initLayout({
    width: (document.querySelector('body') || {}).offsetWidth || 0,
    height: (document.querySelector('body') || {}).offsetHeight || 0
  })
}

onMounted(() => {
  init()
  windowInitFinish.value = true
  window.onresize = () => {
    init()
  }
})

const mousemove = (e: any) => {
  layoutState.dragBorder({ x: e.pageX, y: e.pageY })
}

const mouseup = () => {
  layoutState.mack({ block: '', direction: '' })
}

const webSocket = () => {
  const socket = io(config.serverWs)

  socket.on('connect', () => {
    console.log(socket.connected) // true
  })

  socket.on('disconnect', () => {
    console.log(socket.connected) // false
  })
}

webSocket()
</script>

<style lang="scss" scoped>
.g-main-coding-box {
  .u-tp {
    display: flex;
  }

  .m-box {
  }
}
</style>

<style lang="scss">
</style>
