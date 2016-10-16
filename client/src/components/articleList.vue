<template>
	<div v-show="active">
      <div v-for="item in items" :paramId="item.ga_prefix">
        <router-link :to="{ name: 'detail', params: { id: item.id }}" >
          <home :images="item.images[0]" :title="item.title"></home>
        </router-link>
      </div>
	</div>
</template>

<script>
import home from './home'

export default {

  name: 'articleList',
  computed:{
    active(){
      return this.$store.state.active == 'index'
    }
  },
  data () {
    return {
    	items:[]
    };
  },
  components: {home},
  created: function () {
    this.$http.get('/getInfo').then(function(res){
      this.items = JSON.parse(res.body).stories;
    },function(err){
      console.log(err);
    })
  },
};
</script>

<style lang="css" scoped>
</style>