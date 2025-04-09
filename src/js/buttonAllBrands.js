let contentBrands = document.querySelector('.content__brands')
let myButton = document.querySelector('#brandButton')
let imgButton = document.querySelector('#brandImg')
let textButton = document.querySelector('#brandText')

myButton.addEventListener('click', function () {
  if (
    document.getElementById('brandsId').className ===
    'swiper-wrapper content__brands'
  ) {
    document.getElementById('brandsId').className = 'swiper-wrapper brands_show'
  } else {
    document.getElementById('brandsId').className =
      'swiper-wrapper content__brands'
  }
})

myButton.addEventListener('click', function () {
  if (textButton.textContent === 'Показать все') {
    textButton.textContent = 'Скрыть'
  } else {
    textButton.textContent = 'Показать все'
  }
})

myButton.addEventListener('click', function () {
  if (imgButton.classList.contains('content__button_img')) {
    imgButton.classList.toggle('img_rotate')
  }
})
