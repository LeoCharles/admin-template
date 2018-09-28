<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div v-if="!isCollapse" class="logo">后台管理系统</div>
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>

</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    // 路由
    routes() {
      return this.$router.options.routes
    },
    // 是否折叠
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
