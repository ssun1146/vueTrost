<template>
  <header class="main_header">
    <nuxt-link to="/index">
      <img src="@/assets/img/logo_trost.png" class="main_header__logo" />
    </nuxt-link>
    <div class="main_header__box">
      <button
        class="main_header__btn main_header__btn-search"
        v-if="header.btn === 'search'"
      ></button>
      <button
        class="main_header__btn main_header__btn-setting"
        v-if="header.btn === 'setting'"
      ></button>
      <button class="main_header__btn main_header__btn-alarm">
        <ABadge class="main_header__badge" :vClass="'badge__count'"><slot>12</slot></ABadge>
      </button>
      <button class="main_header__btn main_header__btn-cart">
        <ABadge class="main_header__badge" :vClass="'badge__count'"><slot>12</slot></ABadge>
      </button>
    </div>
  </header>
</template>

<script>
import ABadge from '~/components/atoms/abadge.vue';

export default {
  name:'mainHeader',
  components:{ ABadge },
  props:{
    /** 메인헤더 첫번째 버튼 :: '', search, setting */
    header: {
      type: Object,
      default: () => ({
        btn: '',
        count: '',
      })
    }
  },
  data(){
      return{
      }
  },
  methods:{
  }
}
</script>

