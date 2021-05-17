
<template>
  <div class="market">

  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    v-loading="loading"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
    <!-- <el-button @click="addSelection()">添加</el-button> -->
    <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>
  </div>

  <el-dialog
    title="提示"
    v-model="dialogVisible"
    width="30%">
    <span>这是一段信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogAction(true)">确 定</el-button>
      </span>
    </template>
  </el-dialog>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: false,
        dialogVisible: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      addSelection () {
        console.log('[addSelection]')
        this.loading = true
        const _data = [...this.tableData, {
          date: '2021-05-17',
          name: '苏森林',
          address: '北京市东城区长安街北侧'
        }]
        setTimeout(() => {
          this.tableData = _data
          this.loading = false
        }, 3000)
      },
      dialogAction (flag) {
        console.log('[dialogAction]', flag)
        if (flag) {
          this.dialogVisible = false
          this.addSelection()
        }
      }
    }
  }
</script>

<style>
.market * {
  color: black;
}
</style>
