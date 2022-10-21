<template>
  <div class="g-box g-terminal-box">
    <div id="terminal"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Terminal } from 'xterm'
import { AttachAddon } from 'xterm-addon-attach'
import api from '../../api'
import config from '../../config'
// import { WebLinksAddon } from 'xterm-addon-web-links'

const term = new Terminal()

console.log('term', term)

const init = async () => {
  const pid = await api.fileTree.postTerminal().then((res: any) => res.data)
  const socket = new WebSocket(config.socket + pid)
  const attachAddon = new AttachAddon(socket)
  term.loadAddon(attachAddon)
  term.open(document.getElementById('terminal'))
  term.focus()
  console.log('pid', pid)
}

onMounted(async () => {
  init()
})
</script>

<style lang="scss" scoped>
.g-terminal-box {
  color: #fff;
}
</style>

<style lang="scss">
</style>
