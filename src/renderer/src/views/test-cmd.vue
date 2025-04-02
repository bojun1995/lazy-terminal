<template>
  <div class="test-page">
    <button @click="onBtnClk">test-cmd</button>
  </div>
</template>

<script setup lang="ts">
import { electron } from 'process';

// import { ipcMain } from 'electron'
// import { spawn } from 'child_process'

// 根据平台选择 shell
// const isWindows = process.platform === 'win32'
// let currentProcess = null
// let cwd = process.cwd() // 跟踪当前工作目录

function onBtnClk() {
  const isWindows = window.electron.process.platform === 'win32'
  // ipcMain.on('terminal-input', (event, input) => {
  //   console.log('terminal-input', input)
  // })
  debugger
  try {
    window.api.ping()
    debugger
  } catch (error) {
    console.error(error)
  }
}

// ipcMain.on('terminal-input', (event, input) => {
//   if (!currentProcess) {
//     debugger
//     // currentProcess = spawn(isWindows ? 'cmd.exe' : 'bash', [], {
//     //   cwd: cwd,
//     //   shell: true
//     // });

//     // // 捕获输出并转发到渲染进程
//     // currentProcess.stdout.on('data', (data) => {
//     //   mainWindow.webContents.send('terminal-output', data);
//     // });

//     // currentProcess.stderr.on('data', (data) => {
//     //   mainWindow.webContents.send('terminal-output', data);
//     // });

//     // currentProcess.on('exit', () => {
//     //   currentProcess = null;
//     //   mainWindow.webContents.send('terminal-output', '\r\n$ ');
//     // });
//   }

//   // currentProcess.stdin.write(input);
// })
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.test-page {
  height: 100%;
  width: 100%;
}
</style>
