<template>
  <div class="g-box g-terminal-box">
    <div
      id="terminal"
      class="terminal"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { Terminal } from 'xterm'
import { AttachAddon } from 'xterm-addon-attach'
import api from '../../api'
import config from '../../config'
import 'xterm/css/xterm.css'

const term = new Terminal()

console.log('term', term)

const init = async () => {
  const pid = await api.fileTree.postTerminal().then((res: any) => res.data)
  const socket = new WebSocket(config.socket + pid)
  const attachAddon = new AttachAddon(socket)
  term.loadAddon(attachAddon)
  term.open(document.getElementById('terminal') as HTMLElement)
  term.focus()
  console.log('pid', pid)
}

onMounted(() => {
  setTimeout(() => {
    init()
  }, 5000)
})
</script>

<style lang="scss" scoped>
.g-terminal-box {
  height: 100%;
  color: #fff;

  .terminal {
    height: 100%;
  }
}
</style>

<style lang="scss">
</style>
