<template>
  <div class="batch-copy-container">
    <slot></slot>
    <el-card v-if="Array.isArray(roomList)" class="batch-copy-card">
      <el-form ref="form" :model="roomListForm" label-width="180px" size="small">
        <el-form-item label="请选择你要复制到的房间号">
          <el-select v-model="roomListForm.checkedRoomList" multiple filterable placeholder="请选择房间">
            <el-option v-for="item in roomList" :key="item.fangyuanCode" :label="item.detailAddress" :value="item.fangyuanCode">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-else class="batch-copy-card">
      <div slot="header" class="clearfix">
        <slot name="card-title"></slot>
        <!-- <span>请选择要应用该房型的房间</span> -->
        <div class="check-all">
          <el-form :inline="true" size="mini">
            <el-form-item :label="checkAll ? '取消全选' : '全选'">
              <el-switch v-model="checkAll" @change="handleCheckAllChange"></el-switch>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <el-row v-for="(val, key, index) in roomList" :key="index">
        <el-col :span="4">
          <el-checkbox :label="key" v-model="checkedFloor[key]" @change="handleCheckFloorChange(key)"></el-checkbox>
        </el-col>
        <el-col :span="19" :offset="1">
          <el-checkbox-group v-model="checkedObj[key]" class="room-list-group">
            <el-checkbox class="room-list-checkbox" v-for="v in val" :key="v.roomCode" :label="v.roomCode" :disabled="allRoomList[key].isDisabled.includes(v.roomCode)" @change="handleRoomChange(key)">
              {{v.roomNo}}
            </el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    roomList: [Object, Array],
    checkedList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      checkedObj: {},
      checkedFloor: {},
      allRoomList: {},
      checkAll: false,
      roomListForm: {
        checkedRoomList: []
      },
      options5: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }]
    }
  },
  watch: {
    visible: {
      immediate: true,
      handler: function(val) {
        if (Array.isArray(this.roomList)) {
          if (!val) {
            this.roomListForm.checkedRoomList = []
          }
        } else {
          if (val) {
            const allRoomList = {}
            const checkedObj = {}
            const checkedFloor = {}
            Object.keys(this.roomList).forEach((key, index) => {
              checkedFloor[key] = false
              allRoomList[key] = {}
              allRoomList[key].allRoom = this.roomList[key].map(v => v.roomCode)
              allRoomList[key].activeRoom = allRoomList[key].allRoom.filter((n) => !this.checkedList.includes(n))
              allRoomList[key].isDisabled = allRoomList[key].allRoom.filter((n) => !allRoomList[key].activeRoom.includes(n))
              checkedObj[key] = allRoomList[key].isDisabled
            })

            this.$set(this, 'allRoomList', allRoomList)
            this.$set(this, 'checkedObj', checkedObj)
            this.$set(this, 'checkedFloor', checkedFloor)
          }
          Object.keys(this.checkedObj).forEach((key, index) => {
            this.handleRoomChange(key)
          })
        }
      }
    }
  },
  methods: {
    handleCheckFloorChange(key) {
      this.$set(this.checkedObj, key, this.checkedFloor[key] ? this.allRoomList[key].allRoom : this.allRoomList[key].isDisabled)
      this.checkAll = Object.keys(this.checkedFloor).length === Object.keys(this.checkedFloor).filter(v => this.checkedFloor[v] === true).length
    },
    handleRoomChange(key) {
      const checkedCount = this.checkedObj[key].length
      this.checkedFloor[key] = checkedCount === this.allRoomList[key].allRoom.length
      this.checkAll = Object.keys(this.checkedFloor).length === Object.keys(this.checkedFloor).filter(v => this.checkedFloor[v] === true).length
    },
    handleCheckAllChange(val) {
      Object.keys(this.checkedObj).forEach((key, index) => {
        this.checkedFloor[key] = !!val
        this.$set(this.checkedObj, key, val ? this.allRoomList[key].allRoom : this.allRoomList[key].isDisabled)
      })
    },
    returnCheckedList() {
      let saveRoomList = []
      if (Array.isArray(this.roomList)) {
        saveRoomList = this.roomListForm.checkedRoomList
      } else {
        Object.keys(this.checkedObj).forEach((key, index) => {
          saveRoomList = saveRoomList.concat(this.checkedObj[key])
        })
      }
      return saveRoomList
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.batch-copy-container {
  .model-head {
    margin-bottom: 20px;
  }
  .batch-copy-card {
    box-shadow: 0 0;
    .el-form-item {
      margin-bottom: 0;
      .el-select {
        width: 100%;
      }
    }
  }
  .el-row {
    // padding-bottom: 10px;
    .el-col {
      & + .el-col {
        position: relative;
        padding-bottom: 10px;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: -35px;
          width: 0;
          height: 100%;
          border-left: 1px solid #ddd;
        }
      }
    }
  }
}
.check-all {
  float: right;
  position: relative;
  .el-form-item {
    margin-bottom: 0;
  }
}

.room-list-group {
  display: flex;
  flex-wrap: wrap;
  .room-list-checkbox {
    margin-left: 0;
    width: 16%;
  }
}
</style>


