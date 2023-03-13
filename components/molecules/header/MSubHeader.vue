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
        v-if="header.isClose === true"
      ></AIconBtn>
      <AIconBtn
        class="sub_header__btn"
        :vclass="'storage'"
        v-if="header.isStorage === true"
      ></AIconBtn>
      <AIconBtn
        class="sub_header__btn"
        :vclass="'cart'"
        v-if="header.isCart === true"
      ></AIconBtn>
      <AIconBtn
        class="sub_header__btn"
        :vclass="'search'"
        v-if="header.isSearch === true"
      ></AIconBtn>
      <button
        class="sub_header__btn-done"
        v-if="header.isDone === true"
      >완료</button>
    </div>
  </header>
</template>

<script>
import AIconBtn from '~/components/atoms/aiconbtn.vue';

export default {
  name: 'MSubHeader',
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
