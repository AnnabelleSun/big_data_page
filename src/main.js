import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import { VueEcharts } from 'vue3-echarts';

import 'element-plus/lib/theme-chalk/index.css';
import './assets/style/reset.css';
import './assets/style/common.scss';

createApp(App)
.use(router)
.use(VueEcharts)
.use(ElementPlus)
.mount('#app')
