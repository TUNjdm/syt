// vue3框架提供的方法creatApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
// 引入清楚默认样式
import './style/reset.scss'
// 引入根组件app
import App from '@/App.vue'
// 引入顶部组件
import HospitalTop from '@/components/hospital_top/index.vue'
// 引入底部组件
import HospitalBottom from '@/components/hospital_bottom/index.vue'
// 引入路由
import router from './router'
// 引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element-plus插件的中文语言包
// @ts-ignore
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// 利用createApp方法创建应用实例
const app =createApp(App)
// 注册顶部组件
app.component('HospitalTop',HospitalTop)
// 注册底部组件
app.component('HospitalBottom',HospitalBottom)
// 注册路由
app.use(router)
// 注册element-plus插件
// 并且加上插件的中文语言包
app.use(ElementPlus, {
  locale: zhCn,
})
// 挂载应用实例
app.mount('#app')
