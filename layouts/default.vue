<template>
  <div class="pc__bg">
    <button class="component__lst temp" @click="goback">뒤로 </button>
    <nuxt-link class="component__link temp" :to="menuList[0].path">
      <button class="component__lst">컴포넌트</button>
    </nuxt-link>
    <!-- <button class="component__lst temp" style="top:200px;" @click="api">API</button> -->
    <!-- <div class="component__lst temp" style="top:300px; position:absolute ; z-index:9999; width:max-content;" >{{ apiCheck }}</div> -->
    <div class="pc__container">
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
        menuList:[
          {
            name: 'component Page',
            path: '/temp/components',
          }
        ],
        // apiCheck:''
      }
  },
  methods:{
    goback() {
      this.$router.back();
    },
    // async api() {
    //   console.log('api');
    //   try {
    //     let rs = await this.$axios.post('/api/');
    //     console.log('Response : ' , rs);
    //     this.apiCheck = rs;
    //   } catch (err) {
    //     console.log('Error : ', err);
    //     this.apiCheck = err;
    //   }
    // }
  },



}
</script>

<style lang="scss" scoped>
@import '~/pages/temp/css/components.scss';
</style>
