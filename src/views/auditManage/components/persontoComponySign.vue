<template>
  <el-form size="small" label-position="right" label-width="100px">
    <el-form-item label="企业名称">
      <el-input v-model="data_detail.epName" :disabled="true">
      </el-input>
    </el-form-item>
    <div class="clearfix">
      <el-col :span="11">
        <el-form-item label="统一社会信用代码" label-width="130px">
          <el-input v-model="data_detail.uscc" :disabled="true">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="12">
        <el-form-item label="企业缩写名">
          <el-input v-model="data_detail.epShortName" :disabled="true">
          </el-input>
        </el-form-item>
      </el-col>
    </div>
    <div class="clearfix">
      <el-col :span="11">
        <el-form-item label="企业注册地址">
          <el-input v-model="data_detail.proCityArea" :disabled="true">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="12">
        <el-form-item label-width="0px">
          <el-input v-model="data_detail.addressDetail" :disabled="true">
          </el-input>
        </el-form-item>
      </el-col>
    </div>
    <div class="clearfix">
      <el-col :span="11">
        <el-form-item label="法人姓名">
          <el-input v-model="data_detail.principal" :disabled="true">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="12">
        <el-form-item label="法人身份证">
          <el-input v-model="data_detail.principalIdCard" :disabled="true" class="realNameAuth">
            <el-tag v-if="data_detail.realNameAuth == 0" type="info" slot="append" @click.native="upgradeRealName">实名认证</el-tag>
            <el-tag v-else-if="data_detail.realNameAuth == 1" type="success" slot="append">实名通过</el-tag>
            <el-tag v-else type="danger" slot="append">实名失败</el-tag>
          </el-input>
        </el-form-item>
      </el-col>
    </div>
    <div class="clearfix">
      <el-col :span="11">
        <el-form-item label="联系人姓名">
          <el-input v-model="data_detail.linkman" :disabled="true">
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <el-col :span="12">
        <el-form-item label="联系人号码">
          <el-input v-model="data_detail.linkPhone" :disabled="true">
          </el-input>
        </el-form-item>
      </el-col>
    </div>
    <el-form-item label="营业执照照片">
      <div class="previewItems"><Preview :pic-list="data_detail.picList"></Preview></div>
    </el-form-item>
    <el-form-item label="审核结果">
      <el-radio-group v-if="data_detail.status == 1" v-model="status">
        <el-radio v-if="data_detail.realNameAuth != 2" :label="2">通过</el-radio>
        <el-radio :label="3">不通过</el-radio>
      </el-radio-group>
      <el-tag v-else :type="data_detail.status | statusFilter">
        {{data_detail.status | statusStrFilter}}
      </el-tag>
      <el-input v-if="data_detail.status == 3" type="textarea" :rows="2" v-model="data_detail.rejectRemark" :disabled="true">
      </el-input>
      <el-input style="position: relative;" type="textarea" :rows="2" v-if="status == 3" placeholder="请输入审核不通过原因" v-model="reject_remark" :maxlength="50">
      </el-input>
      <span v-if="status == 3" class="textNumber">还可以输入{{textNumber}}字符</span>
    </el-form-item>
  </el-form>
</template>
<script>
import Preview from '@/components/Preview/Preview'
import { upgradeRealNameApi } from '@/api/auditCenter'

export default {
  name: 'persontoComponySign',
  props: {
    dataSign: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        '1': 'info',
        '2': 'success',
        '3': 'danger'
      }
      return statusMap[status] || 'info'
    },
    statusStrFilter(status) {
      const statusStrData = ['待审核', '审核通过', '审核不通过']
      return statusStrData[status - 1] || '待审核'
    }
  },
  components: {
    Preview
  },
  computed: {
    textNumber() {
      return (50 - this.reject_remark.length) < 0 ? 0 : (50 - this.reject_remark.length)
    }
  },
  data() {
    return {
      data_detail: this.dataSign,
      status: '',
      reject_remark: ''
    }
  },
  methods: {
    upgradeRealName() {
      upgradeRealNameApi({
        auditId: this.data_detail.id
      }).then(response => {
        if (!response.data) {
          this.$message.error(response.message || '您的网络出了点差错哦，请稍后重试')
          return false
        }
        this.data_detail.realNameAuth = response.data.data.result ? 1 : 2
        if (this.data_detail.realNameAuth * 1 === 2) {
          this.status = 3
        }
      })
    }
  },
  watch: {
    dataSign: {
      handler(val) {
        this.data_detail = val
        this.status = ''
        this.reject_remark = ''
      },
      deep: true
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.el-tag {
  margin: 0 5px 5px 0;
}

.realNameAuth {
  .el-input-group__append {
    padding: 0;
    border: 0;
    .el-tag {
      margin: 0;
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      &.el-tag--info {
        cursor: pointer
      }
    }
  }
}

.textNumber {
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: #666;
  font-size: 12px;
  line-height: 1.2;
}
</style>
