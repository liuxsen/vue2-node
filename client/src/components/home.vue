<template>
	<div class="col-xs-12 col-sm-6 col-md-4 text-center" @click="hideIndex">
    <img :src="images"> 
    <h4>{{title}}</h4>
  </div>
</template>

<script>
export default {

  name: 'home',

  data () {
    return {
    	items:[{
    		title:'title1',
    	},{
    		title:'title2',
    	}]
    };
  },
  props:[
    'images','title'
  ],
  methods:{
    hideIndex(){
      this.$store.commit('show','detail')
    }
  },
  computed:{
    active(){
      return this.$store.state.active
    }
  }
 
};
</script>

<style lang="css">
.avatar{
  border-radius: 50%;
}
</style>