<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <ATextField />

      </div>
      <div class="component__space"></div>

      <div class="component__group"></div>
      <div class="component__space"></div>

      <div class="component__group"></div>
      <div class="component__space"></div>

      <div class="component__group"></div>
      <div class="component__space"></div>

    </div>
  </div>
</template>

<script>
import ATextField from '~/components/atoms/input/aTextfield.vue';

export default {
  name:'',
  components:{ ATextField },
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
@import './css/components.scss';
</style>

