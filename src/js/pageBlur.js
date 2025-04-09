let pageBlurClick = document.querySelector('#pageBlur')
let callBackBlur = document.querySelector('#headerCallBackBtn')
let callbackCloseBlur = document.querySelector('#modalCallbackClose')
let popupCallBackblur = document.querySelector('#popupCallbackBtn')
let feedBackBlur = document.querySelector('#headerChatBtn')
let feedbackCloseBlur = document.querySelector('#modalBtnClose')
let popupFeedbackBlur = document.querySelector('#popupChatBtn')
let popupMenuBlur = document.querySelector('#headerBurgerBtn')
let popupMenuCloseBlur = document.querySelector('#popupMenuClose')

pageBlurClick.addEventListener('click', function () {
  if (document.getElementById('pageBlur').className === 'page-blur__on') {
    document.getElementById('pageBlur').className = 'page-blur'
  }
})

callBackBlur.addEventListener('click', function () {
  if (document.getElementById('pageBlur').className === 'page-blur') {
    document.getElementById('pageBlur').className = 'page-blur__on'
  }
})

popupCallBackblur.addEventListener('click', function () {
  if (document.getElementById('pageBlur').className === 'page-blur') {
    document.getElementById('pageBlur').className = 'page-blur__on'
  }
})

callbackCloseBlur.addEventListener('click', function () {
  if (document.getElementById('popupMenu').className === 'pop-up-menu__show') {
    document.getElementById('pageBlur').className = 'page-blur__on'
  } else {
    document.getElementById('pageBlur').className = 'page-blur'
  }
})

pageBlurClick.addEventListener('click', function () {
  if (
    document.getElementById('modalCallBack').className ===
    'modal-callback__show'
  ) {
    document.getElementById('modalCallBack').className = 'modal-callback'
  }
})

feedBackBlur.addEventListener('click', function () {
  if (document.getElementById('pageBlur').className === 'page-blur') {
    document.getElementById('pageBlur').className = 'page-blur__on'
  }
})

feedbackCloseBlur.addEventListener('click', function () {
  if (document.getElementById('popupMenu').className === 'pop-up-menu__show') {
    document.getElementById('pageBlur').className = 'page-blur__on'
  } else {
    document.getElementById('pageBlur').className = 'page-blur'
  }
})

popupFeedbackBlur.addEventListener('click', function () {
  if (document.getElementById('pageBlur').className === 'page-blur') {
    document.getElementById('pageBlur').className = 'page-blur__on'
  }
})

pageBlurClick.addEventListener('click', function () {
  if (
    document.getElementById('modalFeedback').className ===
    'modal-feedback__show'
  ) {
    document.getElementById('modalFeedback').className = 'modal-feedback'
  }
})

popupMenuBlur.addEventListener('click', function () {
  if (document.getElementById('pageBlur').className === 'page-blur') {
    document.getElementById('pageBlur').className = 'page-blur__on'
  }
})

popupMenuCloseBlur.addEventListener('click', function () {
  if (document.getElementById('pageBlur').className === 'page-blur__on') {
    document.getElementById('pageBlur').className = 'page-blur'
  }
})

pageBlurClick.addEventListener('click', function () {
  if (document.getElementById('popupMenu').className === 'pop-up-menu__show') {
    document.getElementById('popupMenu').className = 'pop-up-menu'
  }
})
