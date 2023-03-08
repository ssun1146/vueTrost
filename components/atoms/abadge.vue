<template>
  <div :class="vClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'ABadge',
    components:{},
    props:{
      /** vclass */
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
