let popupMenu = document.querySelector('#headerBurgerBtn')
let popupMenuClose = document.querySelector('#popupMenuClose')

popupMenu.addEventListener('click', function () {
  if (document.getElementById('popupMenu').className === 'pop-up-menu') {
    document.getElementById('popupMenu').className = 'pop-up-menu__show'
  }
})

popupMenuClose.addEventListener('click', function () {
  if (document.getElementById('popupMenu').className === 'pop-up-menu__show') {
    document.getElementById('popupMenu').className = 'pop-up-menu'
  }
})
