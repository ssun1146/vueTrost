<template>
  <div class="price">
    <span v-if="price.discount" class="price__discount"> {{ price.discount }}</span>
    <span class="price__txt"> {{ price.txt }} </span>
    <span v-if="price.date" class="price__date">({{ price.date }} 기준)</span>
  </div>
</template>

<script>
export default {
  name:'APrice',
  components:{},
  props:{
    /** priceInfo */
    price: {
      type: Object,
      default: () => ({
        txt: '35,000원',
        date: '1주',
        discount: ''
      })
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
