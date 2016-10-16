<template>
	<div class="container">
    <router-link :to="{path:'/articleList'}" >
      <button class="button" @click="showIndex">返回</button>
    </router-link>
		<h3>
    {{title}}  
    </h3>
    <p v-html="htmlBody"></p>
	</div>
</template>

<script>
export default {

  name: 'detail',
   props:[
  'detailId'
  ],
  data () {
    return {
      htmlBody:'',
      title:'',
    };
  },
  watch:{
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods:{
    fetchData(){
      console.log(this.$route.params.id)
      this.$http.get("/detail?id="+this.$route.params.id).then(function(res){
          console.log(res);
          console.log('detail成功了')
          // this.items = JSON.parse(res.body).stories;
          console.log(JSON.parse(res.body))
          this.htmlBody = JSON.parse(res.body).body;
          this.title = JSON.parse(res.body).title;
        },function(err){
          console.log(err);
      })
    },
    showIndex(){
      this.$store.commit('show','index');
    }
  },
  created(){
    this.fetchData()
  }
};
</script>

<style lang="css" scoped>
  
</style>