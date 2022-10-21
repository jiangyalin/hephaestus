<template>
  <div
    class="g-box g-layout-box"
    :style="boxStyle"
  >
    <div class="u-box">
      <component :is="tagList[props.tag]" />
    </div>
    <div
      ref="jTp"
      class="u-border s-tp"
      :data-movable="borderStatus.tp"
      @mousedown="mousedown(name, 'tp')"
    ></div>
    <div
      ref="jFr"
      class="u-border s-fr"
      :data-movable="borderStatus.fr"
      @mousedown="mousedown(name, 'fr')"
    ></div>
    <div
      ref="jFl"
      class="u-border s-fl"
      :data-movable="borderStatus.fl"
      @mousedown="mousedown(name, 'fl')"
    ></div>
    <div
      ref="jBt"
      class="u-border s-bt"
      :data-movable="borderStatus.bt"
      @mousedown="mousedown(name, 'bt')"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { directionType, locationType, tag } from '../../stores/interface/enum'
import FileTreeBox from './file-tree-box.vue'
import EditorBox from './editor-box.vue'
import TerminalBox from './terminal-box.vue'
import tool from './../../tool/index.ts'
import { useCounterStore } from '../../stores/layout/counter'
const layoutState = useCounterStore()

interface Props {
  name: locationType,
  tag: tag,
  width: number,
  height: number
}

const props = withDefaults(defineProps<Props>(), {
  name: locationType.TL,
  tag: tag.DIV,
  width: 100,
  height: 100
})

const boxStyle = computed(() => ({
  width: props.width + 'px',
  height: props.height + 'px'
}))

const tagList = {
  'file-tree-box': FileTreeBox,
  'editor-box': EditorBox,
  div: 'div',
  'terminal-box': TerminalBox
}

// 边框是否为可拖拽状态
const borderStatus = ref({
  tp: false,
  bt: false,
  fl: false,
  fr: false
})
const jTp = ref(null)
const jBt = ref(null)
const jFl = ref(null)
const jFr = ref(null)
onMounted(() => {
  borderStatus.value.tp = tool.getElementTop(jTp.value) !== 0
  borderStatus.value.bt = tool.getElementTop(jBt.value) !== 0 && tool.getElementTop(jBt.value) !== (layoutState.window.height - 1)
  borderStatus.value.fl = tool.getElementLeft(jFl.value) !== 0
  borderStatus.value.fr = tool.getElementLeft(jFr.value) !== 0 && tool.getElementLeft(jFr.value) !== (layoutState.window.width - 1)
})

// 边框拖拽特异处理(待优化)
const mousedown = (name: locationType, direction: directionType) => {
  layoutState.mack({ block: name, direction })
}
</script>

<style lang="scss" scoped>
.g-layout-box {
  overflow: auto;
  position: relative;
  //border: 1px solid #bababa;
  box-sizing: border-box;

  .u-box {
    overflow: auto;
    width: 100%;
    height: 100%;
  }

  .u-border {
    position: absolute;
    background-color: #bababa;
    pointer-events: none;

    &.s-tp, &.s-bt {
      width: 100%;
      height: 1px;
    }

    &.s-tp[data-movable="true"], &.s-bt[data-movable="true"] {
      cursor: ns-resize;
      pointer-events: auto;
    }

    &.s-fl, &.s-fr {
      width: 1px;
      height: 100%;
    }

    &.s-fl[data-movable="true"], &.s-fr[data-movable="true"] {
      cursor: ew-resize;
      pointer-events: auto;
    }

    &.s-tp {
      top: 0;
      left: 0;
    }

    &.s-bt {
      bottom: 0;
      left: 0;
    }

    &.s-fl {
      top: 0;
      left: 0;
    }

    &.s-fr {
      top: 0;
      right: 0;
    }
  }
}
</style>

<style lang="scss">
</style>
