<template>
	<div>
		<p>{{count}}</p>
		<button @click="add">增加1</button>
	</div>
</template>

<script>
export default {

  name: 'vuexTest',

  data () {
    return {

    };
  },
  computed:{
  	count(){
  		return this.$store.state.count
  	}
  },
  methods:{
  	add(){
  		this.$store.commit('increment')
  	}
  }
};
</script>

<style lang="css" scoped>
</style>