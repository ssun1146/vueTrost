<template>
  <div
    :class="`icon icon__${classSize} icon-${classOpt}`"
  >
  </div>
</template>

<script>
export default {
  name:'AIcon',
  components:{},
  props:{
    /** ================ assetType
     * 단독일 때 :: icon
     * bgImg로 사용될 때 :: bg
     */
    // assetType:{type:String, default:'asset'},

    /** classSize */
    classSize: {type:String, default:'s'},

    /** classOpt */
    classOpt: {type:String, default:''}
  },
  data(){
      return{
      }
  },
  methods:{
  },
  computed: {
    // classType() {
    //   if (this.assetType === 'asset') {
    //     return [
    //       'icon',
    //       this.classSize ? `icon__${this.classSize}` : ``,
    //       this.classOpt ? `icon-${this.classOpt}` : ``,
    //     ]
    //   } else if ( this.assetType === 'bg' ){
    //     return [
    //     ]
    //   }
    // }
  }
}
</script>

<style>

</style>
