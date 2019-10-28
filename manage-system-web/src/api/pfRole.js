import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/admin/pfRole/',
        method: 'get',
        params: query
    })
}

export function addObj(obj) {
    return request({
        url: '/admin/pfRole/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/admin/pfRole/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/admin/pfRole/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/admin/pfRole',
        method: 'put',
        data: obj
    })
}

export function updateRoleMenus(roleId,menuIds) {
  return request({
    url: '/admin/pfRole/updateRoleMenus/'+roleId,
    method: 'put',
    data: menuIds
  })
}

export function updateRoleResource(roleId,resourceIds) {
  return request({
    url: '/admin/pfRole/updateRoleResource/'+roleId,
    method: 'put',
    data: resourceIds
  })
}

export function all() {
  return request({
    url: '/admin/pfRole/all',
    method: 'get'
  })
}

export function selectByUserId(userId) {
  return request({
    url: '/admin/pfRole/selectByUserId/'+userId,
    method: 'get'
  })
}

export function updateUserRole(userId,roleIds) {
  return request({
    url: '/admin/pfRole/updateUserRole/'+userId,
    method: 'put',
    data: roleIds
  })
}

