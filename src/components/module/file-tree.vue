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
        @click.stop="state.selectResource(item.id)"
      >
        <dv-folder
          v-if="item.type === resourceType.FOLDER"
          :name="item.name"
        ></dv-folder>
        <dv-file
          v-if="item.type === resourceType.FILE"
          :name="item.name"
        ></dv-file>
      </div>
      <file-tree
        v-if="item.node"
        :tree="item.node"
        :prop-path="item.propPath"
        :level="props.level + 1"
      ></file-tree>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import DvFolder from './../../widgets/dv-folder/index.vue'
import DvFile from './../../widgets/dv-file/index.vue'
import { resourceType } from '../../stores/interface'
import { useCounterStore } from '@/stores/counter'
const state = useCounterStore()

interface Props {
  tree: object[],
  propPath?: string,
  level?: number
}

const props = withDefaults(defineProps<Props>(), {
  tree: () => [{ name: 'api', type: 'folder' }],
  propPath: '',
  level: 0
})

const list = computed(() => props.tree.map(item => ({
  ...item,
  propPath: props.propPath + '/' + item.name,
  selected: item.id === state.checked
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
  cursor: default;

  .u-li {
    &[data-active="true"] > .u-row {
      background-color: #2c3e50;
    }
  }
}
</style>

<style lang="scss">
</style>
