import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/bms/skRandomRate/commonpage',
        method: 'get',
        params: query
    })
}

export function all() {
    return request({
        url: '/bms/skRandomRate/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/bms/skRandomRate/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/bms/skRandomRate/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/bms/skRandomRate/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/bms/skRandomRate',
        method: 'put',
        data: obj
    })
}
