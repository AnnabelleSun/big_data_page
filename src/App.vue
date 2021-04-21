<template>
  <div class="app">
    <div>{{ title }}</div>
    <div id="nav">
      <el-row>
        <el-col :span="4" v-for="item in routerLinks" :key="item.id">
          <router-link :to="item.to">{{ item.text }}</router-link>
        </el-col>
      </el-row>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "大数据分析系统",
      routerLinks: [
        {
          id: 0,
          to: "/live",
          text: "实时监测",
        },
        {
          id: 1,
          to: "/tickets",
          text: "票务信息",
        },
        {
          id: 2,
          to: "/market",
          text: "营销数据",
        },
        {
          id: 3,
          to: "/operate",
          text: "运营数据",
        },
        {
          id: 4,
          to: "/tourist",
          text: "用户画像",
        },
        {
          id: 5,
          to: "/emergency",
          text: "应急事件",
        },
        {
          id: 6,
          to: "/about",
          text: "应急事件",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url(./assets/style/reset.css);
#app {
  width: 100%;
  height: 100%;
}
.app {
  background: url(./assets/img/bg.jpeg);
  width: 100%;
  height: 100%;
}
</style>
