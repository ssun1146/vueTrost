<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <h4 class="component__txt">Product Card</h4>
        <MProductCard :productCard="productCard01" />
        <div class="component__space"></div>

        <MProductCard :productCard="productCard02" />
        <div class="component__space"></div>


      </div>
      <div class="component__space"></div>

    </div>
  </div>
</template>

<script>
import MProductCard from '~/components/molecules/card/mProductCard.vue';

export default {
  name:'',
  components:{ MProductCard },
  props:{},
  data(){
      return{
        productCard01: {
          type: 'basic',
          badge: 'zoom',
          button: '',
          txt: '오늘 하루도 고생많았슴당'
        },
        productCard02: {
          type: 'wide',
          // badge: 'zoom',
          // button: '',
          txt: '오늘 하루도 고생많았슴당'
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

