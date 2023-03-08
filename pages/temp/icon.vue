<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <AIcon :classOpt="'marketOff'" :classSize="'m'" />
        <AIcon :classOpt="'marketOff'" :classSize="'s'" />
        <AIcon :classOpt="'marketOff'" :classSize="'l'" />
        <AIcon :classOpt="'marketOn'" :classSize="'m'" />
        <AIcon :classOpt="'todayOff'" :classSize="'m'" />
        <AIcon :classOpt="'todayOn'" :classSize="'m'" />
        <AIcon :classOpt="'homeOff'" :classSize="'m'" />
        <AIcon :classOpt="'homeOn'" :classSize="'m'" />

        <AIcon :classOpt="'play'" :classSize="'m'" />
        <AIcon :classOpt="'chevronR'" :classSize="'m'" />
        <AIcon :classOpt="'chevronL'" :classSize="'m'" />
        <AIcon :classOpt="'search'" :classSize="'m'" />
        <AIcon :classOpt="'star'" :classSize="'m'" />
        <AIcon :classOpt="'refresh'" :classSize="'m'" />
        <AIcon :classOpt="'mappin'" :classSize="'m'" />
        <AIcon :classOpt="'msg'" :classSize="'m'" />
        <AIcon :classOpt="'phone'" :classSize="'m'" />
        <AIcon :classOpt="'bell'" :classSize="'m'" />
        <AIcon :classOpt="'cart'" :classSize="'m'" />
        <AIcon :classOpt="'arrow'" :classSize="'m'" />
        <AIcon :classOpt="'heart'" :classSize="'m'" />
        <!-- <div class="icon icon__s icon-marketOff"></div>
        <div class="icon icon__m icon-marketOff"></div>
        <div class="icon icon__l icon-marketOff"></div>
        <div class="icon icon__s icon-marketOn"></div>
        <div class="icon icon__s icon-todayOff"></div>
        <div class="icon icon__s icon-todayOn"></div>
        <div class="icon icon__s icon-homeOff"></div>
        <div class="icon icon__s icon-homeOn"></div>

        <div class="icon icon__s icon-play"></div>
        <div class="icon icon__s icon-chevronR"></div>
        <div class="icon icon__s icon-chevronL"></div>
        <div class="icon icon__s icon-search"></div>
        <div class="icon icon__s icon-star"></div>
        <div class="icon icon__s icon-refresh"></div>
        <div class="icon icon__s icon-mappin"></div>
        <div class="icon icon__s icon-msg"></div>
        <div class="icon icon__s icon-phone"></div>
        <div class="icon icon__s icon-bell"></div>
        <div class="icon icon__s icon-cart"></div>
        <div class="icon icon__s icon-arrow"></div>
        <div class="icon icon__s icon-heart"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AIcon from '~/components/atoms/aicon.vue';

export default {
    name:'componentIcon',
    components:{ AIcon },
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

