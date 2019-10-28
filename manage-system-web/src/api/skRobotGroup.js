import request from '@/router/axios'

import qs from 'qs'

export function fetchList(obj) {
    return request({
        url: '/bms/skRobotGroup/select/page',
        method: 'post',
        data: obj
    })
}


export function addRobotGroup(obj) {
    return request({
        url: '/bms/skRobotGroup/addRobotGroup',
        method: 'post',
        data: obj
    })
}

export function editRobotGroup(obj) {
    return request({
        url: '/bms/skRobotGroup/editRobotGroup',
        method: 'put',
        data: obj
    })
}

//组成员分页
export function pageRobotGroupMember(obj) {
    return request({
        url: '/bms/skRobotGroup/robotGroupMember/page',
        method: 'post',
        data: obj
    })
}


//删除机器人组
export function delRobotGroup(obj) {
    return request({
        url: `/bms/skRobotGroup/delRobotGroup/${obj}`,
        method: 'delete',
        data: obj
    })
}


//删除群成员
export function delRobotGroupMember(obj,) {
    let qsObj =  qs.stringify(obj);
   
    return request({
      url: `/bms/skRobotGroup/delRobotGroupMember?${qsObj}`,
      method: 'delete',
      data: obj
    })
  }



  //未绑定的机器人
  export function queryRobot(obj) {
    return request({
        url: '/bms/skRobotGroup/queryRobot',
        method: 'post',
        data: obj
    })
}

//批量充值
export function batchRecharge(obj) {
    return request({
        url: '/bms/skRobotGroup/batchRecharge',
        method: 'put',
        data: obj
    })
}



  //查询在组中的成员
  export function getRobotInfoUserId(robotGroupId) {
    return request({
        url: '/bms/skRobotGroup/getRobotInfoUserId/'+robotGroupId,
        method: 'post',
        data: robotGroupId
    })
}


//绑定组成员信息
export function addBatchBindRobot(obj) {
    return request({
        url: '/bms/skRobotGroup/addBatchBindRobot',
        method: 'post',
        data: obj
    })
}

//查询所有 组
export function querySkRobotGroup(obj) {
    return request({
        url: '/bms/skRobotGroup/querySelectorOption',
        method: 'post',
        data: obj
    })
}





  








