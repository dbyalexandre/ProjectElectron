const file = document.querySelector('.btn')

file.addEventListener('click', () => {
  window.electronAPI.compressImages()
})
