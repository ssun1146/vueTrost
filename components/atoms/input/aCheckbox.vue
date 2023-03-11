<template>
  <div class="check">
    <input type="checkbox" class="check__input" />
    <label class="check__label">{{ checkbox.label }}</label>
  </div>
</template>

<script>
export default {
  name:'ACheckbox',
  components:{},
  props:{
    checkbox: {
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
