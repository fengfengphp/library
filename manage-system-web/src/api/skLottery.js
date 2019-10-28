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
//增加 转盘活动
export function addLotteryApi(obj) {
  return request({
    url: '/promotion/skLottery/addLottery',
    method: 'post',
    data: obj
  })
}
//删除 转盘活动
export function deleteLotteryApi(obj) {
  return request({
    url: `/promotion/skLottery/delLottery/${obj}`,
    method: 'post',
    data: obj
  })
}
//修改 转盘活动
export function editLotteryApi(obj) {
  return request({
    url: '/promotion/skLottery/updateLottery',
    method: 'post',
    data: obj
  })
}
//查询 转盘活动
export function queryLotteryApi(obj) {
  return request({
    url: '/promotion/skLottery/listLottery',
    method: 'post',
    data: obj
  })
}

//查询 赔率
export function queryOddsApi(obj) {
  return request({
    url: `/promotion/skLottery/findByLotteryId/${obj}`,
    method: 'post',
    data: obj
  })
}
//修改 赔率
export function editOddsApi(obj,id) {
  return request({
    url: `/promotion/skLottery/updateItem/${id}`,
    method: 'post',
    data: obj
  })
}
//查询 抽奖次数配置
export function queryTimesApi(obj) {
  return request({
    url: `/promotion/skLottery/findAllthreshold/${obj}`,
    method: 'post',
    data: obj
  })
}
//编辑 抽奖次数配置
export function editTimesApi(obj,id) {
  return request({
    url: `/promotion/skLottery/updateThreshold/${id}`,
    method: 'post',
    data: obj
  })
}
