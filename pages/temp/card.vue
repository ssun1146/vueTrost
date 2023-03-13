<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <h4 class="component__txt">Product Card</h4>
        <swiper :options="swiperOption">
          <swiper-slide>
            <MProductCard :productCard="productCard01">
              <div slot="thumbTitle">호호</div>
            </MProductCard>
          </swiper-slide>
          <swiper-slide>
            <MProductCard :productCard="productCard01">
              <div slot="thumbTitle">호호</div>
            </MProductCard>
          </swiper-slide>
          <swiper-slide>
            <MProductCard :productCard="productCard01">
              <div slot="thumbTitle">호호</div>
            </MProductCard>
          </swiper-slide>
        </swiper>

        <div class="component__space"></div>

        <MProductCard :productCard="productCard02">
          <div slot="thumbTitle">호호</div>
          <div slot="category"><b>지금 신청 가능</b> 비대면</div>
        </MProductCard>
        <div class="component__space"></div>

        <MProductCard :productCard="productCard03">
          <div slot="category"><span class="point_green">#ASMR</span></div>
        </MProductCard>
        <div class="component__space"></div>

        <MProductCard :productCard="productCard04">
        </MProductCard>
        <div class="component__space"></div>
      </div>
      <div class="component__space"></div>

      <div class="component__group">
        <h4 class="component__txt">Counselor Card</h4>
        <MCnslrCard />
      </div>
      <div class="component__space"></div>

      <div class="component__group">
        <h4 class="component__txt">User Card</h4>
        <MUserCard />
      </div>
      <div class="component__space"></div>
    </div>
    <div class="component__space"></div>
  </div>
</template>

<script>
import MProductCard from '~/components/molecules/card/mProductCard.vue';
import MCnslrCard from '~/components/molecules/card/mCnslrCard.vue';
import MUserCard from '~/components/molecules/card/mUserCard.vue';

export default {
  name:'',
  components:{ MProductCard, MCnslrCard, MUserCard },
  props:{},
  data(){
      return{
        productCard01: {
          type: 'basic',
          badge: 'zoom',
          button: '',
          txt: '오늘 하루도 고생많았슴당'
        },
        productCard02: {
          type: 'wide',
          // badge: 'zoom',
          // button: '',
          txt: '오늘 하루도 고생많았슴당'
        },
        productCard03: {
          type: 'list',
          txt: '허허헣'
        },
        productCard04: {
          type: 'cart',
          txt: '스티커세트 ( 감정스티커 + 질문스티커 )'
        },

        swiperOption: {
          wrapperClass:'list_swipe__wrapper',
					slideClass:'list_swipe__slide',
          slidesPerView: 'auto'
        }

      }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import './css/components.scss';
</style>

