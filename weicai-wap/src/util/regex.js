
//判断手机号
export function judgePhoneNum (value) {
  var phoneTest =  /^1[3456789]\d{9}$/;
  return phoneTest.test(value)
}
//判断银行卡号（只判断了有多少位）
export function judgeBankNum (value) {
  if(value.length == 16 || value.length==17|| value.length==18 || value.length==19){
      return true
  }
  return false
}

