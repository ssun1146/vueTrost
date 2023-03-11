<template>
  <div :class="`${productCard.type}_card`">
    <div class="card__thumb">
      <img src="@/assets/img/bg_healing01.png" />
      <div class="card__thumb_title">
        <slot name="thumbTitle"></slot>
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
      <slot name="category"></slot>
      <p class="card__txt">{{ productCard.txt }}</p>
      <span class="card__desc"></span>
      <AScore
        :score="score"
        v-if="productCard.type === 'wide'"
      />
      <APrice v-if="productCard.type !== 'list'" />
    </div>

  </div>
</template>

<script>
import ABadge from '~/components/atoms/abadge.vue';
import APrice from '~/components/atoms/aprice.vue';
import AScore from '~/components/atoms/ascore.vue';

export default {
  name:'MProductCard',
  components:{ ABadge, APrice, AScore },
  props:{
    productCard: {
      type: Object,
      default: () => ({
        type: 'basic',   // basic, wide, list, cart
        badge: 'zoom',
        button: '',
        txt: '오늘 하루도 고생많았슴당'
      })
    }
  },
  data(){
      return{
        score: {
          num: '4.92',
          like: '861',
        }
      }
  },
  methods:{
  }
}
</script>
