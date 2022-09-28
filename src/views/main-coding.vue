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
import { useCounterStore } from '../stores/layout/counter'
const layoutState = useCounterStore()

onMounted(() => {
  layoutState.initLayout({
    width: document.querySelector('body').offsetWidth,
    height: document.querySelector('body').offsetHeight
  })
})
</script>

<style lang="scss" scoped>
.g-main-coding-box {
  .u-tp {
    display: flex;
  }

  .m-box {
    border: 1px solid #bababa;
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
</style>
