<template>
  <div class="g-box g-editor-box">
    <v-ace-editor
      v-model:value="content.code"
      lang="javascript"
      theme="monokai"
      :options="{
        useWorker: true,
        tooltipFollowsMouse: true
      }"
      :style="style"
      @init="editorInit"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive, watchEffect } from 'vue'
import { VAceEditor } from 'vue3-ace-editor'
import './ace-config'
import api from './../../api'
import bus from '../../tool/bus'
import { ResultData } from '../../api/interface'

const content = reactive({
  code: ''
})

watchEffect(async () => {
  content.code = (await import('./ace-config.js?raw')).default
})

const editorInit = () => {
  // import('brace/ext/language_tools') // language extension prerequsite...
  // import('brace/mode/html')
  // import('brace/mode/javascript') // language
  // import('brace/mode/less')
  // import('brace/theme/chrome')
  // import('brace/snippets/javascript') // snippet
}

const style = { height: '850px' }

bus.on('open-file', (id: number) => {
  api.mock.getFileData({
    path: {
      id
    }
  }).then(async (res: ResultData) => {
    /* @vite-ignore */
    content.code = (await import(res.data.asset + '?raw')).default
  })
})
</script>

<style lang="scss" scoped>
.g-editor-box {
  color: #fff;
}
</style>

<style lang="scss">
</style>
