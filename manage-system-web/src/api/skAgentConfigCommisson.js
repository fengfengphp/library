import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/bms/skAgentConfigCommisson/commonpage',
        method: 'get',
        params: query
    })
}

export function all() {
    return request({
        url: '/bms/skAgentConfigCommisson/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/bms/skAgentConfigCommisson/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/bms/skAgentConfigCommisson/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/bms/skAgentConfigCommisson/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/bms/skAgentConfigCommisson',
        method: 'put',
        data: obj
    })
}
