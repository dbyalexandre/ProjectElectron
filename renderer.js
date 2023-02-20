const file = document.querySelector('.btn')

file.addEventListener('click', (e) => {
  dialog.showOpenDialog({
    properties: ['openFile', 'multiSelections']
  }, (files) => {
    if (!files) {

    } 
  })
})
  // document.file.addEventListener('click', function() {
  //   dialog.showOpenDialog({
  //     properties: ['openFile']
  //   }, function(files) {
  //     if (files) {
  //       console.log(`Fichier sélectionné : ${files[0]}`)
  //     }
  //   })
  // })
