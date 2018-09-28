// 全局过滤器
export function typeFilter(status) {
  const typeMap = {
    1: '',
    2: 'info',
    3: 'warning',
    4: 'success'
  }
  return typeMap[status]
}

export function statusFilter(status) {
  const statusMap = {
    1: '待付款',
    2: '待确认',
    3: '待收货',
    4: '已收货'
  }
  return statusMap[status]
}

export function examineFilter(status) {
  const examineMap = {
    2: '待审核',
    3: '通过',
    4: '拒绝'
  }
  return examineMap[status]
}
