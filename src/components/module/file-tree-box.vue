<template>
  <dv-file-tree-node :tree="state.resourceTree"></dv-file-tree-node>
</template>

<script setup lang="ts" name="file-tree-box">
import DvFileTreeNode from './../../widgets/dv-file-tree-node/index.vue'
import { useCounterStore } from '../../stores/file-tree/counter'
const state = useCounterStore()
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
