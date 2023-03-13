<template>
  <Nuxt />
</template>

<script>


export default {
  layout:'default',
  name:'indexPage',
  components:{  },
  props:{},
  data(){
      return{
      }
  },
  methods:{
  },
  created() {
    this.$router.replace( {path: '/main/'})
  }

}
</script>
