import request from '@/utils/request'

// 财务管理模块中的请求
export function getReviewList(params) {
  return request({
    url: '/examinelist',
    method: 'get',
    params
  })
}
