<template>
  <div class="company-data">
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
            v-model="formData.id"
            placeholder="请输入客户ID"/>
        </el-form-item>
        <el-form-item
          prop="user"
          label="账号：">
          <el-input
            v-model="formData.user"
            placeholder="请输入账号"/>
        </el-form-item>
        <el-form-item
          prop="cid"
          label="公司名称">
          <el-input
            v-model="formData.name"
            placeholder="请输入公司名称"/>
        </el-form-item>
      </div>
      <div class="search-form__inline">
        <el-form-item
          prop="contact"
          label="联系人：">
          <el-input
            v-model="formData.contact"
            placeholder="请输入联系人"/>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="手机号：">
          <el-input
            v-model="formData.phone"
            placeholder="请输入手机号"/>
        </el-form-item>
        <div class="search-form__btn">
          <el-button
            type="primary"
            @click="searchData">查询</el-button>
          <el-button
            type="primary"
            @click="handleAdd">新增</el-button>
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
          label="客户ID"
          prop="oid"
          width="95"/>
        <el-table-column
          label="客户账号"
          prop="name"
          align="center"/>
        <el-table-column
          align="center"
          label="公司名称"
          prop="cid"
          width="95"/>
        <el-table-column
          label="折扣"
          prop="discount"
          align="center"/>
        <el-table-column
          label="联系人"
          prop="receiver"
          align="center"/>
        <el-table-column
          label="手机号"
          prop="phone"
          align="center"/>
        <el-table-column
          label="职务"
          prop="address"
          width="200"
          align="center"/>
        <el-table-column
          label="社会信用代码"
          prop="cid"
          align="center"/>
        <el-table-column
          label="营业执照"
          prop="cid"
          align="center"/>
        <el-table-column
          label="操作"
          width="120"
          align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="viewDetail(scope.row)">开通账号权限</el-button>
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

    <!-- 新增 -->
    <!-- <el-dialog
      :visible.sync="showAddDialog"
      width="50%"
      title="企业充值">
      <el-form
        :model="rechargeForm"
        label-width="100px"
        class="dialog-form">
        <el-form-item label="客户ID">
          <el-input v-model="rechargeForm.name"/>
        </el-form-item>
        <el-form-item label="客户账号">
          <el-input v-model="rechargeForm.region"/>
        </el-form-item>
        <el-form-item label="公司名称">
          <el-input v-model="rechargeForm.type"/>
        </el-form-item>
        <el-form-item label="剩余余额">
          <el-input v-model="rechargeForm.type"/>
        </el-form-item>
        <el-form-item label="充值金额">
          <el-input v-model="rechargeForm.type"/>
        </el-form-item>
        <el-form-item>
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="submitRecharge">提交</el-button>
            <el-button
              size="mini"
              type="info"
              @click="showRechargeDialog = false">取消</el-button>
          </template>
        </el-form-item>
      </el-form>
    </el-dialog> -->

  </div>
</template>

<script>
import { getOrderList } from '@/api/order'
import table from '@/mixins/table.js'

export default {
  name: 'CompanyData',
  mixins: [table],
  data() {
    return {
      formData: {},
      tableData: null,
      isLoading: false
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
    // 查询数据
    searchData() {
      this.getTableData()
    },
    // 新增数据
    handleAdd() {

    }
  }
}
</script>

<style lang="">
</style>
