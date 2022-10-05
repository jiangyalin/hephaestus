<template>
  <div
    class="g-box g-layout-box"
    :style="boxStyle"
  >
    <component :is="tagList[props.tag]" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { tag } from '../../stores/interface/enum'
import FileTreeBox from './file-tree-box.vue'
import EditorBox from './editor-box.vue'
interface Props {
  tag: tag,
  width: number,
  height: number
}

const props = withDefaults(defineProps<Props>(), {
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
  div: 'div'
}
</script>

<style lang="scss" scoped>
.g-layout-box {
  overflow: auto;
  border: 1px solid #bababa;
  box-sizing: border-box;
}
</style>

<style lang="scss">
</style>
