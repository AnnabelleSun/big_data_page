<template>
  <div class="app">
    <div class="title-1 container">{{ title }}</div>
    <div class="container">
      <el-row>
        <el-col :span="4" v-for="item in routerLinks" :key="item.id">
          <div class="link">
            <router-link :to="item.to">{{ item.text }}</router-link>
          </div>
        </el-col>
      </el-row>
      <!-- <router-link to="/live">实时监测</router-link> -->
    </div>
    <div class="container main">
      <router-view />
    </div>
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
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
.app {
  background: url(./assets/img/bg.jpeg);
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    margin-bottom: 0;
  }
}
</style>
