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
import { tag } from '../../stores/interface'
import FileTreeBox from './file-tree-box.vue'
interface Props {
  tag: tag,
  width: number,
  height: number
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'div',
  width: 100,
  height: 100
})

const boxStyle = computed(() => ({
  width: props.width + 'px',
  height: props.height + 'px'
}))

const tagList = {
  'file-tree-box': FileTreeBox,
  div: 'div'
}
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
