<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClickTab" class="page_tabs">
      <el-tab-pane v-for="(item, index) in houseRentTypeList" :key="index" :label="item" :name="item">
      </el-tab-pane>
      <div class="tools_box">
        <el-dropdown class="room-options-dropdown" @command="handleCommand">
          <el-button type="primary" size="small">批量房态管理 <i class="el-icon-arrow-down el-icon--right"></i></el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="2">空房</el-dropdown-item>
            <el-dropdown-item :command="9">已出租无租客</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="primary" size="small" style="margin-left:10px" @click="openRoomDetail(2)">添加合租房源</el-button>
        <el-button type="primary" size="small" @click="openRoomDetail(1)">添加整租房源</el-button>
        <el-button type="primary" size="small" @click="addSubEnvPic">添加小区环境图</el-button>
      </div>
      <el-form :model="roomSearchForm" size="small" :inline="true">
        <el-form-item>
          <area-select v-model="roomSearchForm.cityArea" placeholder="请选择城市" style="width:120px" :filterable="true" :showAllLevels="false" :level="0"></area-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="roomSearchForm.houseType" filterable clearable size="small" placeholder="房源类型" style="width:120px">
            <el-option v-for="(item,index) in houseTypeList" :key="index" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="roomSearchForm.roomStatus" filterable clearable size="small" placeholder="房间状态" style="width:150px">
            <el-option v-for="(statusItem,index) in roomStatusList" :key="index" :label="statusItem.label" :value="statusItem.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="roomSearchForm.orgName" size="small" placeholder="组织名称" style="width:185px" />
        </el-form-item>
        <el-form-item class="house-search-form-group">
          <el-button type="primary" icon="el-icon-search" @click="searchHostingHouseList('search')" class="filter-item">查询</el-button>
          <el-button icon="el-icon-remove-outline" @click="searchHostingHouseList('clear')">清空</el-button>
        </el-form-item>
        <div>
          <el-form-item>
            <el-input v-model="roomSearchForm.roomCode" size="small" placeholder="房源编码" style="width:120px;" class="deal" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="roomSearchForm.provider" size="small" placeholder="房源提供者" style="width:120px" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="roomSearchForm.subdistrictName" size="small" placeholder="公寓/小区" style="width:150px;" />
          </el-form-item>
          <el-form-item>
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
              start-placeholder="录入开始日期"
              end-placeholder="录入结束日期"
              value-format="yyyy-MM-dd"
              :picker-options="pickerOptions"
              @change="changeDate">
            </el-date-picker>
          </el-form-item>
        </div>
      </el-form>
      <GridUnit
        style="margin-top: -15px;"
        ref="hostingHouseList"
        :showRowIndex="false"
        :spanMethod="objectSpanMethod"
        :formOptions="roomSearchForm"
        :url="houstingListUrl"
        :dataMethod="method"
        listField="data.houseList"
        totalField="data.record"
        :columns="colModels"
        :height="tableHeight"
        :showSelection="true"
        :selection-key="`fangyuanCode`"
        @selection-change="handleSelectionChange"
        :dataHandler="dataHandler"
        :border="activeName === '合租'">
        <template slot="index" slot-scope="scope">
          {{scope.row.index + 1}}
        </template>
        <!-- <template slot="checkHoleRooms" slot-scope="scope">
          <el-checkbox v-model="checkedList[scope.$index]" @change="handleCheckHoleRooms(scope.row, scope.$index)"></el-checkbox>
        </template> -->
        <template slot="roomStatus" slot-scope="scope">
          <el-tag :type="[2].includes(scope.row.roomStatus) ? 'success' : ([5, 6, 8, 10].includes(scope.row.roomStatus) ? 'info' : 'danger')">{{scope.row.roomStatus | setRoomStatus(roomStatusList)}}</el-tag>
        </template>
        <template slot="tags" slot-scope="scope">
          <el-tag class="romm-type-tags" v-for="(item,index) in scope.row.tags" :key="index"
            :label="item" :type="item === '金融' ? 'warning' : item === '飞虎队' ? 'success' : 'primary' ">{{item}}</el-tag>
        </template>
        <template slot="operateHosting" slot-scope="scope">
          <el-row>
            <el-button type="primary" size="mini" @click="openRentPayModel(scope.row)">交租方式</el-button>
            <el-button type="primary" size="mini" @click="openCopyItemsModel(scope.row)">复制到</el-button>
            <el-button type="primary" size="mini" @click="openRoomDetail(scope.row)">编辑房间</el-button>
            <el-button type="danger" size="mini" @click="deleteRoom(scope.row)">删除</el-button>
          </el-row>
        </template>
        <el-table-column slot="selection" type="selection" width="50px" align="center" class-name="room-list-selection-td">
        </el-table-column>
        <template slot="operateRecordStr" slot-scope="scope">
          <p>{{scope.row.operator}} {{scope.row.operateTime}}</p>
        </template>
      </GridUnit>
    </el-tabs>
    <el-dialog :title="isEditFlag ? '编辑房间' : '添加房源'" :visible.sync="roomDetailModelVisible" :before-close="checkEditStatus" width="1000px">
      <hosting-room-detail ref="hostingRoomDetail"></hosting-room-detail>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" type="primary" @click="saveRoomDetailData('add')" v-if="!isEditFlag">保存并继续添加</el-button>
        <el-button size="small" type="primary" @click="saveRoomDetailData('close')">{{isEditFlag ? '保 存' : '保存并关闭'}}</el-button>
        <el-button size="small" @click="saveRoomDetailData('clear')">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog title="交租方式" :visible.sync="rentPayModelVisible" :width="curRoomFinanceType !== 2 ? '1030px' : '630px'">
      <el-tabs type="border-card" v-if="activeName === '合租'" v-model="activeRentPayTabName" @tab-click="checkRentPaySaveStatus">
        <el-tab-pane :label="item.roomName" v-for="(item, index) in rentPayList" :key="index" :name="index.toString()">
          <rent-pay-way ref="rentPayWay" :list="rentPayList[index].roomRentTypeList" :curRoomFinanceType="curRoomFinanceType" :baseRentTypeList="baseRentTypeList"></rent-pay-way>
        </el-tab-pane>
      </el-tabs>
      <rent-pay-way v-else-if="activeName === '整租' && rentPayList.length" ref="rentPayWay" :list="rentPayList[0].roomRentTypeList" :curRoomFinanceType="curRoomFinanceType" :baseRentTypeList="baseRentTypeList"></rent-pay-way>
      <span slot="footer">
        <el-button type="primary" size="small" @click="saveEstateRoomRentPayWay">保 存</el-button>
        <el-button @click="rentPayModelVisible = false" size="small">取 消</el-button>
      </span>
    </el-dialog>
    <el-dialog title="复制到" :visible.sync="copyItemsModelVisible" width="600px" class="copy-items-model">
      <room-list-selecter ref="copyItemTo" :roomList="copyItemsRooms" :visible="copyItemsModelVisible">
        <el-card class="head-card">
          <div slot="header" class="clearfix">
            <el-tooltip class="item" effect="dark" placement="top-start">
              <div slot="content">选择复制您要的内容，再选择您要编辑的房间，<br/>这样可以方便您快速批量编辑同类房源</div>
              <span class="head-card-title">复制项目
                <i class="el-icon-warning"></i>
              </span>
            </el-tooltip>
            <div class="check-all">
              <el-form :inline="true" size="mini">
                <el-form-item :label="checkAllCopyItem ? '取消全选' : '全选'">
                  <el-switch v-model="checkAllCopyItem" @change="handleCheckAllChange"></el-switch>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <el-checkbox-group v-model="checkedCopyList">
            <div class="head-check-options" :class="[v.showRoomSelect && activeName === '合租' ? 'especial' : '']" v-for="v in copyOptions" :key="v.val">
              <el-select v-if="v.showRoomSelect && activeName === '合租'" size="mini" v-model="copyItemsParams.rentTypeRoomCode">
                <el-option v-for="item in roomSelectList" :key="item.roomCode" :label="item.roomName" :value="item.roomCode">
                </el-option>
              </el-select>
              <el-checkbox :label="v.val" @change="handleOptionsChange">
                <div class="label">
                  {{v.label}}
                </div>
              </el-checkbox>
            </div>
          </el-checkbox-group>
        </el-card>
        <span slot="card-title">请选择要复制到的房间号</span>
      </room-list-selecter>
      <span slot="footer">
        <el-button size="small" type="primary" @click="saveCopyItems">确 定</el-button>
        <el-button size="small" @click="copyItemsModelVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <updateSubEnvPics
      :type="`total`"
      :is-show="showSubEnvPics"
      :data-list="subEnvData"
      @emitHandleSubEnv="emitHandleSubEnv">
    </updateSubEnvPics>
  </div>
</template>

<script>
import { debounce, deepClone } from '@/utils'
import hostingRoomDetail from './components/hostingRoomDetail'
import updateSubEnvPics from './components/updateSubEnvPics'
import rentPayWay from './components/rentPayWay'
import areaSelect from '@/components/AreaSelect'
import RoomListSelecter from '@/components/RoomListSelecter'
import GridUnit from '@/components/GridUnit/grid'
import {
  hostingRoomDetailApi, hostingRoomRentTypeApi, saveEstateRoomRentPayWayApi, hostingCopyItemsRoomsApi,
  hostingSaveCopyItemsApi, hostingSaveHouseInfoApi, hostingEditHouseInfoApi,
  changeRoomStatusApi, estateDeleteEstateApi
} from '@/api/houseManage'
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
  name: 'hostingList',
  components: {
    updateSubEnvPics,
    hostingRoomDetail,
    rentPayWay,
    areaSelect,
    RoomListSelecter,
    GridUnit
  },
  filters: {
    renderStatusType(status) {
      const statusMap = {
        '可用': 'success',
        '在住': 'primary',
        '维修': 'danger',
        '空脏': 'warning',
        '未发布': 'info'
      }
      return statusMap[status] || 'info'
    },
    renderStatusValue(status) {
      return status || '未知'
    },
    setRoomStatus(val, statusList) {
      const status = statusList.filter(item => item.value === val)
      return status.length ? status[0].label : ''
    }
  },
  data() {
    return {
      pickerOptions,
      dateTime: [],
      subEnvData: [],
      showSubEnvPics: false,
      checkedList: [],
      tableCheckboxList: [],
      roomSearchForm: {
        cityId: '',
        cityArea: [],
        houseType: '',
        roomStatus: '',
        orgName: '',
        subdistrictName: '',
        roomCode: '',
        houseRentType: 1
      },
      houseRentTypeList: ['整租', '合租'],
      activeName: '整租',
      tableHeight: 400,
      houstingListUrl: '/market/fangyuan',
      method: 'queryHostingList',
      selectedRooms: [],
      houseTypeList: [
        { label: '普通', value: 1 },
        { label: '金融', value: 2 },
        { label: '飞虎队', value: 3 }
      ],
      roomStatusList: [
        {
          label: '可用',
          value: 2
        },
        {
          label: '下单未入住',
          value: 3
        },
        {
          label: '在住',
          value: 4
        },
        {
          label: '维修',
          value: 5
        },
        {
          label: '空脏',
          value: 6
        },
        {
          label: '保留',
          value: 7
        },
        {
          label: '预定',
          value: 8
        },
        {
          label: '已出租（无租客）',
          value: 9
        },
        {
          label: '装修中',
          value: 10
        }
      ],
      colModels: [
        { label: '#', slotName: 'index', fixed: 'left', width: 50, align: 'center' },
        // {
        //   prop: 'checkHoleRooms',
        //   label: '',
        //   slotName: 'checkHoleRooms',
        //   width: 50
        // },
        { prop: 'orgName', label: '组织名称', width: 200 },
        { prop: 'addrRegionName', label: '房源位置', width: 180 },
        { prop: 'roomDetailAddress', label: '公寓/小区-房间', width: 180 },
        { prop: 'tags', label: '房源类型', slotName: 'tags', width: 130 },
        { slot: 'selection' },
        { prop: 'roomName', label: '房间' },
        {
          prop: 'roomStatus',
          label: '房间状态',
          slotName: 'roomStatus',
          width: 150
        },
        { prop: 'roomCode', label: '平台房源编码' },
        {
          prop: 'operate',
          label: '设置/操作',
          slotName: 'operateHosting',
          width: '340',
          fixed: 'right'
        },
        { prop: 'provider', label: '房源提供者', width: 100 },
        { prop: 'photoProvider', label: '照片提供者', width: 100 },
        { prop: 'photoOperator', label: '照片操作者', width: 100 },
        { prop: 'sourceAuditor', label: '房源审核者', width: 100 },
        { prop: 'createTimestamp', label: '房源录入时间', width: 100 },
        { prop: 'housingReleaseTimestamp', label: '房源发布时间', width: 100 },
        {
          prop: 'operateRecord',
          label: '操作记录',
          slotName: 'operateRecordStr',
          width: 220
        }
      ],
      roomDetailModelVisible: false,
      rentPayModelVisible: false,
      activeRentPayTabName: '0',
      tempRentPayTabName: '0',
      tempRentPayList: [],
      rentPayList: [],
      baseRentTypeList: [],
      curRoomFinanceType: 1,
      copyItemsModelVisible: false,
      copyOptions: [
        {
          label: '收租方式',
          val: 2
        },
        {
          label: '线下支付方式',
          val: 3
        },
        {
          label: '合同模式',
          val: 5
        },
        {
          label: '能耗费用',
          val: 6
        },
        {
          label: '交租方式',
          val: 1,
          showRoomSelect: true
        },
        {
          label: '房源照片',
          val: 7,
          showRoomSelect: true
        }
      ],
      checkAllCopyItem: false,
      checkedCopyList: [],
      copyItemsRooms: [],
      copyItemRoomList: [],
      roomSelectList: [],
      copyItemsParams: {
        rentTypeRoomCode: '',
        pictureRoomCode: ''
      },
      selectedCopyItemsRooms: [],
      curFangyuanCode: '',
      isEditFlag: false
    }
  },
  computed: {
    allCheckedOptionsList() {
      return this.copyOptions.map((item) => item.val)
    },
    cityArea() {
      return this.roomSearchForm.cityArea
    }
  },
  mounted() {
    const changeTableSize = debounce(() => {
      this.tableHeight = Math.max(document.body.clientHeight - 305, 300)
    }, 100)
    this.$nextTick(() => {
      changeTableSize()
    })
    window.addEventListener('resize', changeTableSize)
  },
  methods: {
    searchParam() {
      this.roomSearchForm.houseRentType = this.activeName === '整租' ? 1 : 2
      // 解决watch执行顺序
      this.$nextTick(() => {
        this.$refs.hostingHouseList.searchHandler()
      })
    },
    handleClickTab(tab) {
      this.searchParam('clear')
      this.roomSearchForm = {
        cityId: '',
        cityArea: [],
        houseType: '',
        roomStatus: '',
        orgName: '',
        subdistrictName: '',
        roomCode: '',
        houseRentType: this.activeName === '整租' ? 1 : 2
      }
    },
    // handleCheckHoleRooms(row, index) {
    //   for (let i = 0; i < row.spanArr; i++) {
    //     this.tableCheckboxList[index + i].isChecked = this.checkedList[index]
    //     this.$refs.hostingHouseList.$refs.gridUnit.toggleRowSelection(this.$refs.hostingHouseList.tableData[index + i], this.checkedList[index])
    //   }
    // },
    // 查询/清空
    searchHostingHouseList(type) {
      if (type === 'clear') {
        for (const key in this.roomSearchForm) {
          this.roomSearchForm[key] = key === 'cityArea' ? [] : ''
        }
        this.dateTime = []
      }
      this.searchParam()
    },
    handleSelectionChange(list) {
      console.log(list)
      this.$nextTick(() => {
        this.selectedRooms = list
        // this.selectedRooms = this.$refs.hostingHouseList.multipleSelectionAll || []
      })
      // if (list.length === this.checkedList.length) {
      //   const checkedList = []
      //   this.checkedList.forEach((item, index) => {
      //     this.tableCheckboxList[index].isChecked = true
      //     checkedList.push(true)
      //   })
      //   this.$set(this, 'checkedList', checkedList)
      // }
      // if (list.length === 0) {
      //   const checkedList = []
      //   this.checkedList.forEach((item, index) => {
      //     this.tableCheckboxList[index].isChecked = false
      //     checkedList.push(false)
      //   })
      //   this.$set(this, 'checkedList', checkedList)
      // }
    },
    // 批量房态管理
    handleCommand(command) {
      let roomStatusParams = {}
      if (typeof command === 'number') {
        if (!this.selectedRooms.length) {
          this.$message.error('请选择需要设置房态的房间')
          return
        }
        roomStatusParams = {
          roomCodes: this.selectedRooms.map(item => item.roomCode),
          roomStatus: command,
          resource: this.roomSearchForm.houseRentType
        }
      } else {
        roomStatusParams = command
      }
      this.$confirm(`已选择${this.selectedRooms.length}条数据，确定更改为【${command * 1 === 2 ? `空房` : `已出租无租客`}】吗`, '批量房态管理', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
        changeRoomStatusApi(roomStatusParams).then((res) => {
          loading.close()
          if (res.code === '0') {
            let message = {}
            if (res.data.success === roomStatusParams.roomCodes.length) {
              message = {
                message: res.message,
                type: 'success'
              }
            } else if (res.data.fail === roomStatusParams.roomCodes.length) {
              message = {
                message: `失败${res.data.fail}个房间`,
                type: 'error'
              }
            } else {
              const status = roomStatusParams.roomStatus === 2 ? '空房' : '已出租无租客'
              message = {
                message: `成功${res.data.success}个房间，失败${res.data.fail}个房间，${res.data.already}个房间已经是${status}状态`
              }
            }
            this.$message(message)
            this.searchParam()
          }
        }).catch(() => {
          loading.close()
        })
      }).catch(() => {})
    },
    // 删除房间
    deleteRoom(row) {
      const h = this.$createElement
      const message = this.roomSearchForm.houseRentType === 1 ? '' : '若删除单个房间请在【编辑房间】里面删除'
      this.$msgbox({
        title: '确认消息',
        message: h('p', null, [
          h('span', null, '确定删除整套房间吗？ '),
          h('span', { style: 'color: red' }, message)
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(action => {
        estateDeleteEstateApi({
          fangyuanCode: row.fangyuanCode
        }).then((res) => {
          if (res.code === '0') {
            this.$message({
              message: res.message,
              type: 'success'
            })
            this.$refs.hostingHouseList.fetchHandler()
          }
        }).catch(err => { console.log(err) })
      })
    },
    // 表格数据合并
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (this.roomSearchForm.houseRentType === 2) {
        if (columnIndex < 5 || column.label === '设置/操作') {
          if (row.spanArr < 1) {
            return {
              rowspan: 0,
              colspan: 0
            }
          } else {
            return {
              rowspan: row.spanArr,
              colspan: 1
            }
          }
        }
      }
    },
    // 表格数据
    dataHandler(data) {
      const tempArr = []
      this.tableCheckboxList = []
      this.checkedList = []
      data = data.filter(item => item.roomList.length > 0)
      data.forEach((item, index) => {
        item.roomList.forEach((v, i) => {
          if (this.activeName === '整租') {
            v.roomName = '整套房间'
          }
          const row = {
            ...item,
            ...v
          }
          this.tableCheckboxList.push({
            fangyuanCode: item.fangyuanCode,
            isChecked: false,
            columnLength: item.roomList.length
          })
          this.checkedList.push(false)
          if (i === 0) {
            row.spanArr = item.roomList.length
            row.index = index
          }
          tempArr.push(row)
        })
      })
      return tempArr
    },
    // 添加修改房间信息
    openRoomDetail(params) {
      this.loading = true
      if (typeof (params) === 'number') {
        this.isEditFlag = false
        this.roomDetailModelVisible = true
        this.$nextTick(() => {
          const roomDetailData = {
            areaCode: ['', '', ''],
            provinceId: null,
            cityId: null,
            regionId: null,
            zoneId: null,
            zoneName: '',
            address: '',
            regionAddressId: '',
            buildingName: '',
            unitCode: '',
            roomNo: '',
            chamberCount: null,
            boardCount: null,
            toiletCount: null,
            houseArea: null,
            houseDirection: null,
            decorationDegree: null,
            floorName: '',
            floorAmount: null,
            contactName: '',
            contactGender: 1,
            contactMobile: null,
            facilityItemsList: [],
            houseDesc: '',
            orgId: '',
            adminUserId: null,
            accountName: '',
            tag: false,
            sourceInfo: '',
            houseRentType: params
          }
          if (params === 1) {
            roomDetailData.pictures = []
          } else {
            roomDetailData.hostingRooms = [{
              roomArea: '',
              roomAttributesList: [],
              roomName: '房间A',
              name: '1',
              pictures: [],
              facilityItemsList: []
            }]
          }
          this.$refs.hostingRoomDetail.setRoomDetailData(roomDetailData)
        })
      } else if (typeof (params) === 'object') {
        hostingRoomDetailApi({
          fangyuanCode: params.fangyuanCode
        }).then((res) => {
          if (res.code === '0') {
            this.isEditFlag = true
            const roomDetailInfo = res.data
            roomDetailInfo.areaCode = [roomDetailInfo.provinceId, roomDetailInfo.cityId, roomDetailInfo.regionId]
            roomDetailInfo.address = roomDetailInfo.subdistrictName ? (roomDetailInfo.subdistrictName + ' - ' + roomDetailInfo.subdistrictAddress) : ''
            roomDetailInfo.facilityItemsList = roomDetailInfo.facilityItems ? roomDetailInfo.facilityItems.split(',') : []
            roomDetailInfo.tag = roomDetailInfo.tag === 1
            roomDetailInfo.houseDesc = roomDetailInfo.houseDesc || ''
            if (roomDetailInfo.houseRentType === 1) {
              roomDetailInfo.pictures = roomDetailInfo.pictures || []
            }
            roomDetailInfo.hostingRooms.forEach((item, index) => {
              item.name = ++index + ''
              item.facilityItemsList = item.facilityItems ? item.facilityItems.split(',') : []
              item.roomAttributesList = item.roomAttributes ? item.roomAttributes.split(',') : []
              item.pictures = item.pictures || []
              item.needCheck = true
            })
            roomDetailInfo.isEditFlag = true
            this.roomDetailModelVisible = true
            this.$nextTick(() => {
              this.$refs.hostingRoomDetail.setRoomDetailData(roomDetailInfo)
            })
          }
        })
      }
    },
    // 保存房源信息
    saveRoomDetailData(type) {
      if (type === 'clear') {
        this.roomDetailModelVisible = false
        return false
      }
      const roomDetailData = this.$refs.hostingRoomDetail.returnRoomDetailData()
      if (!roomDetailData) {
        return false
      }
      const api = roomDetailData.isEditFlag ? hostingEditHouseInfoApi : hostingSaveHouseInfoApi
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      api({
        hostingHouseInfo: JSON.stringify(roomDetailData)
      }).then((res) => {
        loading.close()
        if (res.code === '0') {
          this.$message({
            message: res.message,
            type: 'success'
          })
          if (type === 'add') {
            if (roomDetailData.houseRentType === 1) {
              roomDetailData.pictures = []
            } else {
              roomDetailData.hostingRooms = [{
                roomArea: '',
                roomAttributes: '',
                roomAttributesList: [],
                roomName: '房间A',
                name: '1',
                pictures: [],
                facilityItemsList: []
              }]
            }
            roomDetailData.roomNo = ''
            this.$refs.hostingRoomDetail.setRoomDetailData(roomDetailData)
          } else {
            this.roomDetailModelVisible = false
          }
          this.$refs.hostingHouseList.fetchHandler()
        }
      }).catch(() => {
        loading.close()
      })
    },
    // 检查是否修改房源信息
    checkEditStatus(done) {
      const differentFlag = this.$refs.hostingRoomDetail.checkEditFlag()
      if (differentFlag) {
        this.$confirm('您还有数据未保存, 确认关闭吗？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      } else {
        done()
      }
    },
    // 编辑交租方式
    openRentPayModel(row) {
      hostingRoomRentTypeApi({
        fangyuanCode: row.fangyuanCode
      }).then((res) => {
        res.data.hostingRoomRentType.forEach((item, index) => {
          item.roomRentTypeList.forEach((v, i) => {
            if (v.type === 2) {
              v.serviceFeeType = v.serviceFeeType || 1
              v.serviceChargeType = v.serviceChargeType || 1
            }
          })
        })
        this.curRoomFinanceType = res.data.houseFinanceType
        this.rentPayList = res.data.hostingRoomRentType
        this.baseRentTypeList = res.data.baseRentTypeList
        this.rentPayModelVisible = true
        if (this.activeName === '合租') {
          this.activeRentPayTabName = '0'
          this.tempRentPayTabName = '0'
          this.tempRentPayList = deepClone(res.data.hostingRoomRentType[0].roomRentTypeList)
        }
      })
    },
    // 检查有无修改交租方式
    checkRentPaySaveStatus() {
      const activeTabName = this.activeRentPayTabName
      const list = this.$refs.rentPayWay[Number(this.tempRentPayTabName)].returnRentPayList()
      if (!list || JSON.stringify(this.tempRentPayList) !== JSON.stringify(list)) {
        this.$nextTick(() => {
          this.activeRentPayTabName = this.tempRentPayTabName
        })
        this.$confirm('切换房间会放弃当前的修改，是否确认切换？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$refs.rentPayWay[Number(this.tempRentPayTabName)].resetForm(this.rentPayList[Number(this.tempRentPayTabName)].roomRentTypeList)
          this.activeRentPayTabName = activeTabName
          this.tempRentPayTabName = activeTabName
          this.tempRentPayList = deepClone(this.rentPayList[Number(activeTabName)].roomRentTypeList)
        }).catch((err) => { console.log(err) })
      } else {
        this.tempRentPayTabName = activeTabName
        this.tempRentPayList = deepClone(this.rentPayList[Number(activeTabName)].roomRentTypeList)
      }
    },
    // 保存交租方式
    saveEstateRoomRentPayWay() {
      const list = this.activeName === '整租' ? this.$refs.rentPayWay.returnRentPayList() : this.$refs.rentPayWay[Number(this.activeRentPayTabName)].returnRentPayList()
      if (!list) {
        this.$message.error(`请填写完交租方式再保存`)
        return false
      }
      saveEstateRoomRentPayWayApi({
        roomCode: this.rentPayList[this.activeName === '整租' ? 0 : Number(this.activeRentPayTabName)].roomCode,
        roomRentTypeList: list
      }).then((res) => {
        if (res.code === '0') {
          this.$message({
            message: res.message,
            type: 'success'
          })
          if (this.activeName === '合租') {
            const list = this.$refs.rentPayWay[Number(this.tempRentPayTabName)].returnRentPayList()
            this.rentPayList[Number(this.tempRentPayTabName)].roomRentTypeList = deepClone(list)
            this.tempRentPayList = deepClone(list)
          }
          const rentPayList = this.activeName === '整租' ? this.$refs.rentPayWay : this.$refs.rentPayWay[Number(this.activeRentPayTabName)]
          rentPayList.$refs.financeRentPayForm.clearValidate()
          rentPayList.$refs.defaultRentPayForm.clearValidate()
          // this.rentPayModelVisible = false
        }
      }).catch(err => { console.log(err) })
    },
    // 打开复制到模态框
    openCopyItemsModel(row) {
      this.curFangyuanCode = row.fangyuanCode
      hostingCopyItemsRoomsApi({
        fangyuanCode: row.fangyuanCode
      }).then((res) => {
        this.copyItemsRooms = res.data
        const selectedRows = this.$refs.hostingHouseList.tableData.filter((item) => item.fangyuanCode === row.fangyuanCode)
        this.roomSelectList = selectedRows ? selectedRows[0].roomList : []
        this.copyItemsParams.rentTypeRoomCode = this.roomSelectList[0].roomCode
        this.copyItemsParams.pictureRoomCode = this.roomSelectList[0].roomCode
        this.checkedCopyList = []
        this.handleOptionsChange()
        this.copyItemsModelVisible = true
      })
    },
    // 保存复制到
    saveCopyItems() {
      const params = {
        fromFangyuanCode: this.curFangyuanCode,
        toFangyuanCodes: this.$refs.copyItemTo.returnCheckedList(),
        items: this.checkedCopyList
      }
      if (this.checkedCopyList.includes(1)) {
        params.rentTypeRoomCode = this.copyItemsParams.rentTypeRoomCode
      }
      if (this.checkedCopyList.includes(7)) {
        params.pictureRoomCode = this.copyItemsParams.pictureRoomCode
      }
      hostingSaveCopyItemsApi(params).then((res) => {
        if (res.code === '0') {
          this.$message({
            message: res.message,
            type: 'success'
          })
          this.copyItemsModelVisible = false
        }
      }).catch(err => { console.log(err) })
    },
    // 复制到checkbox选择状态
    handleCheckAllChange(val) {
      this.checkedCopyList = val ? this.allCheckedOptionsList : []
    },
    // 复制到checkbox选择状态
    handleOptionsChange() {
      this.checkAllCopyItem = this.checkedCopyList.length === this.allCheckedOptionsList.length
    },
    // 日期选择
    changeDate(value) {
      this.roomSearchForm.createTimestampStart = value ? value[0] : ''
      this.roomSearchForm.createTimestampEnd = value ? value[1] : ''
    },
    // 添加小区环境图
    addSubEnvPic() {
      if (this.selectedRooms.length === 0) {
        this.$message.error('请选择需要添加小区环境图的房间')
        return
      }
      this.subEnvData = this.selectedRooms
      this.showSubEnvPics = true
    },
    emitHandleSubEnv(data) {
      this.showSubEnvPics = data.isShow || false
      if (data.callback) {
        this.searchParam()
      }
    }
  },
  watch: {
    roomSearchForm: {
      handler: function(val) {
        if (this.roomSearchForm.cityArea && this.roomSearchForm.cityArea[1]) {
          this.roomSearchForm.cityId = this.roomSearchForm.cityArea[1]
        } else {
          this.roomSearchForm.cityId = ''
        }
      }
    },
    cityArea(val) {
      if (val && val[1]) {
        this.roomSearchForm.cityId = val[1]
      } else {
        this.roomSearchForm.cityId = ''
      }
    }
  },
  beforeDestroy() {
    const dialog = document.querySelectorAll('body > .el-dialog__wrapper')
    if (dialog) {
      [].forEach.call(dialog, function(item, index) {
        document.body.removeChild(item)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.copy-items-model {
  .head-card {
    box-shadow: 0 0;
    margin-bottom: 20px;
    .head-card-title {
      i {
        margin-left: 5px;
        color: #409eff;
      }
    }
    .check-all {
      float: right;
      position: relative;
      .el-form-item {
        margin-bottom: 0;
      }
    }
    .head-check-options {
      display: inline-block;
      width: 25%;
      &.especial {
        position: relative;
        width: 50%;
        .el-select {
          position: absolute;
          top: 0;
          left: 24px;
          width: 40%;
          z-index: 10;
        }
        .label {
          width: 170px;
          text-align: right;
        }
      }
    }
  }
}
.romm-type-tags + .romm-type-tags {
  margin-left: 5px;
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

