<template>
  <div class="basic_list">
    <h4 class="list__title">{{ list.title }}</h4>
    <swiper :options="basicSwiper" class="list__swiper">
      <swiper-slide v-for="(a,i) in 4" :key="i">
        <MProductCard :productCard="productCard" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import MProductCard from '~/components/molecules/card/mProductCard.vue'

export default {
  name:'OBasicList',
  components:{ MProductCard },
  props:{
    list: {
      type: Object,
      default: () => ({
        title: '',
      })
    }
  },
  data(){
      return{
        basicSwiper:{
          wrapperClass:'list_swipe__wrapper',
					slideClass:'list_swipe__slide',
          slidesPerView: 'auto',
        },
        productCard: {
          type: 'basic',   // basic, wide, list, cart
          badge: 'zoom',
          button: '',
          txt: '오늘 하루도 고생많았슴당'
        }
      }
  },
  methods:{
  }
}
</script>
