<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <h4 class="component__txt">하이</h4>
        <MSearchBox />

        <div class="component__space"></div>
      </div>



    </div>
  </div>
</template>

<script>
import MSearchBox from '~/components/molecules/MSearchBox.vue';

export default {
  name:'',
  components:{ MSearchBox },
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

