<template>
  <div class="pc__bg">
    <button class="component__lst temp" @click="goback">뒤로 </button>
    <nuxt-link class="component__link temp" :to="menuList[0].path">
      <button class="component__lst">컴포넌트</button>
    </nuxt-link>
    <div class="pc__container">
      <MSubHeader />
      <div class="pc__header_fix">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import MSubHeader from '~/components/molecules/header/MSubHeader.vue'
export default {
  name:'SubLayout',
  components:{ MSubHeader },
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
  }

}
</script>
