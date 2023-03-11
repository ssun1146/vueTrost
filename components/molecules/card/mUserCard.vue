<template>
  <div class="user_card">
    <div class="user__thumb">
      <img src="@/assets/img/img_doctor03.png" />
    </div>
    <div class="user__info">
      <p class="user__grade">{{ user.grade }}</p>
      <p class="user__name">{{ user.name }} 상담사</p>
      <AScore :score="user.score" />
    </div>
  </div>
</template>

<script>
import AScore from '~/components/atoms/ascore.vue';

export default {
  name:'MUserCard',
  components:{ AScore },
  props:{},
  data(){
      return{
        user: {
          grade:'전문',
          name:'곰도뤼',
          score: {
            num: '4.92',
            reply: '86',
          }
        }

      }
  },
  methods:{
  }
}
</script>
