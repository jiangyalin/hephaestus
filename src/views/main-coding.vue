<template>
  <file-tree :tree="state.resourceTree"></file-tree>
</template>

<script setup lang="ts">
import FileTree from '../components/module/file-tree.vue'
import { useCounterStore } from '@/stores/counter'
const state = useCounterStore()
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
