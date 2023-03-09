<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <h4 class="component__txt">Main Header</h4>
        <mainHeader :header="header01" />
        <div class="component__space"></div>

        <mainHeader :header="header02" />
        <div class="component__space"></div>

        <mainHeader />
        <div class="component__space"></div>
      </div>
      <div class="component__space"></div>

      <div class="component__group">
        <h4 class="component__txt">Sub Header</h4>
        <subHeader :header="header03" />
        <div class="component__space"></div>

        <subHeader :header="header04" />
        <div class="component__space"></div>

        <subHeader :header="header05" />
        <div class="component__space"></div>

      </div>
    </div>
  </div>
</template>

<script>
import mainHeader from '~/components/molecules/header/mainHeader.vue';
import subHeader from '~/components/molecules/header/subHeader.vue';

export default {
  name:'',
  components:{ mainHeader, subHeader },
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

