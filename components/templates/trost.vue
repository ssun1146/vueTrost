<template>
  <div class="trost">
    <nuxt-link :to="menuList[0].path" >
      <button class="">컴포넌트</button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name:'',
  components:{},
  props:{},
  data(){
      return{
        menuList:[
          {
            /** 컴포넌트페이지 */
            name: 'component Page',
            path: '/temp/components',
          }
        ]
      }
  },
  methods:{
  }
}
</script>

<style>

</style>
