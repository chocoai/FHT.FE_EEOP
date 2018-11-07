<template>
  <div class="app-container">
    <div class="model-search clearfix">
      <div>
        <el-select
          size="small" v-model="formData.cityName" placeholder="城市" style="width: 150px;" clearable filterable>
          <el-option v-for="item in cityList" :key="item.cityId"
            :label="item.cityName" :value="item.cityName">
          </el-option>
        </el-select>
        <el-select
          size="small" v-model="formData.deductibleType" placeholder="抵扣类型"
          class="filter-item" style="width: 150px;" clearable filterable>
          <el-option label="房租" value="房租"></el-option>
          <el-option label="水费" value="水费"></el-option>
          <el-option label="电费" value="电费"></el-option>
        </el-select>
        <el-select
          size="small" v-model="formData.triggerType" placeholder="触发类型"
          class="filter-item" style="width: 150px;" clearable filterable>
          <el-option label="注册" value="注册"></el-option>
        </el-select>
        <el-select
          size="small" v-model="formData.status" placeholder="抵扣券状态"
          class="filter-item" style="width: 150px;" clearable filterable>
          <el-option v-for="item in statusList" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-button
          type="primary" size="small"
          icon="el-icon-search" class="filter-item"
           @click.native="searchParam">查询</el-button>
        <el-button
          plain size="small" icon="el-icon-remove-outline"
          @click.native="clearForm">清空</el-button>
      </div>
      <div style="margin-top: 10px;">
        <el-input size="small"
          v-model="formData.couponName" placeholder="抵扣券名称"
          style="width: 269px;"
          @keydown.native.enter="searchParam">
        </el-input>
        <el-date-picker
          v-model="dateTime"
          type="daterange"
          size="small"
          class="filter-item"
          style="width: 360px;"
          align="right"
          key="dateTime"
          unlink-panels
          range-separator="至"
          start-placeholder="创建开始日期"
          end-placeholder="创建结束日期"
          value-format="yyyy-MM-dd"
          :picker-options="pickerOptions"
          @change="changeDate">
        </el-date-picker>
        <el-button
          type="primary" size="small" class="filter-item"
          icon="el-icon-circle-plus-outline"
          @click="openDialog('addEditVoucher', '新增', {})">新增抵扣券</el-button>
        <el-button
          class="filter-item" type="primary"
          size="small" icon="el-icon-upload"
          @click="openDialog('systemVoucher', '人工发放', selections)">人工发放</el-button>
      </div>
    </div>
    <GridUnit
      ref="refGridUnit"
      :columns="colModels"
      :url="gridFetchOptions.url"
      :data-method="gridFetchOptions.method"
      :is-mock="gridFetchOptions.isMock"
      :height="tableHeight"
      :showSelection="true"
      @selection-change="handleSelectionChange"
      :form-options="formData">
      <el-table-column slot="selection" type="selection">
      </el-table-column>
      <template
        slot="handle"
        slot-scope="scope">
        <el-button
          type="primary"
          size="small"
          @click="openDialog('addEditVoucher', '编辑', scope.row)">编辑</el-button>
        <el-button
          type="success"
          size="small"
          @click="openDialog('codeVoucher', '兑换码', scope.row)">兑换码</el-button>
        <el-button
          type="warning"
          size="small">
          启用
        </el-button>
      </template>
    </GridUnit>
    <add-edit-voucher
      ref="addEditVoucher"
      :voucherData="voucherDialog.detailData_addEditVoucher"
      v-if="voucherDialog.show_addEditVoucher"
      @closeVoucher="closeVoucher('addEditVoucher')">
    </add-edit-voucher>
    <code-voucher
      ref="codeVoucher"
      :codeData="voucherDialog.detailData_codeVoucher"
      v-if="voucherDialog.show_codeVoucher"
      @closeVoucher="closeVoucher('codeVoucher')">
    </code-voucher>
    <system-voucher
      ref="systemVoucher"
      :codeData="voucherDialog.detailData_systemVoucher"
      v-if="voucherDialog.show_systemVoucher"
      @closeVoucher="closeVoucher('systemVoucher')">
    </system-voucher>
  </div>
</template>
<script>
import { voucherManageApi } from '@/api/ticketManage'
import { appIconApi } from '@/api/eeop'
import GridUnit from '@/components/GridUnit/grid'
import addEditVoucher from './components/addEditVoucher'
import codeVoucher from './components/codeVoucher'
import systemVoucher from './components/systemVoucher'

const pickerOptions = {
  shortcuts: [{
    text: '最近一周',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近一个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      picker.$emit('pick', [start, end])
    }
  }, {
    text: '最近三个月',
    onClick(picker) {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      picker.$emit('pick', [start, end])
    }
  }]
}

export default {
  name: 'voucherManage',
  components: {
    GridUnit,
    addEditVoucher,
    codeVoucher,
    systemVoucher
  },
  filters: {

  },
  data() {
    return {
      tableHeight: 300,
      dateTime: '',
      pickerOptions,
      cityList: [],
      formData: {
        couponType: 1
      },
      statusList: [{
        label: '未开始',
        value: 0
      }, {
        label: '进行中',
        value: 1
      }, {
        label: '已结束',
        value: 2
      }, {
        label: '已废弃',
        value: 3
      }],
      colModels: [
        { slot: 'selection' },
        { prop: 'couponName', label: '名称' },
        { prop: 'discountAmount', label: '面值', width: 100 },
        { prop: 'fullMoney', label: '起用金额', width: 100 },
        {
          prop: 'useRange',
          label: '抵扣类型',
          width: 100
        },
        { prop: 'couponType', label: '触发条件', width: 100 },
        { prop: 'statusStr', label: '状态', width: 100 },
        { prop: 'totalNum', label: '发放总量' },
        {
          prop: 'createTimeStr',
          label: '创建时间',
          width: 140
        },
        { label: '操作', slotName: 'handle', width: 265, fixed: 'right' }
      ],
      gridFetchOptions: {
        url: voucherManageApi.baseUrl,
        method: voucherManageApi.queryMethod,
        isMock: true
      },
      voucherDialog: {},
      selections: []
    }
  },
  created() {
    appIconApi.cityList().then(response => {
      this.cityList = response.data
    })
  },
  mounted() {
    /* 表格高度控制 */
    this.$nextTick(() => {
      const offsetTop = this.$refs.refGridUnit.$el.offsetTop || 140
      const pagenationH = 55
      const containerPadding = 30
      let temp_height = document.body.clientHeight - offsetTop - pagenationH - containerPadding
      this.tableHeight = temp_height > 300 ? temp_height : 300
      window.onresize = () => {
        return (() => {
          temp_height = document.body.clientHeight - offsetTop - pagenationH - containerPadding
          this.tableHeight = this.tableHeight = temp_height > 300 ? temp_height : 300
        })()
      }
    })
  },
  methods: {
    openDialog(type, dialogtTitle, data = {}) {
      if (type === 'systemVoucher') {
        if (!this.selections.length) {
          this.$message.error('请选择发放的优惠券')
          return false
        }
      }
      this.voucherDialog[`detailData_${type}`] = type === 'systemVoucher' ? {
        dialogtTitle,
        list: data.map(item => {
          return {
            id: item.id,
            couponName: item.couponName
          }
        })
      } : {
        dialogtTitle,
        cityList: this.cityList,
        ...data
      }
      this.$set(this.voucherDialog, `show_${type}`, true)
    },
    closeVoucher(type) {
      this.voucherDialog[`detailData_${type}`] = {}
      this.voucherDialog[`show_${type}`] = false
    },

    // 查询数据
    searchParam() {
      this.$nextTick(() => {
        this.$refs.refGridUnit.searchHandler()
      })
    },
    // 清空
    clearForm() {
      this.formData = {
        couponType: 1
      }
      this.dateTime = []
      this.searchParam()
    },

    // 日期选择
    changeDate(value) {
      this.formData.createStartDate = value ? value[0] : ''
      this.formData.createEndDate = value ? value[1] : ''
    },

    handleSelectionChange(selections) {
      this.selections = selections || []
    }
  }
}
</script>
<style lang="scss">

</style>
