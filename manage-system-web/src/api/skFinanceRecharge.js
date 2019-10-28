import request from '@/router/axios'
//查询所有线下充值
export function fetchList(obj) {
    return request({
        url: '/bms/recharge/skFinanceRecharge/select/page',
        method: 'post',
        data: obj
    })
}
//审核
export function toExamine(obj) {
  return request({
    url: '/bms/recharge/skFinanceRecharge/auditor',
    method: 'post',
    data: obj
  })
}


//查询所有线上充值
export function fetchOnlineList(obj) {
  return request({
      url: '/bms/recharge/skUserPayChannelRankModel/page',
      method: 'post',
      data: obj
  })
}

// 查詢未處理的記錄
export function countUnprocessedRecord() {
  return request({
    url: '/bms/recharge/skFinanceRecharge/bankTransfer/CountUnprocessed',
    method: 'post'
  })
}

export function queryParents(userId){
  return request({
    url: '/bms/recharge/skUserPayChannelRankModel/queryParents/'+userId,
    method: 'post'
  })
}

export function queryCount(obj){
  return request({
    url: '/bms/recharge/skUserPayChannelRankModel/queryCount',
    method: 'post',
    data: obj
 })
}

export function queryPayThird(){
  return request({
    url: '/bms/recharge/skUserPayChannelRankModel/queryPayThird',
    method: 'post',
 })
}

export function editPayOrder(id, code) {
  return request({
    url: '/bms/recharge/skUserPayChannelRankModel/editPayOrder/' + id,
    method: 'post',
    params: {
      code: code
    }
  })
}
