<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <h2 class="component__txt">Main Footer</h2>
        <mainFooter style="position:static; transform:translateX(0)" />
        <div class="component__space"></div>

        <h2 class="component__txt">Sub Footer</h2>
        <subFooter :footer="footer01" style="position:static; transform:translateX(0)" />
        <div class="component__space"></div>

        <subFooter :footer="footer02" style="position:static; transform:translateX(0)" />
        <div class="component__space"></div>

        <subFooter :footer="footer03" style="position:static; transform:translateX(0)" />
        <div class="component__space"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mainFooter from '~/components/molecules/footer/mainFooter.vue';
import subFooter from '~/components/molecules/footer/subFooter.vue';

export default {
  name:'',
  components:{ mainFooter, subFooter },
  props:{},
  data(){
      return{
        footer01: {
          type:''
        },
        footer02: {
          type: 'block'
        },
        footer03: {
          type: 'split'
        }
      }
  },
  methods:{
  }

}
</script>

<style lang="scss" scoped>
@import './css/components.scss';
</style>

