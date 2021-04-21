import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import * as echarts from 'echarts';
import scyEcharts from 'scyecharts';
Vue.prototype.$echarts = echarts; // 引入echarts
Vue.use(scyEcharts);

createApp(App).use(router).mount('#app')
