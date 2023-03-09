<template>
  <button :class="'btn_ico-' + vclass"></button>
</template>

<script>
export default {
  name:'AIconBtn',
  components:{},
  props:{
    /** vclass ㅎㅎ */
    vclass: {type:String, default:''},
  },
  data(){
      return{
      }
  },
  methods:{
  }
}
</script>
