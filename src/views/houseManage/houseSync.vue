/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-07-11 13:49:21
 * @Last Modified by: chudequan
 * @Last Modified time: 2018-11-08 10:51:47
 */

 <template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClickTab" class="page_tabs">
      <el-tab-pane v-for="(item,index) in tabMapOptions" :label="item" :key='index' :name="item">
      </el-tab-pane>
      <div class="tools_box">
        <el-button size="small" type="success" icon="el-icon-upload" @click="syncItems('on')">发布</el-button>
        <el-button size="small" type="danger" icon="el-icon-remove" @click="syncItems('off')">撤销</el-button>
      </div>
      <el-form class="model-search clearfix" :inline="true" size="small">
        <el-form-item>
          <area-select v-model="searchParams.cityArea" placeholder="请选择城市" :filterable="true" :showAllLevels="false" :level="0" class="item-select"></area-select>
        </el-form-item>
        <el-form-item>
          <el-select size="small" v-model="searchParams.houseStatus" filterable clearable placeholder="房间状态" class="item-select">
            <el-option label="已出租" :value="1"></el-option>
            <el-option label="未出租" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select size="small" v-model="searchParams.houseType" filterable clearable placeholder="房间类型" class="item-select">
            <el-option label="普通" :value="0"></el-option>
            <el-option label="金融" :value="1"></el-option>
            <el-option label="飞虎队" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select size="small" v-model="searchParams.publishStatus" filterable clearable placeholder="麦邻发布状态" class="item-select">
            <el-option label="麦邻未发布" :value="0"></el-option>
            <el-option label="麦邻已发布" :value="1"></el-option>
            <el-option label="麦邻发布中" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select size="small" v-model="searchParams.saltedFishStatus" filterable clearable placeholder="闲鱼发布状态" class="item-select">
            <el-option label="闲鱼未发布" :value="0"></el-option>
            <el-option label="闲鱼已发布" :value="1"></el-option>
            <el-option label="闲鱼发布中" :value="2"></el-option>
            <el-option label="闲鱼发布失败" :value="9"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchParams.provider" size="small" placeholder="房源提供者" style="width:120px" />
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="el-icon-search" @click="searchParam">查询</el-button>
          <el-button size="small" icon="el-icon-remove-outline" @click="searchParam('clear')">清空</el-button>
        </el-form-item>
        <div>
          <el-form-item>
            <el-input size="small" v-model="searchParams.organizationName" clearable placeholder="组织名称" class="item-select"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input size="small" v-model="searchParams.mobileOrName" clearable placeholder="手机号/姓名" class="item-select"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input size="small" v-model="searchParams.keywords" clearable placeholder="公寓/小区" class="item-select"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input size="small" v-model="searchParams.roomCode" clearable placeholder="房源编码" class="item-select"></el-input>
          </el-form-item>
          <el-form-item>
            <el-date-picker
              v-model="dateTime"
              type="daterange"
              size="small"
              align="left"
              key="dateTime"
              style="width: 360px;"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              @change="changeDate">
            </el-date-picker>
          </el-form-item>
        </div>
      </el-form>
      <GridUnit
        ref="houseSyncGrid"
        :columns="colModels"
        :formOptions="searchParams"
        :url="url"
        :showSelection="true"
        :dataMethod="method"
        :selection-key="`roomCode`"
        :height="tableHeight"
        @selection-change="handleSelectionChange">
        <template slot="slot_popover" slot-scope="scope">
          <el-popover v-if="scope.row.idlefishStatus === `发布失败` || scope.row.publishStatus === `发布失败` " trigger="hover" placement="top">
            <p>发布失败原因: {{ scope.row.failReason }}</p>
            <div slot="reference">
              <el-tag :type="(scope.row.idlefishStatus|| scope.row.publishStatus) | renderStatusType">
                {{(scope.row.idlefishStatus || scope.row.publishStatus) | renderStatusValue}}
              </el-tag>
            </div>
          </el-popover>
          <el-tag v-else :type="(scope.row.idlefishStatus || scope.row.publishStatus) | renderStatusType">
            {{scope.row.idlefishStatus || scope.row.publishStatus | renderStatusValue}}
          </el-tag>
        </template>
        <el-table-column slot="selection" type="selection">
        </el-table-column>
      </GridUnit>
    </el-tabs>
    <el-dialog class="select-dialog" :title='`选择${dialogTitle}平台`' :visible.sync="dialogVisible" width="450px">
      <p>已选择{{selectedItems.length}}条数据，请选择{{dialogTitle}}平台</p>
      <div class="select-platform-container clearfix">
        <div class="left">
          <input type="checkbox" v-model="publishSelect.mlzf" id="mlRent" />
          <label for="mlRent">
            <div class="ml-selectName" v-bind:class="{changeBackground:publishSelect.mlzf}">麦邻租房</div>
            <div class="ml-selectStatus">
              <i class="el-icon-check" v-show="publishSelect.mlzf"></i>
            </div>
          </label>
          <el-select v-show="publishSelect.mlzf && dialogTitle === '发布'" class="item-select" v-model="sourceInfo" filterable remote placeholder="照片提供者" :remote-method="fetchFlyTigerList" :loading="loading" :clearable="true" size="small">
            <el-option v-for="item in filterManagerList" :key="item.id" :label="item.name" :value="item.id">
              <span style="float: left">{{ item.name }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.mobile }}</span>
            </el-option>
          </el-select>
        </div>
        <div class="right">
          <input type="checkbox" v-model="publishSelect.idlefish" id="idleFishRent" />
          <label for="idleFishRent">
            <div class="ml-selectName" v-bind:class="{changeBackground:publishSelect.idlefish}">闲鱼租房</div>
            <div class="ml-selectStatus">
              <i class="el-icon-check" v-show="publishSelect.idlefish"></i>
            </div>
          </label>
        </div>
      </div>
      <span class="tips" v-show="dialogTitle === '发布'">温馨提示：飞虎队房源需填写照片提供者</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" size="small" @click="gotoHouseAsync">{{dialogTitle === "撤销"?"确定":"发布"}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import GridUnit from '@/components/GridUnit/grid'
import { fhdAuditQueryCityManagerApi } from '@/api/auditCenter'
import { houseAsyncApi, publishHouseApi } from '@/api/houseManage'
import areaSelect from '@/components/AreaSelect'
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
  name: 'houseSync',
  components: {
    GridUnit,
    areaSelect
  },
  filters: {
    renderStatusType(status) {
      const statusMap = {
        '已发布': 'success',
        '发布中': 'primary',
        '发布失败': 'danger',
        '下架中': 'warning',
        '未发布': 'info'
      }
      return statusMap[status] || 'info'
    },
    renderStatusValue(status) {
      return status || '未知'
    }
  },
  data() {
    return {
      tabMapOptions: ['整租', '合租', '集中式'],
      activeName: '整租',
      dateTime: [],
      pickerOptions,
      searchParams: {
        houseRentType: 1,
        houseStatus: 0,
        houseType: '',
        publishStatus: '',
        organizationName: '',
        keywords: '',
        mobileOrName: '',
        cityId: '',
        cityArea: [],
        roomCode: ''
      },
      selectedItems: [],
      colModels: [
        { slot: 'selection' },
        { prop: 'organizationName', label: '组织名称' },
        { prop: 'address', label: '房源位置', width: 200 },
        { prop: 'roomName', label: '公寓/小区-房间', width: 200 },
        { prop: 'houseType', label: '房源类型', width: 150 },
        { prop: 'roomCode', label: '房源编码', width: 100 },
        { prop: 'rent', label: '房价(元/月)', width: 100, align: 'right' },
        { prop: 'name', label: '姓名', width: 100 },
        { prop: 'mobile', label: '手机号', width: 150 },
        { prop: 'userType', label: '用户类型', width: 100 },
        { prop: 'provider', label: '房源提供者' },
        { prop: 'createTimestamp', label: '创建时间', width: 150, filter: 'parseTime' },
        {
          prop: 'roomStatus',
          label: '房间状态',
          width: 100,
          type: 'status',
          fixed: 'right',
          unitFilters: {
            renderStatusType(status) {
              const statusMap = {
                '已出租': 'success',
                '未出租': 'info'
              }
              return statusMap[status] || 'info'
            },
            renderStatusValue(status) {
              return status || '未知'
            }
          }
        },
        {
          prop: 'publishStatus',
          label: '麦邻租房',
          width: 100,
          type: 'status',
          fixed: 'right',
          unitFilters: {
            renderStatusType(status) {
              const statusMap = {
                '已发布': 'success',
                '未发布': 'info',
                '发布中': 'primary'
              }
              return statusMap[status] || 'info'
            },
            renderStatusValue(status) {
              return status || '未知'
            }
          }
        },
        { prop: 'idlefishStatus', label: '闲鱼租房', width: 100, slotName: 'slot_popover', fixed: 'right' },
        { prop: 'operation', label: '操作记录', width: 180, fixed: 'right' }
      ],
      tableHeight: 300,
      url: houseAsyncApi.defaultOptions.requestUrl,
      method: houseAsyncApi.defaultOptions.method,
      dialogVisible: false,
      publishSelect: {
        mlzf: true,
        idlefish: true
      },
      dialogTitle: '',
      loading: false,
      sourceInfo: '',
      cityManagerList: [],
      filterManagerList: []
    }
  },
  mounted() {
    /* 表格高度控制 */
    this.$nextTick(() => {
      const offsetTop = 240
      const pagenationH = 64
      const containerPadding = 20
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
  computed: {
    tableStyle: function() {
      return {
        width: '100%',
        height: this.tableHeight + 'px'
      }
    }
  },
  methods: {
    // 查询
    searchParam(type) {
      if (type === 'clear') {
        this.dateTime = []
        this.searchParams = {
          houseStatus: '',
          houseType: '',
          publishStatus: '',
          organizationName: '',
          keywords: '',
          mobileOrName: '',
          cityId: '',
          cityArea: [],
          roomCode: ''
        }
      }
      this.searchParams.houseRentType = this.activeName === '整租' ? 1 : (this.activeName === '合租' ? 2 : 0)
      // 解决watch执行顺序
      this.$nextTick(() => {
        this.$refs.houseSyncGrid.searchHandler()
      })
    },
    // 日期选择
    changeDate(value) {
      this.searchParams.createTimestampStart = value ? value[0] : ''
      this.searchParams.createTimestampEnd = value ? value[1] : ''
    },
    // tabs切换
    handleClickTab(tab) {
      this.searchParam('clear')
    },
    // 选择列表
    handleSelectionChange(list) {
      this.$nextTick(() => {
        this.selectedItems = this.$refs.houseSyncGrid.multipleSelectionAll || []
      })
    },
    // 选择数据
    syncItems(type = 'on') {
      const typeConfig = {
        'on': {
          title: '发布'
        },
        'off': {
          title: '撤销'
        }
      }
      if (this.selectedItems.length === 0) {
        this.$message.error(`请选择需要${typeConfig[type].title}的房源`)
        return false
      }
      const pendingRomms = this.selectedItems.filter(item => item.idlefishStatus === '发布中')
      if (pendingRomms.length > 0) {
        this.$message.error(`发布中的房源不能进行${typeConfig[type].title}`)
        return false
      }
      const unfilterItem = this.selectedItems.filter(item => item.idlefishStatus === type || item.publishStatus === type)
      if (unfilterItem.length !== 0) {
        this.$message.error(`已${typeConfig[type].title}的房源不能再${typeConfig[type].title}`)
        return false
      }
      this.dialogVisible = true
      this.dialogTitle = typeConfig[type].title
      this.publishSelect.mlzf = false
      this.publishSelect.idlefish = false
    },
    // 发布、撤销
    gotoHouseAsync() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const roomCodes = this.selectedItems.map(item => item.roomCode)
      const platform = []
      for (var i in this.publishSelect) {
        if (this.publishSelect[i]) {
          platform.push(i)
        }
      }

      let params = {
        platforms: platform,
        roomCodeList: roomCodes
      }

      if (this.dialogTitle === '发布') {
        const manage = this.filterManagerList.filter(item => item.id === this.sourceInfo)
        if (manage.length) {
          params = Object.assign(params, {
            picProviderId: this.sourceInfo,
            picProviderName: manage[0].name
          })
        }
      }
      publishHouseApi(params, this.dialogTitle === '发布' ? 1 : 2).then(response => {
        loading.close()
        this.$notify({
          title: '成功',
          message: '操作成功',
          type: 'success',
          duration: 2000
        })
        this.searchParam()
      }).catch(() => {
        loading.close()
      })
    },
    fetchFlyTigerList(query) {
      if (query !== '') {
        this.loading = true
        if (this.cityManagerList.length) {
          this.loading = false
          this.filterManagerList = this.cityManagerList.filter(item => {
            return (item.name.toLowerCase().includes(query.toLowerCase()) || item.mobile.includes(query))
          })
        } else {
          fhdAuditQueryCityManagerApi().then((res) => {
            this.loading = false
            if (res.code === '0' && res.data) {
              this.cityManagerList = res.data
              this.filterManagerList = this.cityManagerList.filter(item => {
                return (item.name.toLowerCase().includes(query.toLowerCase()) || item.mobile.includes(query))
              })
            }
          })
        }
      } else {
        this.filterManagerList = []
      }
    }
  },
  watch: {
    'publishSelect.mlzf': function(val) {
      if (!val && this.dialogTitle === '发布') {
        this.sourceInfo = ''
      }
    },
    'searchParams.cityArea': function(val) {
      if (val && val[1]) {
        this.searchParams.cityId = val[1]
      } else {
        this.searchParams.cityId = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.item-select {
  width: 130px;
}
.select-dialog {
  .dialog-footer {
    .tips {
      position: absolute;
      bottom: 15px;
      left: 15px;
      font-size: 14px;
      color: #999;
    }
  }
}
.select-platform-container {
  .left {
    margin-left: 30px;
  }

  .right {
    margin-right: 30px;
  }

  input[type="checkbox"] {
    display: none;
  }

  label {
    display: block;
    width: 120px;
    height: 30px;
    margin-bottom: 15px;
  }
}
.ml-selectStatus {
  width: 40px;
  height: 30px;
  margin-top: -30px;
  font-size: 25px;
  color: #ffa500;
  float: right;
  border: 0.5px solid #e4e7ed;
  text-align: center;
  line-height: 30px;
}
.ml-selectName {
  background-color: #ebeef5;
  width: 80px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  line-height: 30px;
}
.changeBackground {
  background-color: #ffa500;
  color: #ffffff;
}
//隐藏原生复选框
#mlRent {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}
.tools_box {
  position: absolute;
  top: -50px;
  right: 0;
  z-index: 9;
}
</style>
<style>
  .page_tabs .el-tabs__content {
    overflow: initial;
  }
</style>
