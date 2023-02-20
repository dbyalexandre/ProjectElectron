const file = document.querySelector('.btn')
const toggleDarkMode = document.getElementById('toggle-dark-mode')
const resetToSystem = document.getElementById('reset-to-system')
const themeSource = document.getElementById('theme-source')

file.addEventListener('click', () => {
  window.electronAPI.compressImages()
})

toggleDarkMode.addEventListener('click', async () => {
  const isDarkMode = await window.darkMode.toggle()
  themeSource.innerHTML = isDarkMode ? 'Dark' : 'Light'
})

resetToSystem.addEventListener('click', async () => {
  await window.darkMode.system()
  themeSource.innerHTML = 'System'
})
