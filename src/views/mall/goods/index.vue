<template>
  <div class="goods">
    商品管理
  </div>
</template>

<script>
import { getOrderList } from '@/api/order'
import table from '@/mixins/table.js'
export default {
  name: 'GoodsIndex',
  mixins: [table],
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      this.isLoading = true
      getOrderList(this.formData).then(res => {
        this.tableData = res.data.items
        this.isLoading = false
        this.totalCount = res.data.items.length
      })
    },
    searchData() {
      this.getTableData()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
