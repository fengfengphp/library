import request from '@/router/axios'
// 增加活动
export function addActivity(obj) {
  return request({
    url: '/promotion/skPromot/add',
    method: 'post',
    data: obj
  })
}
// 删除活动
export function deleteActivity(id) {
  return request({
    url: `/promotion/skPromot/deleteByPk/${id}`,
    method: 'post'
  })
}
// 修改活动
export function updateActivity(obj) {
  return request({
    url: '/promotion/skPromot/update',
    method: 'post',
    data: obj
  })
}
// 分页查询活动
export function queryActivity(obj) {
  return request({
    url: '/promotion/skPromot/page',
    method: 'post',
    data: obj
  })
}

// 增加阀值
export function addRange(obj) {
  return request({
    url: '/promotion/skPromotItem/add',
    method: 'post',
    data: obj
  })
}
// 删除阀值
export function deleteRange(id) {
  return request({
    url: `/promotion/skPromotItem/deleteByPK/${id}`,
    method: 'post'
  })
}
// 修改阀值
export function uploadRange(obj) {
  return request({
    url: '/promotion/skPromotItem/update',
    method: 'post',
    data: obj
  })
}

// 查询阀值
export function queryRange(id) {
  return request({
    url: `/promotion/skPromotItem/findByPromotId/${id}`,
    method: 'post'
  })
}

export function fetchLotteryList() {
  return request({
    url: `/promotion/skLottery/list`,
    method: 'post'
  })
}

// 查询webData数据
export function getWebDataApi() {
  return request({
    url: '/admin/skConfig/getWebsiteConfig',
    method: 'get'
  })
}
