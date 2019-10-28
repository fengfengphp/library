import request from '@/router/axios'


export function fetchList(obj) {
  return request({
    url: '/bms/skPromoteCourse/select/page',
    method: 'post',
    data: obj
  })
}

export function addObj(obj) {
    return request({
      url: '/bms/skPromoteCourse/addPromoteCourse',
      method: 'post',
      data: obj
    })
  }

  export function delObj(id) {
    return request({
      url: '/bms/skPromoteCourse/delPromoteCourse/'+id,
      method: 'delete',
    })
  }


  
  export function editObj(params) {
    return request({
      url: '/bms/skPromoteCourse/editPromoteCourse',
      method: 'put',
      data: params
    })
  }


  