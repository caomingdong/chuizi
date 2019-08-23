/**
 *
 * 媒体查询设置
 */

;(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth
      if (!clientWidth) return
      // 设置设计稿的宽度clientWidth为750
      if (clientWidth >= 414) {
        docEl.style.fontSize = '16px'
      } else {
        // 设置设计稿的宽度clientWidth为750
        docEl.style.fontSize = 16 * (clientWidth / 414) + 'px'
      }
    }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
