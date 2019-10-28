import request from '@/router/axios'

export function allData(query) {
  return request({
    url: '/bms/globalreport/allData',
    method: 'get',
    params: query
  })
}
