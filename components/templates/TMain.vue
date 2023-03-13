<template>
  <div class="main_wrap">
    <MMainHeader />
    <OMainBanner />
    <OMainMenu />
    <OMainRcmd />
    <div class="main_box divider">
      <h2 class="title title__arrow point_blue">사운드테라피</h2>
      <p class="desc">무료 명상과 ASMR</p>
      <OBasicList :list="list01" />
    </div>
    <div class="main_box divider">
      <h2 class="title title__arrow point_green">심리상담</h2>
      <p class="desc">전문 상담사와 함께 고민 해결</p>
      <OWideList :list="list02" />
    </div>

  </div>
</template>

<script>
import MMainHeader from '~/components/molecules/header/MMainHeader.vue';
import OMainBanner from '~/components/organisms/swiper/OMainBanner'
import OMainMenu from '~/components/organisms/box/OMainMenu'
import OMainRcmd from '~/components/organisms/box/OMainRcmd'
import OBasicList from '~/components/organisms/swiper/OBasicList'
import OWideList from '~/components/organisms/swiper/OWideList'

export default {
  layouts:'default',
  name:'TMain',
  components:{ MMainHeader, OMainBanner, OMainMenu, OMainRcmd, OBasicList, OWideList },
  props:{},
  data(){
      return{
        list01:{
          title:'느긋한 저녁 듣기 좋은 ASMR'
        },
        list02:{
          title:'내게 맞는 추천 심리상담사'
        }
      }
  },
  methods:{
  }
}
</script>


<style lang="scss" scoped>
@import '~/assets/scss/pages/main.scss';
</style>
