<template>
  <div class="score">
    <div class="score__box">
      <span class="score__num">{{ score.num }}</span>
      <span
        v-if="score.reply"
        class="score__cnt-reply"
      >({{ score.reply }})</span>
    </div>
    <div class="score__box" v-if="score.like">
      <i class="score__like">{{ score.like }}</i>
    </div>
    <div class="score__box" v-if="score.call">
      <i class="score__call"></i>
    </div>
    <div class="score__box" v-if="score.msg">
      <i class="score__msg"></i>
    </div>
    <div class="score__box" v-if="score.pin">
      <i class="score__pin"></i>
    </div>
  </div>
</template>

<script>
export default {
  name:'AScore',
  components:{},
  props:{

    /** score */
    score: {
      type: Object,
      default: () => ({
        num: '4.92',
        reply: '86',
        like: '861',
        call: true,
        msg: true,
        pin: true
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

