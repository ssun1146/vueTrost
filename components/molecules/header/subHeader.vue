<template>
  <header class="sub_header">
    <div class="sub_header__box-l">
      <button
        class="sub_header__btn-back"
        @click="goback"
      ></button>
      <p
        class="sub_header__txt"
        v-if="header.txt"
      >{{ header.txt }}</p>
    </div>
    <h2 class="sub_header__title">{{ header.title }}</h2>
    <div class="sub_header__box-r">
    </div>
  </header>
</template>

<script>
export default {
  components:{},
  props:{
    /** subHeader 옵션 */
    header: {
      type: Object,
      default: () => ({
        txt:'',
        title:'타이틀',
      })
    }
  },
  data(){
      return{
      }
  },
  methods:{
    goback() {
      this.$router.back();
    }
  },
}
</script>
