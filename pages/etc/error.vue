<template>
  <div class="error">
    <div class="error__thumb">
      <img src="" />
    </div>
    <div class="error__btn">
      <nuxt-link to="/main">
        <AButton class="btn__wper100 btn__l btn__bg-fill btn__square">
          <slot>메인페이지로</slot>
        </AButton>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AButton from '~/components/atoms/abutton.vue';
export default {
  name:'errorPage',
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
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-width: 520px;
  height: 100vh;

  &__thumb {

  }
  &__btn {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 0;
    padding: 8px 12px;
    transform: translateX(-50%);
    box-sizing: border-box;
    box-shadow: 0 -4px 8px rgba(0,0,0,.16);
  }

}

</style>
