<template>
  <div class="searchbox">
    <i class="search__icon-search"></i>
    <input type="text" class="search__input" placeholder="어떤 것을 찾고 계신가요?" v-model="search" />
    <button
      class="search__btn-dlt"
      v-if="search !== ''"
      @click="clearInput"
    ></button>
  </div>
</template>

<script>
export default {
  name:'MSearchBox',
  components:{},
  props:{},
  data(){
      return{
        search: ''
      }
  },
  methods:{
    clearInput: function () {
      this.search = '';
    }
  }

}
</script>
