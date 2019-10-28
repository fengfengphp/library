/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

import request from '@/router/axios'
import qs from 'qs'
//添加群成员
export function addGroupMemberApi(obj) {
  // let qsObj =  qs.stringify(obj);
  return request({
    url: `/bms/skChatGroup/addgroupMember`,
    method: 'post',
    data: obj
  })
}
//删除群成员
export function deleteGroupMemberApi(obj,) {
  let qsObj =  qs.stringify(obj);
  return request({
    url: `/bms/skChatGroup/delgroupMember?${qsObj}`,
    method: 'post',
    data: obj
  })
}
//批量删除群成员
export function batchDeleteGroupMemberApi(obj) {
  return request({
    url: `/bms/skChatGroup/batchDelgroupMember`,
    method: 'post',
    data: obj
  })
}
batchDeleteGroupMemberApi
//查询所有机器人
export function getRobotApi() {
  return request({
    url: '/bms/members/selectfromRobbot',
    method: 'post',
  })
}

//查询所有群主
export function getRobotGroupOwer() {
  return request({
    url: '/bms/members/selectfromGroupOwer',
    method: 'post',
  })
}
//查询群其他消息
export function getLeftGroupMsg(id) {
  return request({
    url: `/bms/skChatGroup/getChatGroupOtherInformation?id=${id}`,
    method: 'post',
  })
}

export function fetchList(obj) {
    return request({
      url: '/bms/skRedpacketController/pageSend',
      method: 'post',
      data: obj
    })
  }

  export function fetchLists(obj) {
    return request({
      url: '/bms/skRedpacketController/pageGrab',
      method: 'post',
      data: obj
    })
  }

  export function getList(obj) {
    return request({
      url: '/bms/skChatGroup/page',
      method: 'post',
      data: obj
    })
  }

  export function groupMigration(id){
    return request({
      url: '/bms/skChatGroup/moveGroupInformation?id='+id,
      method: 'post',
    })
  }


  




export function putObj(obj,id) {
  return request({
    url: '/bms/skRuleBomb/update/'+id,
    method: 'post',
    data: obj
  })
}

export function addObj(obj,id) {
  return request({
    url: '/bms/skRuleBomb/update/'+id,
    method: 'post',
    data: obj
  })
}

export function up(id) {
  return request({
    url: '/bms/skChatGroup/upOrderNum/'+id,
    method: 'get'
  })
}


export function down(id) {
  return request({
    url: '/bms/skChatGroup/downOrderNum/'+id,
    method: 'get'
  })
}
//查询免死
export function selectfromDeath() {
  return request({
    url: '/bms/members/selectfromDeath',
    method: 'post'
  })
}

export function selectfromRobbot() {
  return request({
    url: '/bms/members/selectfromRobbot',
    method: 'post'
  })
}


export function skRuleBombpage(obj) {
  return request({
    url: '/bms/skRuleBomb/page',
    method: 'post',
    data: obj
  })
}

export function pageGroupUser(obj) {
  return request({
    url: '/bms/skChatGroup/pageGroupUser',
    method: 'get',
    params: obj
  })
}

export function robotList(id) {
  return request({
    url: '/bms/skChatGroup/robotList?groupId='+id,
    method: 'post',
    data: {groupId:id}
  })
}
export function robotLastList(id) {
  return request({
    url: '/bms/skChatGroup/robotLastList?groupId='+id,
    method: 'post',
    data: {groupId:id}
  })
}

export function freerList(id) {
  return request({
    url: '/bms/skChatGroup/freerList?groupId='+id,
    method: 'post',
    data: {groupId:id}
  })
}

export function baoshun(id) {
  return request({
    url: '/bms/skChatGroup/baoshun/'+id,
    method: 'get',
  })
}

export function fuli(id) {
  return request({
    url: '/bms/skChatGroup/fuli/'+id,
    method: 'get',
  })
}

export function ban(id) {
  return request({
    url: '/bms/skChatGroup/skChatGroupNograb?groupId='+id,
    method: 'post',
  })
}


export function baoshunque(obj,id) {
  return request({
    url: '/bms/skChatGroup/baoshun/'+id,
    method: 'put',
    data: obj
  })
}

export function fulique(obj,id) {
  return request({
    url: '/bms/skChatGroup/fuli/'+id,
    method: 'put',
    data: obj
  })
}

export function banque(obj,id) {
  return request({
    url: '/bms/skChatGroup/skRedbonusNograb/'+id,
    method: 'post',
    data: obj
  })
}

export function addObjs(obj) {
  return request({
    url: '/bms/skChatGroup/add',
    method: 'post',
    data: obj
  })
}

export function updateObjs(obj) {
  return request({
    url: '/bms/skChatGroup/update/',
    method: 'post',
    data: obj
  })
}

export function delObjs(id) {
  return request({
    url: '/bms/skChatGroup/delgroup?groupId='+id,
    method: 'post'
  })
}




export function grouptimelist(id) {
  return request({
    url: '/bms/skChatGroup/selectSkChatGroupRobotTime?groupId='+id,
    method: 'post',
    data: {groupId:id}
  })
}


export function updategrouptimelist(obj) {
  return request({
    url: '/bms/skChatGroup/updateSkChatGroupRobotTime',
    method: 'post',
    data: obj
  })
}

export function changeGroupShutup(id) {
  return request({
    url: '/bms/skChatGroup/groupStop?groupId='+id,
    method: 'post',
    data: {groupId:id}
  })
}

//设置群密码
export function setGroupPwd(obj) {
  return request({
    url: '/bms/skChatGroup/setGroupPwd',
    method: 'post',
    data: obj
  })
}

//获取密码
export function viewGroupPwd(obj) {
  return request({
    url: '/bms/skChatGroup/viewGroupPwd',
    method: 'post',
    data: obj
  })
}




























