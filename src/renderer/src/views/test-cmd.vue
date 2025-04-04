<template>
  <div class="test-page">
    <button @click="onBtnClk">test-cmd</button>
  </div>
</template>

<script setup lang="ts">
import * as pty from 'node-pty'

function onBtnClk(): void {
  const shell = window.electron.process.platform === 'win32' ? 'powershell.exe' : 'bash'
  const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  })

  ptyProcess.onData((data) => {
    process.stdout.write(data)
  })

  ptyProcess.write('ls\r')
  ptyProcess.resize(100, 40)
  ptyProcess.write('ls\r')
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.test-page {
  height: 100%;
  width: 100%;
}
</style>
