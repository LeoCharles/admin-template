import request from '@/utils/request'

// 订单模块中的请求
export function getOrderList(params) {
  return request({
    url: '/list',
    method: 'get',
    params
  })
}
