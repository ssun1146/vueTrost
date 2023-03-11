<template>
  <!-- 상담사 정보  -->
  <div class="cnslr_card">
    <div class="cnslr__box">

      <div class="cnslr__info">
        <div class="cnslr__row">
          <p class="cnslr__name">곰도뤼</p>
          <p class="cnslr__grade cnslr__grade-1">전문</p>
        </div>
        <div class="cnslr__row">
          <p class="cnslr__greet">{{ cnslr.greet }}</p>
        </div>
      </div>
      <div class="cnslr__thumb">
        <img src="@/assets/img/img_doctor04.png" />
      </div>
      <div class="cnslr__price">
        35,000원 부터
      </div>
    </div>
    <div class="cnslr__btm">
      <AScore />
      <template v-for="(a, i) in cnslr.badge"> <!-- key값 관련 확인 -->
        <ABadge :vClass="'type-default'">{{ a }}</ABadge>
      </template>
    </div>
  </div>
</template>

<script>
import AScore from '~/components/atoms/ascore.vue';
import ABadge from '~/components/atoms/abadge.vue';

export default {
  name:'MCnslrCard',
  components:{ AScore, ABadge },
  props:{
    /** cnslr */
    cnslr: {
      type: Object,
      default: () => ({
        name: '곰도뤼',
        grade: ['1', '일반'],  // 2- lv2, 3-전문 4-마스터 5-신,
        greet: '소통과 공감으로 함께하는 시간~',
        price: '35,000',
        badge: ['성격', '무기력', '건강']
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
