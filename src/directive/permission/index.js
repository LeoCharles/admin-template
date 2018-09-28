import permission from './permission'

// 使用自定义指令 实现按钮级权限
const install = Vue => {
  Vue.directive('permission', permission)
}
if (window.Vue) {
  window['permission'] = permission
  Vue.use(install); // eslint-disable-line
}

permission.install = install
export default permission
