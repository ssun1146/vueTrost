<template>
  <div :class="'badge badge__' + vClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'ABadge',
    components:{},
    props:{
      /** vclass
       * count, count-black, zoom, type-default, type-point, check
       */
      vClass: {type:String, default:''}
    },
    data(){
        return{
        }
    },
    methods:{
    }
}
</script>
