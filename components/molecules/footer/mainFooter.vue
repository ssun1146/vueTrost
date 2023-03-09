<template>
  <footer class="main_footer">
    <div
      class="main_footer__box"
      v-for="(a, i) in menuList"
      :key="i"
    >
      <nuxt-link
        :class="'main_footer__btn icon-' + a.class[0]"
        :to="a.path"
      >
        {{ a.name }}
      </nuxt-link>
    </div>
    <div class="main_footer__box">
      <nuxt-link
        to="/mypage"
        class="main_footer__btn-mypage"
      >
      <img
        class="main_footer__user"
        src="@/assets/img/ico_mood01.png"
      />
      내 공간
      </nuxt-link>
    </div>
  </footer>
</template>

<script>
export default {
  name:'mainFooter',
  components:{},
  props:{},
  data(){
      return{
        menuList:[
          {
            /** 홈 */
            name: '홈 ',
            path: '/home',
            class: ['homeOff', 'homeOn'],
          },
          {
            /** 오늘 */
            name: '오늘',
            path: '/today',
            class: ['todayOff', 'todayOn'],
          },
          {
            /** 감정마켓 */
            name: '감정마켓',
            path: '/market',
            class: ['marketOff', 'marketOn'],
          },

        ]
      }
  },
  methods:{
  }

}
</script>

<style>

</style>
