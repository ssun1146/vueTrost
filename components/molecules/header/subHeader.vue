<template>
  <header class="sub_header">
    <div class="sub_header__box-l">
      <AIconBtn
        class="sub_header__btn"
        :vclass="'prev_b'"
        @click="goback"
      ></AIconBtn>
      <p
        class="sub_header__txt"
        v-if="header.txt"
      >{{ header.txt }}</p>
    </div>
    <h2 class="sub_header__title">{{ header.title }}</h2>
    <div class="sub_header__box-r">
      <AIconBtn
        class="sub_header__btn"
        :vclass="'close'"
        v-if="header.subBtn === 'close'"
      ></AIconBtn>
      <AIconBtn
        class="sub_header__btn"
        :vclass="'storage'"
        v-if="header.subBtn === 'storage'"
      ></AIconBtn>
      <AIconBtn
        class="sub_header__btn"
        :vclass="'cart'"
        v-if="header.subBtn === 'cart'"
      ></AIconBtn>
      <AIconBtn
        class="sub_header__btn"
        :vclass="'search'"
        v-if="header.subBtn === 'search'"
      ></AIconBtn>
      <button
        class="sub_header__btn-done"
        v-if="header.subBtn === 'done'"
      >완료</button>
    </div>
  </header>
</template>

<script>
import AIconBtn from '~/components/atoms/aiconbtn.vue';

export default {
  components:{ AIconBtn },
  props:{
    /** subHeader 옵션 */
    header: {
      type: Object,
      default: () => ({
        txt:'',
        title:'타이틀',
        subBtn: '',
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
