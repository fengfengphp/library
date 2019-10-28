import request from '@/router/axios'

export function fetchDatatree(query) {
    return request({
        url: '/admin/pfMenu/treetable',
        method: 'get',
        params: query
    })
}

export function fetchRoleDatatree(roleId) {
  return request({
    url: '/admin/pfMenu/allTree/'+roleId,
    method: 'get'
  })
}

export function fetchRoleMenus(roleId) {
  return request({
    url: '/admin/pfMenu/hasMenus/'+roleId,
    method: 'get'
  })
}

export function all() {
    return request({
        url: '/admin/pfMenu/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/admin/pfMenu/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/admin/pfMenu/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/admin/pfMenu/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/admin/pfMenu',
        method: 'put',
        data: obj
    })
}
