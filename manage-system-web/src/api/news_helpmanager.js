import request from '@/router/axios'
// 增加帮助
export function addHelpApi(obj) {
  return request({
    url: '/bms/skHelpCenter',
    method: 'post',
    data: obj
  })
}
// 修改帮助
export function editHelpApi(obj) {
  return request({
    url: '/bms/skHelpCenter',
    method: 'PUT',
    data: obj
  })
}
// 删除帮助
export function deleteHelpApi(obj) {
  return request({
    url: `/bms/skHelpCenter/${obj}`,
    method: 'DELETE',
    data: obj
  })
}
// 查询帮助
export function queryHelpApi(obj) {
  return request({
    url: '/bms/skHelpCenter/page',
    method: 'POST',
    data: obj
  })
}
