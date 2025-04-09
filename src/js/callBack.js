let callBack = document.querySelector('#headerCallBackBtn')
let callbackClose = document.querySelector('#modalCallbackClose')
let popupCallback = document.querySelector('#popupCallbackBtn')

callBack.addEventListener('click', function () {
  if (document.getElementById('modalCallBack').className === 'modal-callback') {
    document.getElementById('modalCallBack').className = 'modal-callback__show'
  }
})

popupCallback.addEventListener('click', function () {
  if (document.getElementById('modalCallBack').className === 'modal-callback') {
    document.getElementById('modalCallBack').className = 'modal-callback__show'
  }
})

callbackClose.addEventListener('click', function () {
  if (
    document.getElementById('modalCallBack').className ===
    'modal-callback__show'
  ) {
    document.getElementById('modalCallBack').className = 'modal-callback'
  }
})
