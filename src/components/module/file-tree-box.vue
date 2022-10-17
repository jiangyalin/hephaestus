<template>
  <dv-file-tree-node :tree="state.resourceTree"></dv-file-tree-node>
</template>

<script setup lang="ts" name="file-tree-box">
import DvFileTreeNode from './../../widgets/dv-file-tree-node/index.vue'
import { useCounterStore } from '../../stores/file-tree/counter'
import api from './../../api'
import { ResultData } from '../../api/interface'
const state = useCounterStore()

api.fileTree.getFileTreeAll().then((res: ResultData) => {
  state.initFileTree(res.data)
})
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
