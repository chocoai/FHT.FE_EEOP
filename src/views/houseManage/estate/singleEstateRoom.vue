<template>
  <div class="app-container">
    <el-row class="room-options-row">
      <el-button type="primary" size="small" @click="$router.push({name: '集中式房源'})" icon="el-icon-arrow-left">返回</el-button>
      <el-dropdown @command="handleCommand" class="room-options-dropdown">
        <el-button plain size="small">批量房态管理</el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="2">空房</el-dropdown-item>
          <el-dropdown-item :command="9">已出租无租客</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="primary" size="small" @click="openRoomDetailModel(1)">新建房号</el-button>
      <el-button type="danger" size="small" @click="deleteRoom">删除房号</el-button>
      <template v-if="estateInfo.estateName">
        <span class="estate-title">{{estateInfo.estateName}}</span>
        <span class="estate-address">{{estateInfo.subdistrictName + ' - ' + estateInfo.subdistrictAddress}}</span>
      </template>
    </el-row>
    <el-form class="room-search-form" ref="form" :inline="true" :model="roomSearchForm" size="small">
      <el-form-item class="room-search-form-group">
        <el-select v-model="roomSearchForm.floorId" placeholder="楼层">
          <el-option v-for="item in estateInfo.floors" :key="item.floorId" :label="item.floorName" :value="item.floorId">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="room-search-form-group">
        <el-select v-model="roomSearchForm.roomStatus" placeholder="房间状态">
          <el-option
            v-for="(item, index) in roomStatusList"
            :key="index"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="room-search-form-group">
        <el-input placeholder="房源编码" v-model="roomSearchForm.roomCode"></el-input>
      </el-form-item>
      <el-form-item class="room-search-form-group">
        <el-input placeholder="房号" v-model="roomSearchForm.roomNo"></el-input>
      </el-form-item>
      <el-form-item class="room-search-form-group">
        <el-select v-model="roomSearchForm.tag" placeholder="标签">
          <el-option
            label="飞虎队"
            value="fhd">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="room-search-form-group">
        <el-button type="primary" @click="searchEstateRoomList('search')">查询</el-button>
        <el-button @click="searchEstateRoomList('clear')">清空</el-button>
      </el-form-item>
    </el-form>

    <grid-unit ref="estateRoomList" :url="estateRoomListUrl" listField="data.result" totalField="data.records" :dataMethod="reqMethod" :formOptions="roomSearchForm" :showSelection="true" :columns="colModels" :height="tableHeight" @selection-change="handleSelectionChange" :pageSizes="[20, 50, 100, 200]">
      <template slot="setTag" slot-scope="scope">
        <el-tag v-if="scope.row.tag === 1">飞虎队</el-tag>
      </template>
      <template slot="floorName" slot-scope="scope">
        {{scope.row.floorId | setFloorName(estateInfo.floors)}}
      </template>
      <template slot="roomStatus" slot-scope="scope">
        <el-tag :type="[2].includes(scope.row.roomStatus) ? 'success' : ([5, 6, 8, 10].includes(scope.row.roomStatus) ? 'info' : 'danger')">{{scope.row.roomStatus | setRoomStatus(roomStatusList)}}</el-tag>
      </template>
      <template slot="settingRoom" slot-scope="scope">
        <el-button size="mini" @click="openRentPayModel(scope.row)">交租方式</el-button>
        <el-button size="mini" @click="openCopyItemToModel(scope.row)">复制到</el-button>
        <el-dropdown :hide-on-click="false" @command="handleCommand">
          <el-button size="mini" class="settingRoom-btn">房态管理</el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item :command="{roomCodes: [scope.row.roomCode], roomStatus: 2}">空房</el-dropdown-item>
              <el-dropdown-item :command="{roomCodes: [scope.row.roomCode], roomStatus: 9}">已出租无租客</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </template>
      <template slot="operateRoom" slot-scope="scope">
        <el-button type="primary" size="mini" @click="openRoomDetailModel(2, scope.row)">编辑房间</el-button>
      </template>
      <el-table-column slot="selection" type="selection">
      </el-table-column>
    </grid-unit>

    <el-dialog class="copy-item-to-model" title="复制到" :visible.sync="copyItemToModelVisible" width="700px">
      <room-list-selecter ref="copyItemTo" :roomList="copyItemRoomList" :visible="copyItemToModelVisible">
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
            <el-checkbox class="head-check-options" v-for="v in copyOptions" :key="v.val" :label="v.val" @change="handleOptionsChange">
              {{v.label}}
            </el-checkbox>
          </el-checkbox-group>
        </el-card>
        <span slot="card-title">请选择要复制到的房间号</span>
      </room-list-selecter>
      <span slot="footer">
        <el-button size="small" type="primary" @click="saveCopyItemTo">确 定</el-button>
        <el-button size="small" @click="copyItemToModelVisible = false">取 消</el-button>
      </span>
    </el-dialog>

    <el-dialog class="rent-pay-model" title="交租方式" :visible.sync="rentPayModelVisible" :width="curRoomFinanceType !== 2 ? '1000px' : '700px'">
      <rent-pay-way ref="rentPayWay" :list="rentPayList" :curRoomFinanceType="curRoomFinanceType" :baseRentTypeList="baseRentTypeList"></rent-pay-way>
      <span slot="footer">
        <el-button type="primary" size="small" @click="saveRentPay">保 存</el-button>
        <el-button @click="rentPayModelVisible = false" size="small">取 消</el-button>
      </span>
    </el-dialog>

    <el-dialog class="room-detail-model" :title="curType === 1 ? '新建房号' : '编辑房号'" :visible.sync="roomDetailModelVisible" :before-close="checkEditStatus" width="800px">
      <room-detail ref="roomDetailModel" :type="curType" :modelVisible="roomDetailModelVisible" :estateInfo="estateInfo"></room-detail>
      <span slot="footer">
        <el-button type="primary" size="small" @click="saveRoomData">{{curType === 1 ? '确 定' : '保 存' }}</el-button>
        <el-button @click="roomDetailModelVisible = false" size="small">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import GridUnit from '@/components/GridUnit/grid'
import { estateRoomDetailApi, estateBatchCopyRoomListApi, copyToOtherRoomApi, estateRoomRentPayWayApi, saveEstateRoomRentPayWayApi, oneEstateRoomApi, saveEstateRoomApi, checkRoomHasDeviceApi, deleteRoomApi, changeRoomStatusApi } from '@/api/houseManage'
import RoomListSelecter from '@/components/RoomListSelecter'
import RoomDetail from '../components/roomDetailModel'
import rentPayWay from '../components/rentPayWay'
export default {
  name: 'singleEstateRoom',
  components: {
    GridUnit,
    RoomListSelecter,
    RoomDetail,
    rentPayWay
  },
  data() {
    return {
      fangyuanCode: '',
      curRoomCode: '',
      estateInfo: {},
      roomSearchForm: {
        fangyuanCode: '',
        roomStatus: '',
        floorId: '',
        roomCode: '',
        roomNo: '',
        tag: ''
      },
      roomStatusList: [
        {
          label: '可用',
          value: 2
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
          label: '已出租（无租客）',
          value: 9
        },
        {
          label: '装修中',
          value: 10
        }
      ],
      estateRoomListUrl: '/market/fangyuan',
      tableHeight: 500,
      reqMethod: 'queryEstateRoomList',
      colModels: [
        { slot: 'selection' },
        { prop: 'roomTypeName', label: '房间类型' },
        {
          prop: 'floorId',
          label: '楼层',
          slotName: 'floorName'
        },
        { prop: 'roomNo', label: '房号' },
        {
          prop: 'roomDirection',
          label: '朝向',
          render(row) {
            const directionList = ['', '朝南', '朝北', '朝东', '朝西', '东南', '西南', '东北', '西北']
            return directionList[row.roomDirection]
          }
        },
        {
          prop: 'roomStatus',
          label: '房间状态',
          slotName: 'roomStatus'
        },
        { prop: 'roomCode', label: '平台房源编码' },
        {
          prop: 'roomLayout',
          label: '室厅卫',
          render(row) {
            return (row.chamberCount || 0) + '室' + (row.boardCount || 0) + '厅' + (row.toiletCount || 0) + '卫'
          }
        },
        { prop: 'roomArea', label: '面积' },
        {
          prop: 'decorationDegree',
          label: '装修程度',
          render(row) {
            const decorationDegreeList = ['', '毛坯', '简装', '精装修', '豪华装']
            return decorationDegreeList[row.decorationDegree]
          }
        },
        { prop: 'bedCount', label: '床数' },
        { prop: 'maxPerson', label: '最大入住人数' },
        {
          prop: 'tag',
          label: '标签',
          align: 'center',
          slotName: 'setTag'
        },
        {
          prop: 'settings',
          label: '设置',
          width: '280px',
          align: 'center',
          fixed: 'right',
          slotName: 'settingRoom'
        },
        {
          prop: 'operate',
          label: '操作',
          align: 'center',
          fixed: 'right',
          slotName: 'operateRoom'
        },
        {
          prop: 'operateRecord',
          label: '操作记录',
          render(row) {
            return row.lastOperator + ' ' + row.lastOperateTime
          }
        }
      ],
      copyItemToModelVisible: false,
      copyItemRoomList: {},
      checkAllCopyItem: false,
      copyOptions: [
        {
          label: '交租方式',
          val: 1
        },
        {
          label: '房间类型',
          val: 2
        },
        {
          label: '室卫厅',
          val: 3
        },
        {
          label: '面积',
          val: 4
        },
        {
          label: '装修程度',
          val: 5
        },
        {
          label: '朝向',
          val: 6
        },
        {
          label: '床数',
          val: 7
        },
        {
          label: '最大入住人数',
          val: 8
        },
        {
          label: '飞虎队',
          val: 10
        }
      ],
      checkedCopyList: [],
      rentPayModelVisible: false,
      rentPayList: [],
      serviceChargeTypeList: [
        {
          label: '无',
          value: 1
        },
        {
          label: '固定金额',
          value: 2
        },
        {
          label: '租金百分比',
          value: 3
        }
      ],
      serviceFeeTypeList: [
        {
          label: '随租金付',
          value: 2
        },
        {
          label: '一次性付清',
          value: 3
        }
      ],
      baseRentTypeList: [],
      roomDetailModelVisible: false,
      curType: '',
      selectedRooms: [],
      roomStatusEndDate: '',
      tempRoomStatusParams: {
        endDate: '',
        roomCodes: '',
        roomStatus: null
      },
      curRoomFinanceType: 1
    }
  },
  computed: {
    allCheckedOptionsList() {
      return this.copyOptions.map((item) => item.val)
    }
  },
  methods: {
    searchParam() {
      this.$refs.estateRoomList.searchHandler()
    },
    searchEstateRoomList(type) {
      if (type === 'clear') {
        Object.keys(this.roomSearchForm).forEach((key) => {
          this.roomSearchForm[key] = key === 'fangyuanCode' ? this.roomSearchForm[key] : ''
        })
      }
      this.searchParam()
    },
    fetchEstateDetailData() {
      estateRoomDetailApi({
        fangyuanCode: this.fangyuanCode
      }).then((res) => {
        if (res.code === '0') {
          // this.$store.commit('SET_ESTATEDATA', res.data.dataObject)
          this.$set(this, 'estateInfo', res.data)
        }
      })
    },
    openCopyItemToModel(row) {
      this.curRoomCode = row.roomCode
      estateBatchCopyRoomListApi({
        fangyuanCode: this.fangyuanCode,
        roomCode: row.roomCode
      }).then((res) => {
        if (res.code === '0' && res.data) {
          this.copyItemRoomList = res.data
          this.checkedCopyList = []
          this.copyItemToModelVisible = true
          this.handleOptionsChange()
        }
      })
    },
    openRentPayModel(row) {
      this.curRoomCode = row.roomCode
      estateRoomRentPayWayApi({
        roomCode: row.roomCode
      }).then((res) => {
        if (res.code === '0') {
          this.curRoomFinanceType = res.data.houseFinanceType
          this.$set(this, 'rentPayList', res.data.roomRentTypeList)
          this.$set(this, 'baseRentTypeList', res.data.baseRentTypeList)
        }
        this.rentPayModelVisible = true
      })
    },
    handleCheckAllChange(val) {
      this.checkedCopyList = val ? this.allCheckedOptionsList : []
    },
    handleOptionsChange() {
      this.checkAllCopyItem = this.checkedCopyList.length === this.allCheckedOptionsList.length
    },
    saveCopyItemTo() {
      const checkedRoomList = this.$refs.copyItemTo.returnCheckedList()
      copyToOtherRoomApi({
        fromRoomCode: this.curRoomCode,
        toRoomCodes: checkedRoomList,
        items: this.checkedCopyList
      }).then((res) => {
        if (res.code === '0') {
          this.$message({
            message: res.message,
            type: 'success'
          })
          this.checkedCopyList = []
          this.checkAllCopyItem = false
          this.copyItemToModelVisible = false
          this.searchParam()
        }
      })
    },
    addRentPay() {
      this.rentPayList.push({
        depositPrice: '',
        depositQty: '',
        maxMonthNum: 12,
        minMonthNum: 1,
        name: '月付',
        rentPrice: '',
        rentQty: 1,
        rentTypeId: 1,
        roomId: this.rentPayList[0] ? this.rentPayList[0].roomId : undefined,
        roomRentTypeId: undefined,
        serviceChargePrice: null,
        serviceChargeRatio: null,
        serviceChargeType: 1,
        serviceFeeType: 1,
        type: 1
      })
    },
    saveRentPay() {
      const list = this.$refs.rentPayWay.returnRentPayList()
      if (!list) {
        this.$message.error(`请填写完交租方式再保存`)
        return false
      }
      saveEstateRoomRentPayWayApi({
        roomCode: this.curRoomCode,
        roomRentTypeList: list
      }).then((res) => {
        if (res.code === '0') {
          this.$message({
            message: res.message,
            type: 'success'
          })
          this.rentPayModelVisible = false
        }
      })
    },
    switchRentType(row) {
      const tempArr = this.baseRentTypeList.filter((item) => item.rentQty === row.rentQty)
      Object.keys(tempArr[0]).forEach((key) => {
        if (key === 'baseRentTypeId') {
          row['rentTypeId'] = tempArr[0][key]
        } else {
          row[key] = tempArr[0][key]
        }
      })
      row.minMonthNum = row.rentQty
    },
    deleteCurRentPay(row) {
      this.$set(this, 'rentPayList', this.rentPayList.filter((item) => item !== row))
    },
    computeServiceChargePrice(row) {
      if (row.serviceChargeType !== 3) {
        return
      }
      row.serviceChargePrice = row.serviceChargeRatio * row.rentPrice / 100
    },
    switchServiceChargeType(row) {
      row.serviceFeeType = row.serviceChargeType === 1 ? 1 : 2
    },
    openRoomDetailModel(type, row) {
      this.curType = type
      if (type === 2) {
        oneEstateRoomApi({
          roomCode: row.roomCode
        }).then((res) => {
          if (res.code === '0') {
            this.$store.commit('SET_ESTATEROOMDATA', res.data)
            this.roomDetailModelVisible = true
          }
        })
      } else {
        this.roomDetailModelVisible = true
      }
    },
    saveRoomData() {
      const data = this.$refs.roomDetailModel.saveRoomData()
      if (!data) {
        return
      }
      data.fangyuanCode = this.fangyuanCode

      if (this.curType === 2) {
        data.pictureUploadList = data.pictureList.filter(n => n.image)
        data.pictureList = data.pictureList.filter(n => n.imageUrl)
        data.pictureUploadList.forEach((item) => {
          item.src = null
        })
        data.pictureList.forEach((item) => {
          item.src = null
        })
      } else {
        delete data.pictureList
        delete data.pictureUploadList
      }
      delete data.roomStatusOperateList
      console.log(data)
      saveEstateRoomApi({
        roomInfo: JSON.stringify(data)
      }, this.curType).then((res) => {
        if (res.code === '0') {
          this.$message({
            message: res.message || '操作成功',
            type: 'success'
          })
          this.roomDetailModelVisible = false
          this.$refs.estateRoomList.fetchHandler()
        }
      })
    },
    handleSelectionChange(list) {
      this.selectedRooms = list
    },
    deleteRoom() {
      if (!this.selectedRooms.length) {
        this.$message.error('请先选择要删除的房间号')
        return
      }
      checkRoomHasDeviceApi({
        roomCodeList: this.selectedRooms.map(item => item.roomCode)
      }).then((res) => {
        if (res.code === '0') {
          deleteRoomApi({
            roomCodeList: this.selectedRooms.map(item => item.roomCode)
          }).then((res) => {
            if (res.code === '0') {
              this.$message({
                message: res.message,
                type: 'success'
              })
              this.$refs.estateRoomList.fetchHandler()
            }
          })
        }
      })
    },
    handleCommand(command) {
      let roomStatusParams = {}
      if (typeof command === 'number') {
        if (!this.selectedRooms.length) {
          this.$message.error('请选择需要设置房态的房间')
          return
        }
        roomStatusParams = {
          resource: 3,
          roomCodes: this.selectedRooms.map(item => item.roomCode),
          roomStatus: command
        }
      } else {
        roomStatusParams = Object.assign(command, {
          resource: 3
        })
      }
      changeRoomStatusApi(roomStatusParams).then((res) => {
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
              message: `成功${res.data.success}个房间，失败${res.data.fail}个房间，${res.data.already}个房间已经是${status}状态`,
              type: 'success'
            }
          }
          this.$message(message)
          this.searchParam()
        }
      })
    },
    checkEditStatus(done) {
      const differentFlag = this.$refs.roomDetailModel.checkEditFlag()
      if (differentFlag) {
        this.$confirm('您还有数据未保存, 确认关闭吗？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      } else {
        done()
      }
    }
  },
  filters: {
    setFloorName(val, floors) {
      if (floors) {
        const floor = floors.filter((item) => item.floorId === val)
        return floor.length ? floor[0].floorName : ''
      }
    },
    setRoomStatus(val, statusList) {
      const status = statusList.filter(item => item.value === val)
      return status.length ? status[0].label : ''
    }
  },
  mounted() {
    this.fetchEstateDetailData()
  },
  created() {
    this.fangyuanCode = this.$route.query.fangyuanCode || ''
    this.roomSearchForm.fangyuanCode = this.fangyuanCode
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
.room-options-row {
  margin-bottom: 20px;
  .room-options-dropdown {
    margin: 0 10px;
  }
  .estate-title {
    display: inline-block;
    vertical-align: middle;
    margin-left: 50px;
    font-size: 24px;
    line-height: 1;
  }
  .estate-address {
    display: inline-block;
    vertical-align: middle;
    max-width: 500px;
    overflow: hidden;
    font-size: 14px;
    line-height: 1;
    margin-left: 20px;
  }
}
.room-search-form {
  .room-search-form-group {
    margin-bottom: 10px;
    &.right {
      margin-right: 0;
    }
  }
}
.settingRoom-btn {
  margin-left: 10px;
}
.copy-item-to-model {
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
      width: 20%;
      margin-left: 0;
    }
  }
}
.finance-rent-pay-way {
  margin-bottom: 15px;
  .service-charge-price-percent {
    line-height: 66px;
    text-align: center;
  }
}
.rent-pay-model-row {
  margin-bottom: 15px;
  .el-col {
    &:last-child {
      .delete-btn {
        padding: 3px 0;
        font-size: 18px;
        color: red;
      }
    }
  }
  .lease-term {
    width: 100px;
  }
}
.default-rent-pay-way {
  margin-bottom: 15px;
  .delete-btn {
    padding: 3px 0;
    font-size: 18px;
    color: red;
  }
  .service-charge-price-percent {
    line-height: 66px;
    text-align: center;
  }
}
</style>
