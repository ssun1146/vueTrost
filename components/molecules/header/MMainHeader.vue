<template>
  <header class="main_header">
    <nuxt-link to="/main/">
      <img src="@/assets/img/logo_trost.png" class="main_header__logo" />
    </nuxt-link>
    <div class="main_header__box">
      <AIconBtn
        class="main_header__btn"
        :vclass="'search'"
        v-if="isBtnSearch === true"
      ></AIconBtn>
      <AIconBtn
        class="main_header__btn"
        :vclass="'setting'"
        v-if="isBtnSetting === true"
      ></AIconBtn>
      <AIconBtn
        class="main_header__btn"
        :vclass="'alarm'"
        v-if="isBtnAlarm === true"
      >
        <ABadge class="main_header__badge" :vClass="'badge__count'"><slot>12</slot></ABadge>
      </AIconBtn>
      <AIconBtn
        class="main_header__btn"
        :vclass="'cart'"
        v-if="isBtnCart === true"
      >
        <ABadge class="main_header__badge" :vClass="'badge__count'"><slot>12</slot></ABadge>
      </AIconBtn>
    </div>
  </header>
</template>

<script>
import ABadge from '~/components/atoms/abadge.vue';
import AIconBtn from '~/components/atoms/aiconbtn.vue';

export default {
  name:'MMainHeader',
  components:{ ABadge, AIconBtn },
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
        isBtnSearch:true,
        isBtnSetting:false,
        isBtnAlarm:true,
        isBtnCart:true,
      }
  },
  methods:{
  }
}
</script>

