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

export function fetchListuser(query) {
  return request({
    url: '/bms/members/selectSortUser',
    method: 'get',
    params: query
  })
}


export function fetchUser(obj) {
  return request({
    url: '/bms/members/page/seletKindsInnerUsers',
    method: 'post',
    data: obj
  })
}

export function fetchUserpage(obj) {
  return request({
    url: '/bms/members/getUserInformation',
    method: 'post',
    data: obj
  })
}

export function editUsers(obj,type) {
  return request({
    url: '/bms/members/editUsers/'+type,
    method: 'post',
    data: obj
  })
}





