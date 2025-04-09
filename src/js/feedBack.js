let feedBack = document.querySelector('#headerChatBtn')
let feedbackClose = document.querySelector('#modalBtnClose')
let popupFeedback = document.querySelector('#popupChatBtn')

feedBack.addEventListener('click', function () {
  if (document.getElementById('modalFeedback').className === 'modal-feedback') {
    document.getElementById('modalFeedback').className = 'modal-feedback__show'
  }
})

popupFeedback.addEventListener('click', function () {
  if (document.getElementById('modalFeedback').className === 'modal-feedback') {
    document.getElementById('modalFeedback').className = 'modal-feedback__show'
  }
})

feedbackClose.addEventListener('click', function () {
  if (
    document.getElementById('modalFeedback').className ===
    'modal-feedback__show'
  ) {
    document.getElementById('modalFeedback').className = 'modal-feedback'
  }
})
