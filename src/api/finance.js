import request from '@/utils/request'

// 财务管理模块中的请求
export function getRechargeList(params) {
  return request({
    url: '/list',
    method: 'get',
    params
  })
}
