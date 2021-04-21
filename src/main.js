import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueEcharts } from 'vue3-echarts';

createApp(App).use(router).use(VueEcharts).mount('#app')
