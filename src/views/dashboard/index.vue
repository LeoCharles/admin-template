<template>
  <div class="dashboard-container">
    <div>
      <h3 class="title">当日数据</h3>
      <panel-group @panelClick="handlePanelClick"/>
    </div>
  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  },
  methods: {
    handlePanelClick(type) {
      console.log(type)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.dashboard-container {
  .title {
    font-size: 20px;
    color: #333;
  }
}

</style>
