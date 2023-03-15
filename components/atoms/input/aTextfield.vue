<template>
  <div class="text_field">
    <!-- https://joshua1988.github.io/web-development/vuejs/v-model-usage/ -->
    <input
      type="text" class="text_field__input"
      required=""
      v-model="inputTxt"
      @change="onChange"
      @input="onInput"
      @keydown="onKeyDown"
      @keypress="onKeyPress"
      @click="onClick"
    >
    <!-- @click:append="show = !show" -->
    <label
      class="text_field__label"
      v-if="textField.label"
    >
      {{ textField.label }}
    </label>
    <div class="text_field__border"></div>
    <span
      class="text_field__desc"
      :class="true ? '' : ''"
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
  props:{
    /** textField 옵션들 */
    textField: {
      type: Object,
      default: () => ({
        label: '아이디',
        desc: '아이디를 입력해주세요.',
        btn: 'close'  // close, slct, pwd_off, pwd_on
      })
    }
  },
  data(){
      return{
        inputTxt: '',
        show:false,
      }
  },
  methods:{
    onInput(event) {
			this.$emit('input', event);
		},
		onChange(event) {
			this.$emit('change', event);
		},
		onKeyDown(event) {
			this.$emit('keydown', event);
		},
		onKeyPress(event) {
			this.$emit('keypress', event);
		},
		onClick(event) {
			this.$emit('click', event);
		},
  }
}
</script>
