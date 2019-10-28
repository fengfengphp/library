import request from '@/router/axios'
export function GetMenu() {
  return request({
    url: '/admin/pfMenu/userMenu',
    method: 'get'
  })
}

export function fetchTree(query) {
  return request({
    url: '/bms/skUserRank/tree',
    method: 'get',
    params: query
  })
}

export function findChild(query) {
  return request({
    url: '/bms/skUserRank/tree/child',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/menu/',
    method: 'post',
    data: obj
  })
}

export function getObj(obj) {
  return request({
    url: '/bms/personreport/findByUserId',
    method: 'post',
    data: obj
  })
}

export function delObj(id) {
  return request({
    url: '/admin/menu/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/menu/',
    method: 'put',
    data: obj
  })
}

export function getUserBaseInfo(obj) {
  return request({
    url: '/admin/user/baseInfo/'+obj.userId,
    method: 'get'
  })
}

export function getUserBaseInfoNoId() {
  return request({
    url: '/admin/user/baseInfo',
    method: 'get'
  })
}
