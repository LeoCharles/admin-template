<template>
  <div class="dashboard-container">
    <!-- 当日数据 -->
    <div>
      <h3>当日数据</h3>
      <div>数据</div>
    </div>
    <!-- 当日异常订单 -->
    <div>
      <h3>当日异常订单</h3>
      <div>数据</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
}
</style>
