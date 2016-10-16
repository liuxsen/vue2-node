<template>
  <div id="app2">
  <top-bar></top-bar>
  <!-- <vuex-test></vuex-test> -->
    <!-- <ul>
      <li><router-link to="/first">点我跳转到第一页</router-link></li>
      <li><router-link to="/second">点我跳转到第二页</router-link></li>
    </ul> -->
    <router-view class="view"></router-view>
    <!-- <div v-show="active">
      <div v-for="item in items">
        <router-link :to="{ name: 'detail', params: { id: item.id }}" >
          <home :images="item.images[0]" :title="item.title"></home>
        </router-link>
      </div>
    </div> -->
    <article-list></article-list>
  </div>
</template>

<script>
import articleList from './components/articleList'
import secondcomponent from './components/secondcomponent'
import home from './components/home'
import topBar from './components/topBar'
import vuexTest from './components/vuexTest'
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      items:[]
    }
  },
  
  components: { articleList, secondcomponent ,home,topBar,vuexTest},
   created: function () {
    this.$http.get('/getInfo').then(function(res){
      console.log(res);
      this.items = JSON.parse(res.body).stories;
      console.log(JSON.parse(res.body))
    },function(err){
      console.log(err);
    })
  },
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>