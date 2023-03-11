<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <ABadge :vClass="'count'">
          <slot>12</slot>
        </ABadge>

        <ABadge :vClass="'count-black'">
          <slot>12</slot>
        </ABadge>

        <ABadge :vClass="'zoom'" />

        <ABadge :vClass="'type-default'">
          <slot>성격</slot>
        </ABadge>
        <ABadge :vClass="'type-point'">
          <slot>성격</slot>
        </ABadge>

        <ABadge :vClass="'check'" />
      </div>
    </div>
  </div>
</template>

<script>
import ABadge from '~/components/atoms/abadge.vue';

export default {
  name:'',
  components:{ ABadge },
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
