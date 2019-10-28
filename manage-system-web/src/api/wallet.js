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
    url: '/bms/finance/user/page',
    method: 'post',
    data: obj
  })
}

export function queryAccountFlow(obj) {
  return request({
    url: '/bms/finance/accountflow/page',
    method: 'post',
    data: obj
  })
}

export function rechargeByHand(obj) {
  return request({
    url: '/bms/finance/rechargeByHand',
    method: 'post',
    data: obj
  })
}

export function adjustBalanceByHand(obj) {
  return request({
    url: '/bms/finance/adjustBalanceByHand',
    method: 'post',
    data: obj
  })
}

export function fetchBillTypeList() {
  return request({
    url: '/bms/finance/billType/all/list',
    method: 'get'
  })
}
