const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    compressImages: () => ipcRenderer.send('compress-images')
})