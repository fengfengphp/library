import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/admin/skUserGoogleAuthenticator/page',
        method: 'get',
        params: query
    })
}

export function putObj(obj) {
  return request({
    url: '/admin/skUserGoogleAuthenticator',
    method: 'put',
    data: obj
  })
}

export function delObj(id) {
    return request({
        url: '/admin/skUserGoogleAuthenticator/' + id,
        method: 'delete'
    })
}

export function addObj(obj) {
  return request({
    url: '/admin/skUserGoogleAuthenticator/',
    method: 'post',
    data: obj
  })
}

export function postObj(obj) {
    return request({
        url: '/admin/skUserGoogleAuthenticator/exempt',
        method: 'post',
        data: obj
    })
}

export function exempt(userId) {
  return request({
    url: '/admin/skUserGoogleAuthenticator/exempt/'+userId,
    method: 'get'
  })
}
