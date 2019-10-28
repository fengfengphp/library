import request from '@/router/axios'

export function fetchList(obj) {
    return request({
        url: '/bms/skRobotManageModel/page',
        method: 'post',
        data: obj
    })
}

