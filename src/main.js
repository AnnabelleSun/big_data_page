import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import { VueEcharts } from 'vue3-echarts';

import 'element-plus/lib/theme-chalk/index.css';

createApp(App)
.use(router)
.use(VueEcharts)
.use(ElementPlus)
.mount('#app')
