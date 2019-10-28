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

import { baseUrl, khglUrl, dicUrl } from '@/config/env'
import request from '@/router/axios'
import { userInfo, tableData } from '@/mock/user'
import { menu, menuAll } from '@/mock/menu'
export const loginByUsername = (params) => {
  return request({
    url: '/auth/oauth/token',
    headers: {
      'Authorization':  `Basic ${window.$app.$store.state.common.webData.website_client_id}`,
      'tenant':params.tenant
    },
    method: 'post',
    params: params
  })
}

export function mobileLogin(params) {
  return request({
    url: '/auth/mobile/token',
    headers: {
      'Authorization': `Basic ${window.$app.$store.state.common.webData.website_client_id}`,
      'tenant':params.tenant
    },
    method: 'post',
    params: params
  })
}

export const getUserInfo = () => {
  return request({
    url: '/admin/pfUser/info',
    method: 'get'
  })
}

export const logout = (accesstoken, refreshToken) => {
  return request({
    url: '/auth/authentication/removeToken',
    method: 'get',
    params: { accesstoken, refreshToken }
  })
}
