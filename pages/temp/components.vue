<template>
  <div>
    <h4 class="component__title">C</h4>
    <ul class="component__list">
      <li class="component__lst" v-for="(a, i) in menuList" :key="i">
        <nuxt-link :to="a.path">
          <div class="component__box">{{a.name}}</div>
        </nuxt-link>
      </li>
    </ul>
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
            /** 뱃지 */
            name: 'badge List',
            path: '/temp/badge',
          },
          {
            /** 버튼 */
            name: 'button List',
            path: '/temp/button',
          },
          {
            /** Header */
            name: 'Header',
            path: '/temp/Header',
          },
          {
            /** Card */
            name: 'Card',
            path: '/temp/Card',
          },
          {
            /** footer */
            name: 'footer',
            path: '/temp/footer',
          },
          {
            /** input */
            name: 'input',
            path: '/temp/input',
          },
          {
            /** searchBox */
            name: 'searchBox',
            path: '/temp/searchBox',
          },
          {
            /** chat */
            name: 'chatBox',
            path: '/temp/chatBox',
          },
          {
            /** etc */
            name: 'etc',
            path: '/temp/etc',
          },
        ]
      }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import './css/components.scss';

</style>
