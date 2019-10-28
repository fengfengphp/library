(function flexible (window, document) {
  const docEl = document.documentElement
  const onerem = docEl.clientWidth / 10;
  function setRemUnit () {
      // 判断是否是移动端
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          docEl.style.fontSize = onerem + 'px'
      } else {
          docEl.style.fontSize = 50 + 'px'
      }
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
