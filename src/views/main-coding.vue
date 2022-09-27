<template>
  <file-tree :tree="fileList"></file-tree>
</template>

<script setup lang="ts">
import FileTree from '../components/module/file-tree.vue'
import { useCounterStore } from '@/stores/counter'
const fileList = useCounterStore()
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
