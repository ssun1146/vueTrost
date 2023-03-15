<template>
  <div class="toggle">
    <input type="checkbox" class="toggle__input" @change="onChange($event)" />
    <label class="toggle__label"></label>
    <span class="toggle__badge"></span>
  </div>
</template>

<script>
export default {
  name:'AToggle',
  components:{},
  props:{},
  data(){
      return{
      }
  },
  methods:{
    onChange(event) {
			this.$emit('change', event);
		},
  }
}
</script>
