<template>
  <dv-file-tree-node :tree="state.resourceTree"></dv-file-tree-node>
</template>

<script setup lang="ts" name="file-tree-box">
import DvFileTreeNode from './../../widgets/dv-file-tree-node/index.vue'
import { useFileTreeStore } from '../../stores/file-tree/counter'
import api from './../../api'
import type { ResultData } from '../../api/interface/type'
const state = useFileTreeStore()

api.fileTree.getFileTreeAll().then((res: ResultData) => {
  state.initFileTree(res.data)
})
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
