import request from '@/router/axios'
//请求水果机赔率
export function fetchList(obj) {
    return request({
        url: '/slotGame/skSlotFruitsolt/listSkSlotFruitsolt',
        method: 'post',
        data: obj
    })
}
// 提交水果机 概率
export function summitOddsApi(obj) {
  return request({
    url: '/slotGame/skSlotFruitsolt/updateSkSlotFruitsolt',
    method: 'post',
    data: obj
  })
}
