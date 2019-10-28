import request from '@/router/axios'
//广告位列表
export function fetchList(obj) {
  return request({
    url: '/bms/skAdvModel/listPage',
    method: 'post',
    data: obj
  })
}

//
export function editDisplay(obj) {
  return request({
    url: '/bms/skAdv/editDisplay',
    method: 'put',
    data: obj
  })
}
//新增广告位
export function addSkAdv(obj) {
  return request({
    url: '/bms/skAdv/addSkAdv',
    method: 'post',
    data: obj
  })
}
//广告位编辑
export function editSkAdv(obj) {
  return request({
    url: '/bms/skAdv/editSkAdv',
    method: 'put',
    data: obj
  })
}
//广告列表
export function listPage(obj) {
  return request({
    url: '/bms/skAdvDetailModel/listPage',
    method: 'post',
    data: obj
  })
}

//所有广告位
export function listSkAdv(obj) {
  return request({
    url: '/bms/skAdv/listSkAdv',
    method: 'post',
    data: obj
  })
}


//添加广告
export function addAdvDetail(obj) {
  return request({
    url: '/bms/skAdvDetail/addAdvDetail',
    method: 'post',
    data: obj
  })
}

//修改广告
export function editAdvDetail(obj) {
  return request({
    url: '/bms/skAdvDetail/editAdvDetail',
    method: 'put',
    data: obj
  })
}

//删除广告
export function delAdvDetail(id) {
  return request({
    url: '/bms/skAdvDetail/delAdvDetail/'+id,
    method: 'put',
  })
}

//启动
export function putAdv(id) {
  return request({
    url: '/bms/skAdvDetail/putAdv/'+id,
    method: 'put',
  })
}


//暂停
export function stopAdv(id) {
  return request({
    url: '/bms/skAdvDetail/stopAdv/'+id,
    method: 'put',
  })
}
