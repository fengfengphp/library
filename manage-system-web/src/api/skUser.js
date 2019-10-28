import request from '@/router/axios'

export function fetchList(query) {
    return request({
        url: '/admin/pfUser/page',
        method: 'get',
        params: query
    })
}

export function all() {
    return request({
        url: '/admin/pfUser/all',
        method: 'get'
    })
}

export function addObj(obj) {
    return request({
        url: '/admin/pfUser/',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/admin/pfUser/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/admin/pfUser/' + id,
        method: 'delete'
    })
}

export function putObj(obj) {
    return request({
        url: '/admin/pfUser',
        method: 'put',
        data: obj
    })
}


export function fetchmanagerList(query) {
    return request({
        url: '/admin/pfUser/pagebyclientId',
        method: 'get',
        params: query
    })
}


export function adduserRole(query) {
    return request({
        url: '/bms/members/batchRegistered',
        method: 'post',
        data: query
    })
}
