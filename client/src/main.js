import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
var vueResource = require('vue-resource');
var Vuex = require('vuex');

Vue.use(Vuex);
Vue.use(vueResource);

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);

const store = new Vuex.Store({
    state: {
        count: 0,
        active: 'index',
    },
    mutations: {
        increment(state) {
            state.count++
        },
        show(state, str) {
            state.active = str
        }
    }
})
store.commit('increment')
console.log(store.state.count)


// 定义组件, 也可以像教程之前教的方法从别的文件引入

import detail from './components/detail.vue'
import articleList from './components/articleList.vue'



// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    // mode: 'history',
    base: __dirname,
    routes: [{
        name: 'detail',
        path: '/detail/:id',
        component: detail
    }, {
        name: 'articleList',
        path: '/articleList',
        component: articleList
    }]
})



// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    store: store,
    render: h => h(App)
        // components: { firstcomponent, secondcomponent }
}).$mount('#app')
