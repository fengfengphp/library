import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/bms/skAgentConfigLevel/commonpage',
        method: 'get',
        params: query
    })
}

export function all() {
    return request({
        url: '/bms/skAgentConfigLevel/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/bms/skAgentConfigLevel/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/bms/skAgentConfigLevel/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/bms/skAgentConfigLevel/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/bms/skAgentConfigLevel',
        method: 'put',
        data: obj
    })
}
