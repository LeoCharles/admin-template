import request from '@/utils/request'

// 兑换券模块中的请求
export function getRechargeList(params) {
  return request({
    url: '/list',
    method: 'get',
    params
  })
}
