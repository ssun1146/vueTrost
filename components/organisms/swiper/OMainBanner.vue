<template>
  <div class="main_banner">
    <swiper :options="bnrSwiper" >
      <swiper-slide>
        <img src="@/assets/img/bnr_trost01.png" class="main_banner__img"/>
      </swiper-slide>
      <swiper-slide>
        <img src="@/assets/img/bnr_trost02.png" class="main_banner__img" />
      </swiper-slide>
    </swiper>
    <div class="main_banner__pagination"></div>
  </div>
</template>

<script>
export default {
  name:'OMainBanner',
  components:{},
  props:{},
  data(){
      return{
        bnrSwiper:{
          wrapperClass:'list_swipe__wrapper',
					slideClass:'list_swipe__slide',
          slidesPerView: 1,
          loop: true,
          autoplay: {
            delay:3000
          },
          pagination: {
            el: '.main_banner__pagination',
            type: 'fraction',
          },
        }
      }
  },
  methods:{
  }


}
</script>
