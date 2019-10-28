import request from '@/router/axios'
export function fetchList(query) {
    return request({
        url: '/admin/skConfig/commonpage',
        method: 'get',
        params: query
    })
}

export function all() {
    return request({
        url: '/admin/skConfig/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/admin/skConfig/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/admin/skConfig/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/admin/skConfig/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/admin/skConfig',
        method: 'put',
        data: obj
    })
}
