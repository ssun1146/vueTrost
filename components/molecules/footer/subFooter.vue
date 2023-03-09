<template>
  <footer
    :class="footer.type === '' ? 'sub_footer' : `sub_footer sub_footer-${footer.type}`"
  >
    <AButton
      :btnHeight="'l'"
      :btnBorder="'common'"
      :btnShape="'square'"
      :btnFill="'common'"
    >
      <slot>확인</slot>
    </AButton>
    <AButton
      :btnHeight="'l'"
      :btnShape="'square'"
      :btnFill="'fill'"
      v-if="footer.type !== 'block'"
    >
      <slot>확인</slot>
    </AButton>
  </footer>
</template>

<script>
import AButton from '~/components/atoms/abutton.vue'

export default {
  name:'subFooter',
  components:{ AButton },
  props:{
    /** footer 정보 */
    footer: {
      // 버튼이한개 일 때 :: block, split, half
      /**
       * half :: 버튼이 두 개 (default)
       * block :: 버튼이 한개
       * split :: 다른 사이즈 버튼이 2개
       */
      type:''
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
