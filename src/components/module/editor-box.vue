<template>
  <div class="g-box g-editor-box">
    11
    <!--<codemirror-->
    <!--  v-model="code"-->
    <!--  placeholder="Code goes here..."-->
    <!--  :style="style"-->
    <!--  :autofocus="true"-->
    <!--  :indent-with-tab="true"-->
    <!--  :tab-size="2"-->
    <!--  :extensions="extensions"-->
    <!--  @ready="handleReady"-->
    <!--/>-->
    <v-ace-editor
      v-model:value="json"
      lang="json"
      :options="{
        useWorker: true
      }"
      :style="style"
    />
  </div>
</template>

<script setup lang="ts">
import { VAceEditor } from 'vue3-ace-editor'
import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/theme-chrome'
// import { ref, shallowRef } from 'vue'
// import { Codemirror } from 'vue-codemirror'
// import { javascript } from '@codemirror/lang-javascript'
// import { oneDark } from '@codemirror/theme-one-dark'
//
// const code = ref('console.log(\'Hello, world!\')')
// const extensions = [javascript(), oneDark]
//
// // Codemirror EditorView instance ref
// const view = shallowRef()
// const handleReady = (payload) => {
//   view.value = payload.view
// }

const json = `{
  a: 'a'
}`

const style = { height: '400px' }

// Status is available at all times via Codemirror EditorView
// const getCodemirrorStates = () => {
//   const state = view.value.state
//   const ranges = state.selection.ranges
//   const selected = ranges.reduce((r, range) => r + range.to - range.from, 0)
//   const cursor = ranges[0].anchor
//   const length = state.doc.length
//   const lines = state.doc.lines
//   // more state info ...
//   // return ...
// }
</script>

<style lang="scss" scoped>
.g-editor-box {
  color: #fff;
}
</style>

<style lang="scss">
</style>
