import request from '@/router/axios'


//修改发包
export function letContract(obj) {
    return request({
      url: '/bms/skRobotFlock/letContract',
      method: 'put',
      data: obj
    })
  }


  //查询群组信息
export function queryLetContract(obj) {
    return request({
      url: '/bms/skRobotFlock/queryLetContract',
      method: 'post',
      data: obj
    })
  }


  