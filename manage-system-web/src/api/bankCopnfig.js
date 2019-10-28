import request from '@/router/axios'

export function fetchList(obj) {
  return request({
    url: '/bms/recharge/skFinanceBankPayee/select/page',
    method: 'post',
    data: obj
  })
}


export function editSkBank(obj) {
    return request({
      url: '/bms/recharge/skFinanceBankPayee/edit',
      method: 'post',
      data: obj
    })
  }

  export function setObj(id) {
    return request({
      url: '/bms/recharge/skFinanceBankPayee/set/'+id,
      method: 'post'
    })
  }
  
  export function addSkBank(obj) {
    return request({
      url: '/bms/recharge/skFinanceBankPayee/insert',
      method: 'post',
      data: obj
    })
  }

  export function delObj(id) {
    return request({
      url: '/bms/recharge/skFinanceBankPayee/del/'+id,
      method: 'post',
    })
  }

  export function selectEnablebank(){
    return request({
      url: '/bms/recharge/skFinanceBankPayee/selectEnablebank',
      method: 'post',
    })
  }