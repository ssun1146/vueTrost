<template>
  <div class="pc__bg">
    <div class="pc__container">
      <button class="btn_back temp" @click="goback"></button>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
      return{
      }
  },
  methods:{
    goback() {
      this.$router.back();
    }
  },



}
</script>

<style>

</style>
