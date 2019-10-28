import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/bms/skAgentDomain/page',
        method: 'post',
        data: query
    })
}

export function all() {
    return request({
        url: '/bms/skAgentDomain/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/bms/skAgentDomain/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/bms/skAgentDomain/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/bms/skAgentDomain/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/bms/skAgentDomain',
        method: 'put',
        data: obj
    })
}
