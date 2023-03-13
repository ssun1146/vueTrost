<template>
  <div class="main_menu">
    <h4 class="main_menu__title">어떤 힐링이 필요하세요?</h4>
    <div class="main_menu__link_box">
      <div class="main_menu__link" v-for="(a, i) in menuList" :key="i">
        <nuxt-link :to="a.path" :class="'main_menu-' + a.vclass">
          <p class="main_menu__txt">{{ a.name }}</p>
        </nuxt-link>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name:'OMainMenu',
  components:{},
  props:{},
  data(){
      return{
        menuList:[
          {
            /** AI감정관리 */
            name: 'AI감정관리',
            path: '/etc/error',
            vclass: 'ai',
          },
          {
            /** 우울 */
            name: '우울',
            path: '/etc/error',
            vclass: 'depress',
          },
          {
            /** 불안 */
            name: '불안',
            path: '/etc/error',
            vclass: 'anxiety',
          },
          {
            /** 무감정 */
            name: '무감정',
            path: '/etc/error',
            vclass: 'emotionless',
          },
          {
            /** 스트레스 */
            name: '스트레스',
            path: '/etc/error',
            vclass: 'stress',
          },
          {
            /** 행복 */
            name: '행복',
            path: '/etc/error',
            vclass: 'happy',
          },
          {
            /** 연애 · 결혼 */
            name: '연애 · 결혼',
            path: '/etc/error',
            vclass: 'love',
          },
          {
            /** 힐링 */
            name: '힐링',
            path: '/etc/error',
            vclass: 'healing',
          },
          {
            /** 자기이해 */
            name: '자기이해',
            path: '/etc/error',
            vclass: 'selfconscious',
          },
          {
            /** 대인관계 */
            name: '대인관계',
            path: '/etc/error',
            vclass: 'friendship',
          },
          {
            /** 직장 */
            name: '직장',
            path: '/etc/error',
            vclass: 'work',
          },
          {
            /** 가족 */
            name: '가족',
            path: '/etc/error',
            vclass: 'family',
          },
        ]

      }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/components/organisms/box/mainmenu.scss';
</style>
