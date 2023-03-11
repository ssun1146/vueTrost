<template>
  <div class="radio">
    <input type="radio" class="radio__input" />
    <label class="radio__label">{{ radio.label }}</label>
  </div>
</template>

<script>
export default {
  name:'ARadio',
  components:{},
  props:{
    radio: {
      type: Object,
      default: () => ({
        label: '',
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
