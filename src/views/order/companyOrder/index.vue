<template>
  <div class="company-order ">
    <!-- 查询表单 -->
    <el-form
      ref="formData"
      :model="formData"
      class="search-form"
      inline
      label-width="100px">
      <div class="search-form__inline">
        <el-form-item
          prop="id"
          label="客户ID：">
          <el-input
            v-model="formData.id"/>
        </el-form-item>
        <el-form-item
          prop="user"
          label="客户账号：">
          <el-input
            v-model="formData.user"/>
        </el-form-item>
        <el-form-item
          prop="oid"
          label="公司名称">
          <el-input
            v-model="formData.oid"/>
        </el-form-item>
      </div>
      <div class="search-form__inline">
        <el-form-item
          prop="id"
          label="状态：">
          <el-select
            v-model="formData.status"
            clearable
            filterable>
            <el-option
              v-for="(item,index) in options.status"
              :value="item.value"
              :key="index"
              :label="item.label" />
          </el-select>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="手机号：">
          <el-input
            v-model="formData.phone"
            placeholder="请输入手机号"/>
        </el-form-item>
      </div>
      <div class="search-form__inline">
        <el-form-item
          prop="id"
          label="下单时间：">
          <el-date-picker
            v-model="formData.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
        </el-form-item>
        <div class="search-form__btn">
          <el-button
            type="primary"
            @click="searchData">查询</el-button>
        </div>
      </div>
    </el-form>

    <div class="table-container">
      <!-- 数据表格 -->
      <el-table
        v-loading="isLoading"
        :data="tableData"
        class="data-table"
        element-loading-text="加载中..."
        border
        fit
        highlight-current-row>
        <el-table-column
          align="center"
          label="订单ID"
          prop="oid"
          width="95"/>
        <el-table-column
          align="center"
          label="客户ID"
          prop="cid"
          width="95"/>
        <el-table-column
          label="客户账号"
          prop="name"
          align="center"/>
        <el-table-column
          label="下单时间"
          prop="time"
          align="center"/>
        <el-table-column
          label="订单状态"
          align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status | typeFilter">{{ scope.row.status | statusFilter }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="收货人"
          prop="receiver"
          align="center"/>
        <el-table-column
          label="手机号"
          prop="phone"
          align="center"/>
        <el-table-column
          label="收货地址"
          prop="address"
          width="200"
          align="center"/>
        <el-table-column
          label="操作"
          width="110"
          align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="viewDetail(scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        :current-page="pageIndex"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :total="totalCount"
        class="pagination"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="sizeChange"
        @current-change="pageChange"
      />
    </div>

    <!-- 详情弹框 -->
    <el-dialog
      :visible.sync="showDetailDialog"
      width="70%"
      title="订单详情">
      <div>
        <h3>客户信息</h3>
        <el-table
          :data="detailData"
          border
          fit>
          <el-table-column
            label="客户ID"
            prop="id"
            align="center"/>
          <el-table-column
            label="客户账号"
            prop="id"
            align="center"/>
          <el-table-column
            label="公司名称"
            prop="id"
            align="center"/>
        </el-table>
      </div>
      <div>
        <h3>商品信息</h3>
        <el-table
          :data="detailData"
          border
          fit>
          <el-table-column
            label="商品ID"
            prop="id"
            align="center"/>
          <el-table-column
            label="商品名称"
            prop="id"
            align="center"/>
          <el-table-column
            label="颜色"
            prop="id"
            align="center"/>
          <el-table-column
            label="属性"
            prop="id"
            align="center"/>
          <el-table-column
            label="单价"
            prop="id"
            align="center"/>
          <el-table-column
            label="数量"
            prop="id"
            align="center"/>
          <el-table-column
            label="总价"
            prop="id"
            align="center"/>
        </el-table>
      </div>
      <div>
        <h3>订单信息</h3>
        <el-table
          :data="detailData"
          border
          fit>
          <el-table-column
            label="订单ID"
            prop="id"
            align="center"/>
          <el-table-column
            label="下单时间"
            prop="id"
            align="center"/>
          <el-table-column
            label="订单状态"
            prop="id"
            align="抵用金额"/>
          <el-table-column
            label="折扣"
            prop="id"
            align="center"/>
          <el-table-column
            label="实付金额"
            prop="id"
            align="center"/>
          <el-table-column
            label="支付方式"
            prop="id"
            align="center"/>
          <el-table-column
            label="收货人"
            prop="id"
            align="center"/>
          <el-table-column
            label="联系方式"
            prop="id"
            align="center"/>
          <el-table-column
            label="收获地址"
            prop="id"
            align="center"/>
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getOrderList } from '@/api/order'
import { ORDER_STATUS } from '@/assets/config'
import table from '@/mixins/table.js'

export default {
  name: 'CompanyOrder',
  mixins: [table],
  data() {
    return {
      formData: {},
      options: {
        status: ORDER_STATUS
      },
      tableData: null,
      isLoading: false,
      detailData: null
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

<style lang="scss">
</style>
