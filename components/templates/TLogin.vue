<template>
  <div class="login">
    <div class="login__logo">
      <img src="@/assets/img/logo_trost.png" />
    </div>
    <div class="login__input">
      <ATextfield :textField="textField01" />
      <ATextfield :textField="textField02" />
    </div>
    <div class="login__btn">
      <AButton
        :btnHeight="'l'"
        :btnShape="'square'"
        :btnFill="'fill'"
        @click="enter()"
      >
        <slot>로그인</slot>
      </AButton>
      <AButton
        :btnHeight="'l'"
        :btnShape="'square'"
        :btnBorder="'common'"
        :btnFill="'common'"
      >
        <slot>회원가입</slot>
      </AButton>
    </div>
  </div>
</template>

<script>
import ATextfield from '~/components/atoms/input/aTextfield.vue'
import AButton from '~/components/atoms/abutton.vue';

export default {
  name:'TLogin',
  components:{ ATextfield, AButton },
  props:{},
  data(){
      return{
        textField01:{
          label: '아이디',
          desc: '아이디를 입력해주세요.',
          btn: 'close'  // close, slct, pwd_off, pwd_on
        },
        textField02:{
          label: '비밀번호',
          desc: '비밀번호를 입력해주세요.',
          btn: 'close'  // close, slct, pwd_off, pwd_on
        },
      }
  },
  methods:{
    enter() {
      this.$router.push( {path:'/main/'} )
    }

  }

}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/pages/login.scss';
</style>
