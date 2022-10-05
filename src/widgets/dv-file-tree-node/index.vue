<template>
  <ul class="m-list">
    <li
      v-for="item in list"
      :key="item.name"
      class="u-li"
      :data-active="item.selected"
    >
      <div
        class="u-row"
        :style="rowStyle"
        @click.stop="store.selectResource(item.id)"
        @dblclick.stop="store.expandFolder(item.id)"
      >
        <dv-folder
          v-if="item.type === resourceType.FOLDER"
          :id="item.id"
          :name="item.name"
          :is-expand="item.isExpand"
        ></dv-folder>
        <dv-file
          v-if="item.type === resourceType.FILE"
          :name="item.name"
        ></dv-file>
      </div>
      <index
        v-if="item.node && item.isExpand"
        :tree="item.node"
        :prop-path="item.propPath"
        :level="(props.level || 0) + 1"
      ></index>
    </li>
  </ul>
</template>

<script setup lang="ts" name="dv-file-tree-node">
import { computed } from 'vue'
import DvFolder from './../../widgets/dv-folder/index.vue'
import DvFile from './../../widgets/dv-file/index.vue'
import { resourceType } from '../../stores/interface/enum'
import type { resourceNode } from '../../stores/interface'
import { useCounterStore } from '../../stores/file-tree/counter'
const store = useCounterStore()

interface Props {
  tree: resourceNode[],
  propPath?: string,
  level?: number
}

const props = withDefaults(defineProps<Props>(), {
  tree: () => [{ name: 'api', type: resourceType.FOLDER, id: -1, isExpand: false, node: [] }],
  propPath: '',
  level: 0
})

const list = computed(() => props.tree.map((item: resourceNode) => ({
  ...item,
  propPath: props.propPath + '/' + item.name,
  selected: item.id === store.checked
})))

const rowStyle = computed(() => ({
  paddingLeft: (props.level * 18) + 'px'
}))

// console.log('rowStyle', rowStyle)
// console.log('props.level', props.level)

</script>

<style lang="scss" scoped>
.m-list {
  //padding-left: 18px;
  font-size: 14px;
  color: #bababa;
  line-height: 1.2;
  cursor: default;
  user-select: none;

  .u-li {
    &[data-active="true"] > .u-row {
      background-color: #2c3e50;
    }
  }
}
</style>

<style lang="scss">
</style>
