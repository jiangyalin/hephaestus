<template>
  <ul class="m-list">
    <li
      v-for="item in props.tree"
      :key="item.name"
      class="u-li"
    >
      <dv-folder
        v-if="item.type === 'folder'"
        :name="item.name"
      ></dv-folder>
      <dv-file
        v-if="item.type === 'file'"
        :name="item.name"
      ></dv-file>
      <file-tree
        v-if="item.node"
        :tree="item.node"
      ></file-tree>
    </li>
  </ul>
</template>

<script setup lang="ts">
import DvFolder from './../../widgets/dv-folder/index.vue'
import DvFile from './../../widgets/dv-file/index.vue'
interface Props {
  tree: object[]
}
const props = withDefaults(defineProps<Props>(), {
  tree: () => [{ name: 'api', type: 'folder' }]
})

// console.log('props', props.tree)
</script>

<style lang="scss" scoped>
.m-list {
  padding-left: 18px;
}
</style>

<style lang="scss">
</style>
