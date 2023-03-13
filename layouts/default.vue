<template>
  <div class="pc__bg">
    <button class="component__lst temp" @click="goback">뒤로 </button>
    <nuxt-link class="component__link temp" :to="menuList[0].path">
      <button class="component__lst">컴포넌트</button>
    </nuxt-link>
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
        ]
      }
  },
  methods:{
    goback() {
      this.$router.back();
    }
  },



}
</script>

<style lang="scss" scoped>
@import '~/pages/temp/css/components.scss';
</style>
