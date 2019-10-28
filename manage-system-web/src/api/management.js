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

export function fetchList(Obj) {
  return request({
    url: '/bms/members/getUserInformation',
    method: 'post',
    data:Obj
  })
}
export function addObj(Obj) {
  return request({
    url: '/bms/members/batchRegistered',
    method: 'post',
    data:Obj
  })
}
export function updatePwd(Obj) {
  return request({
    url: '/bms/members/resetPasswd',
    method: 'post',
    data:Obj
  })
}
export function updateNick(Obj) {
  return request({
    url: '/bms/members/update',
    method: 'post',
    data:Obj
  })
}
export function shoutUp(Obj){
  return request({
    url:'/bms/members/addandRemoveMemberBan',
    method:'post',
    data:Obj
  })
}
delObj
export function delObj(Obj){
  return request({
    url:'/bms/members/addandRemoveMemberBan',
    method:'post',
    data:Obj
  })
}

export function forbid(Obj){
  return request({
    url:'/bms/members/stopBeaginUser',
    method:'post',
    data:Obj
  })
}
export function changeDeathFlag(id){
  return request({
    url:'/bms/members/changeDeathFlag?id='+id,
    method:'post',
    data:id
  })
}
export function changeRobotFlag(id){
  return request({
    url:'/bms/members/changeRobbotFlag?id='+id,
    method:'post',
    data:id
  })
}
export function changeInNum(id){
  return request({
    url:'/bms/members/changeInnerNum?id='+id,
    method:'post',
    data:id
  })
}
export function changeInviteFlag(Obj){
  return request({
    url:'/bms/members/changeInviteFlag',
    method:'post',
    data:Obj
  })
}

export function updateInvitation(id){
  return request({
    url:'/bms/members/updateInvitation?id='+id,
    method:'post',
    data:id
  })
}

export function banchreflush(obj) {
  return request({
    url: '/bms/members/banchreflush',
    method: 'post',
    data: obj
  })
}

export function postMoveAgentLine(obj){
  return request({
    url: '/bms/skUserRank/updateAgentLine',
    method: 'post',
    data: obj
  })
}

export function setUserAgent(obj){
  return request({
    url: '/bms/skUserRank/agent/update',
    method: 'post',
    data: obj
  })
}

export function getUserRank(obj){
  return request({
    url: '/bms/skUserRank/getUserRank',
    method: 'post',
    data: obj
  })
}

//查询银行卡列表
export function getPaymentType(obj){
  return request({
    url: '/bms/members/getPaymentType',
    method: 'post',
    data: obj
  })
}

//查询用户银行卡
export function listUserBank(userId){
  return request({
    url: '/bms/members/listUserBank/'+userId,
    method: 'post'
  })
}

//修改银行卡
export function editBankMess(obj){
  return request({
    url: '/bms/members/editBankMess',
    method: 'put',
    data: obj
  })
}