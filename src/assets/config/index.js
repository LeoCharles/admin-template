// 通用配置文件
const ORDER_STATUS = [
  {
    label: '所有状态',
    value: ''
  },
  {
    label: '待付款',
    value: '1'
  },
  {
    label: '待确认',
    value: '2'
  },
  {
    label: '待收货',
    value: '3'
  },
  {
    label: '已收货',
    value: '4'
  }
]

const PAY_TYPE = [
  {
    label: '支付宝',
    value: '1'
  },
  {
    label: '微信',
    value: '2'
  },
  {
    label: '银联',
    value: '3'
  }
]

export {
  ORDER_STATUS,
  PAY_TYPE
}