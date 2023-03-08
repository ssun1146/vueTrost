<template>
  <div class="component">
    <div class="component__box">
        <div class="component__group">
          <AButton
            :btnHeight="'l'"
            :btnBorder="'common'"
            :btnShape="'round'"
            :btnFill="'fill'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>
          <AButton
            :btnHeight="'l'"
            :btnShape="'square'"
            :btnBorder="'common'"
            :btnFill="'common'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnHeight="'l'"
            :btnShape="'round'"
            :btnBorder="'black'"
            :btnFill="'common'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnHeight="'l'"
            :btnShape="'square'"
            :btnFill="'disabled'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnHeight="'l'"
            :btnShape="'square'"
            :btnFill="'point'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnWidth="'wper33'"
            :btnHeight="'m'"
            :btnShape="'square'"
            :btnFill="'fill'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnWidth="'wper33'"
            :btnHeight="'m'"
            :btnShape="'square'"
            :btnFill="'disabled'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnWidth="'wper33'"
            :btnHeight="'m'"
            :btnShape="'round'"
            :btnFill="'fill'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnWidth="'wper33'"
            :btnHeight="'m'"
            :btnShape="'square'"
            :btnFill="'point'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnWidth="'wper33'"
            :btnHeight="'m'"
            :btnBorder="'black'"
            :btnShape="'square'"
            :btnFill="'common'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>

          <AButton
            :btnWidth="'wpx180'"
            :btnHeight="'m'"
            :btnBorder="'black'"
            :btnShape="'square'"
            :btnFill="'common'"
          >
            <slot>하이</slot>
          </AButton>
          <div class="component__space"></div>
        </div>
    </div>
  </div>
</template>

<script>
import AButton from '~/components/atoms/abutton.vue';

export default {
  name:'',
  components:{ AButton },
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

