import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/bms/skBanWords/commonpage',
        method: 'get',
        params: query
    })
}

export function all() {
    return request({
        url: '/bms/skBanWords/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/bms/skBanWords/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/bms/skBanWords/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/bms/skBanWords/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/bms/skBanWords',
        method: 'put',
        data: obj
    })
}
