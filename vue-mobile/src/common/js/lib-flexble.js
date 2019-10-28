(function flexible (window, document) {
  var docEl = document.documentElement
  // set 1rem = viewWidth / 10
  function setRemUnit () {
    docEl.style.fontSize = 75 + 'px'
  }
  setRemUnit()
  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })
}(window, document))
