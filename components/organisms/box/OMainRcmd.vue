<template>
  <div class="main_rcmd">
    <nuxt-link class="main_rcmd__box main_rcmd-therapy" to="/error/etc">
      <p class="main_rcmd__title">사운드<br />테라피</p>
      <span class="main_rcmd__badge">무료</span>
    </nuxt-link>
    <nuxt-link class="main_rcmd__box main_rcmd-cnslr" to="/error/etc">
      <p class="main_rcmd__title">심리<br />상담</p>
    </nuxt-link>
    <nuxt-link class="main_rcmd__box main_rcmd-workshop" to="/error/etc">
      <p class="main_rcmd__title">심리<br />워크샵</p>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name:'OMainRcmd',
  components:{},
  props:{},
  data(){
      return{
      }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/organisms/box/mainrcmd.scss';
</style>
