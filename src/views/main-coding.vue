<template>
  <!--<file-tree-box></file-tree-box>-->
  <div class="g-box g-main-coding-box">
    <div class="u-tp">
      <div class="m-tl m-box">
        <layout
          :tag="layoutState.tlBlock.tag"
          :width="layoutState.tlBlock.width"
          :height="layoutState.tlBlock.height"
        ></layout>
      </div>
      <div class="m-tr m-box">
        <layout
          :tag="layoutState.trBlock.tag"
          :width="layoutState.trBlock.width"
          :height="layoutState.trBlock.height"
        ></layout>
      </div>
    </div>
    <div class="m-bt m-box">
      <layout
        :tag="layoutState.btBlock.tag"
        :width="layoutState.btBlock.width"
        :height="layoutState.btBlock.height"
      ></layout>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// import FileTreeBox from '../components/module/file-tree-box.vue'
import layout from '../components/module/layout.vue'
// import { vUseDoubleClick } from '../use'
import { useCounterStore } from '../stores/layout/counter'
// import { globalClick } from '../utils/global-event'
const layoutState = useCounterStore()

const init = () => {
  layoutState.initLayout({
    width: (document.querySelector('body') || {}).offsetWidth || 0,
    height: (document.querySelector('body') || {}).offsetHeight || 0
  })
}

// ace_layer ace_cursor-layer ace_hidden-cursors

// globalClick({
//   id: 1,
//   callback: () => {
//     console.log('id=', 1)
//   }
// })
//
// globalClick({
//   id: 2,
//   callback: () => {
//     console.log('id=', 2)
//   }
// })

// 标记，鼠标双击待实现

onMounted(() => {
  init()
  window.onresize = () => {
    init()
  }
})
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
