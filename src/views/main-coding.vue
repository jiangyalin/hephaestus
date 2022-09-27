<template>
  <file-tree :tree="fileList"></file-tree>
</template>

<script setup lang="ts">
import FileTree from '../components/module/file-tree.vue'
const fileList = [{
  name: 'api',
  type: 'folder',
  node: [{
    name: 'ajax',
    type: 'folder',
    node: [{
      name: 'err-code.ts',
      type: 'file'
    }, {
      name: 'index.ts',
      type: 'file'
    }]
  }, {
    name: 'mock.ts',
    type: 'file'
  }]
}, {
  name: 'assets',
  type: 'folder',
  node: []
}, {
  name: 'components',
  type: 'folder',
  node: []
}, {
  name: 'config',
  type: 'folder',
  node: []
}, {
  name: 'main.ts',
  type: 'file',
  node: []
}]
</script>

<style lang="scss" scoped>
</style>

<style lang="scss">
</style>
