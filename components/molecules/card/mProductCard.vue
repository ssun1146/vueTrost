<template>
  <div :class="`${productCard.type}_card`">
    <div class="card__thumb">
      <img src="@/assets/img/bg_healing01.png" />
      <div class="card__thumb_title">
        <slot name="thumbTitle">gg</slot>
      </div>
      <ABadge
        v-if="productCard.badge"
        :class="productCard.badge"
      />
      <AButton
        v-if="productCard.btn"
        :class="productCard.btn"
      />
    </div>
    <div class="card__info">
      <p class="card__txt">{{ productCard.txt }}</p>
      <APrice />
    </div>

  </div>
</template>

<script>
import ABadge from '~/components/atoms/abadge.vue';
import APrice from '~/components/atoms/aprice.vue';

export default {
  name:'MProductCard',
  components:{ ABadge, APrice },
  props:{
    productCard: {
      type: Object,
      default: () => ({
        type: 'basic',   // basic, wide, list
        badge: 'zoom',
        button: '',
        txt: '오늘 하루도 고생많았슴당'
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
