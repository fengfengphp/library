// 安卓 和ios 判断 ，感觉比较实用
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  console.log('isIOS');
} else if (/(Android)/i.test(navigator.userAgent)) {
  console.log('isAndroid');
} else {
  console.log('isPC');
}

// pc端 和 移动端判断
function isPC() {
  /*true则pc，false则mobile*/
  let u = navigator.userAgent;
  let Agents = ["Android", "iPhone", "webOS", "BlackBerry", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  let flag = true;
  for (let i = 0; i < Agents.length; i++) {
    if (u.indexOf(Agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

// 判断多种访问终端
let browser = {
  versions: function () {
    let u = navigator.userAgent, app = navigator.appVersion;
    return {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信
      qq: u.match(/\sQQ/i) == " qq" //是否QQ
    };
  }(),
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
