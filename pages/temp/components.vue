<template>
  <div class="component">
    <h4 class="component__title">Components</h4>
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
            /** 아이콘 */
            name: 'icon List ',
            path: '/temp/icon',
          },
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
            path: '/temp/header',
          },
          {
            /** Card */
            name: 'Card',
            path: '/temp/card',
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
            name: 'searchBox - ',
            path: '/temp/searchBox',
          },
          {
            /** chat */
            name: 'chatBox - ',
            path: '/temp/chatBox',
          },
          {
            /** etc */
            name: 'etc - ',
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
