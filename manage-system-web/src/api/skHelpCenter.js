import request from '@/router/axios'
//根据帮助类型分页查询
export function fetchList(obj) {
    return request({
        url: '/bms/skHelpCenter/page',
        method: 'post',
        data: obj
    })
}
//添加
export function addSkHelpCenter(obj) {
  return request({
    url: '/bms/skHelpCenter/addSkHelpCenter',
    method: 'post',
    data: obj
  })
}


//删除
export function deleteSkHelpCenter(id) {
  return request({
      url: '/bms/skHelpCenter/delSkHelpCenter/'+id,
      method: 'delete',
  })
}

//修改
export function editSkHelpCenter(obj) {
    return request({
        url: '/bms/skHelpCenter/editSkHelpCenter',
        method: 'put',
        data: obj
    })
  }