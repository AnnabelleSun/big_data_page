<template>
  <div>
    <el-button @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog title="提示" v-model="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogAction(true)"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    dialogAction(flag) {
      if (flag) {
        this.dialogVisible = false;
        this.$emit("done");
      }
    },
  },
};
</script>