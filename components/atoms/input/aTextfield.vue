<template>
  <div class="text_field on">
    <input type="text" class="text_field__input" required="">
    <label
      class="text_field__label"
      v-if="textField.label"
    >
      {{ textField.label }}
    </label>
    <div class="text_field__border"></div>
    <span
      class="text_field__desc"
      v-if="textField.desc"
    >
      {{ textField.desc }}
    </span>
    <button
      :class="`text_field__btn text_field__btn-${textField.btn}`"
      v-if="textField.btn"
    ></button>
  </div>
</template>

<script>
export default {
  name:'ATextField',
  components:{ },
  props:{},
  data(){
      return{
      }
  },
  methods:{
  }
}
</script>
