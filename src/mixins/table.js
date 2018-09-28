export default {
  data() {
    return {
      tableData: [],
      originTableData: [],
      pageSizes: [10, 20, 50],
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0, // 表格总共有多少行,
      isLocalPaging: false, // 是否本地分页
      showDetailDialog: false // 是否显示详情弹框
    }
  },
  methods: {
    // 重置表单并移除验证
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 监听分页器每页条数变化
    sizeChange(size) {
      console.log('size: ', size)
      this.pageIndex = 1
      let bool = false
      if (isNaN(size)) {
        this.pageSize = this.totalCount
        bool = true
      } else {
        this.pageSize = size
      }
      if (this.isLocalPaging) {
        this.localPage(bool)
      } else {
        this.getTableData()
      }
    },
    // 监听分页器当前页变化
    pageChange(index) {
      this.pageIndex = index
      if (this.isLocalPaging) {
        this.localPage()
      } else {
        this.getTableData()
      }
    },
    // 本地分页
    localPage(bool = false) {
      const size = this.pageSize
      const index = this.pageIndex
      if (bool) {
        this.tableData = this.originTableData.slice()
      } else {
        this.tableData = this.originTableData.slice(
          (index - 1) * size,
          size * index
        )
      }
    },
    // 删除表格数据
    deleteItem(row) {
      this.$confirm('确认删除吗, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.deleteAction(row)
        })
        .catch(() => {
          this.$msg(`取消删除`, 'info')
        })
    },
    // 真正的删除动作，在各个组件中具体定义
    deleteAction(row) {},
    // 查看详情
    viewDetail(row) {
      this.showDetailDialog = true
    }
  }
}
