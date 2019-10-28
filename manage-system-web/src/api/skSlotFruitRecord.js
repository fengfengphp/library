import request from '@/router/axios'

export function fetchList(Obj) {
    return request({
        url: '/slotGame/skSlotFruitRecord/listSkSlotFruitRecord/page',
        method: 'post',
        data: Obj
    })
}



