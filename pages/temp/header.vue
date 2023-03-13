<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <h4 class="component__txt">Main Header</h4>
        <MMainHeader :header="header01" />
        <div class="component__space"></div>

        <MMainHeader :header="header02" />
        <div class="component__space"></div>

        <MMainHeader />
        <div class="component__space"></div>
      </div>
      <div class="component__space"></div>

      <div class="component__group">
        <h4 class="component__txt">Sub Header</h4>
        <MSubHeader :header="header03" />
        <div class="component__space"></div>

        <MSubHeader :header="header04" />
        <div class="component__space"></div>

        <MSubHeader :header="header05" />
        <div class="component__space"></div>

      </div>
    </div>
  </div>
</template>

<script>
import MMainHeader from '~/components/molecules/header/MMainHeader.vue';
import MSubHeader from '~/components/molecules/header/MSubHeader.vue';

export default {
  name:'',
  components:{ MMainHeader, MSubHeader },
  props:{},
  data(){
      return{
        header01: {
          btn:'setting'
        },
        header02: {
          btn:'search'
        },
        header03: {
          txt:'부제',
          title:'가입완료',
          subBtn: 'done',
        },
        header04: {
          txt:'',
          title:'가입완료',
          subBtn: 'cart',
        },
        header05: {
          txt:'부제',
          title:'가입완료',
          subBtn: 'search',
        },
      }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import './css/components.scss';
</style>

