<template>
  <button :class="classType">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name:'AButton',
  components:{},
  props:{
    /** btn width 옵션:: wpx100, wper30 */
    btnWidth: {type:String, default:'wper100'},

    /** btn height 옵션:: s, m, l */
    btnHeight: {type:String, default:'m'},

    /** btn Border 옵션 */
    btnBorder: {type:String, default:''},

    /** btn Shape 옵션 */
    btnShape: {type:String, default:''},

    /** btn Fill 옵션 :: common, fill(black), disabled, point */
    btnFill: {type:String, default:''},

    /** btn Shadow 옵션 */
    btnShadow: {type:Boolean, default:false},
  },
  data(){
      return{
      }
  },
  methods:{
  },
  computed: {
    classType() {
      return [
        'btn',
        this.btnWidth ? `btn__${this.btnWidth}` : ``,
        this.btnHeight ? `btn__${this.btnHeight}` : ``,
        this.btnBorder ? `btn__border-${this.btnBorder}` : ``,
        this.btnShape ? `btn__${this.btnShape}` : ``,
        this.btnFill ? `btn__bg-${this.btnFill}` : ``,
        this.btnShadow ? `btn__shadow` : ``,
      ]
    }
  }
}
</script>

<style>

</style>
