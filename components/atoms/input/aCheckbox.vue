<template>
  <div class="check">
    <input type="checkbox" class="check__input" @change="onChange($event)" />
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
      onChange(event) {
        this.$emit('input', event);
        this.$emit('change', event);
      },
    }
  },
  methods:{
  }
}
</script>
