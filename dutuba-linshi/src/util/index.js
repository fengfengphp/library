/**
 * 空函数
 * 用于默认函数引用判断
 * @author mutoe <mutoe@foxmail.com>
 * @returns {Function} () => {}
 */
export const noop = () => {}

/**
 * 判断终端类型
 * @author jsonleex <jsonlseex@163.com>
 */
export const detectOS = () => {
  const u = navigator.userAgent

  /* eslint-disable one-var */
  const isMobile = !!u.match(/AppleWebKit.*Mobile.*/),
    /* 移动端 */
    isIPad = u.indexOf('iPad') > -1,
    isIPhone = u.indexOf('iPhone') > -1,
    isWebApp = u.indexOf('Safari') === -1,
    isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
    isWechat = u.toLowerCase().indexOf('micromessenger') > -1,
    /* pc 端 */
    isIE = u.indexOf('Trident') > -1,
    isOpera = u.indexOf('Presto') > -1,
    isChorme = u.indexOf('AppleWebKit') > -1,
    isFirefix = u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1

  return {
    isMobile,
    isWechat,
    OS: (() => {
      if (isMobile) {
        if (isIOS) return 'IOS'
        if (isIPad) return 'iPad'
        if (isIPhone) return 'IOS'
        if (isAndroid) return 'Android'
      } else {
        if (isIE) return 'IE'
        if (isOpera) return 'Opera'
        if (isChorme) return 'Chorme'
        if (isFirefix) return 'Firefix'
      }
    })(),
    versions: (() => {
      return {
        /* 是否为移动终端 */
        mobile: isMobile,

        /* 是否为iPhone或者QQHD浏览器 */
        iPhone: isIPhone,
        /* android终端或uc浏览器 */
        android: isAndroid,

        /* ios终端 */
        ios: isIOS,
        /* 是否iPad */
        iPad: isIPad,

        /* 是否 web 程序，没有头部与底部 */
        webApp: isWebApp,

        /* IE内核 */
        trident: isIE,
        /* opera内核 */
        presto: isOpera,
        /* 苹果、谷歌内核 */
        webKit: isChorme,
        /* 火狐内核 */
        gecko: isFirefix,
      }
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
  }
}



