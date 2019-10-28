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

export function fetchList(obj) {
  return request({
    url: '/bms/skPayChannel/pcpage',
    method: 'post',
    data: obj
  })
}

export function fetchPageList(obj) {
  return request({
    url: '/bms/skPayChannel/payChannelTypeSorts/page',
    method: 'post',
    data: obj
  })
}

export function updateSkPayChannel(obj) {
  return request({
    url: '/bms/skPayChannel/updateSkPayChannel',
    method: 'post',
    data: obj
  })
}

export function addSkPayChannel(obj) {
  return request({
    url: '/bms/skPayChannel/addSkPayChannel',
    method: 'post',
    data: obj
  })
}
//编辑支付通道
export function editSkPayChannel(obj) {
  return request({
    url: '/bms/skPayChannel/updateSkPayChannel',
    method: 'post',
    data: obj
  })
}

export function delObj(id) {
  return request({
    url: '/bms/skPayChannel/delSkPayChannel?id='+id,
    method: 'post',
    params: id
  })
}

export function payChannelTypes(id) {
  return request({
    url: '/bms/skPayChannel/payChannelTypes?id='+id,
    method: 'post',
    params: id
  })
}

export function top(id,type){
  return request({
    url: '/bms/skPayChannel/toping?id='+id+'&type='+type,
    method: 'post',
    params: id
  })
}



