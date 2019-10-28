import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/admin/pfResource/commonpage',
        method: 'get',
        params: query
    })
}

export function fetchAllRoleResource(roleId) {
  return request({
    url: '/admin/pfResource/selectByRole/'+roleId,
    method: 'get'
  })
}

export function fetchHasRoleResource(roleId) {
  return request({
    url: '/admin/pfResource/hasResources/'+roleId,
    method: 'get'
  })
}

export function all() {
    return request({
        url: '/admin/pfResource/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/admin/pfResource/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/admin/pfResource/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/admin/pfResource/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/admin/pfResource',
        method: 'put',
        data: obj
    })
}
