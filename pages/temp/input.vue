<template>
  <div class="component">
    <div class="component__box">
      <div class="component__group">
        <h4 class="component__txt">Input</h4>
        <ATextField :textField="textField01" />
      </div>
      <div class="component__space"></div>

      <div class="component__group">
        <h4 class="component__txt">Checkbox</h4>
        <ACheckbox :checkbox="checkbox01" />
      </div>
      <div class="component__space"></div>

      <div class="component__group">
        <h4 class="component__txt">Radio</h4>
        <ARadio :radio="radio01" />
      </div>
      <div class="component__space"></div>

      <div class="component__group">
        <h4 class="component__txt">Filter Button</h4>
        <div style="display:flex; width:100%; margin-bottom:8px; ">
          <AFltrBtn :fltr="fltr01"  />
          <AFltrBtn :fltr="fltr01"  />
        </div>

          <div style="display:flex; width:100%; ">
          <AFltrBtn :fltr="fltr02"  />
          <AFltrBtn :fltr="fltr02"  />
        </div>
      </div>
      <div class="component__space"></div>


      <div class="component__group">
        <h4 class="component__txt">toggle</h4>
        <AToggle />
      </div>
      <div class="component__space"></div>

    </div>
  </div>
</template>

<script>
import ATextField from '~/components/atoms/input/aTextfield.vue';
import ACheckbox from '~/components/atoms/input/aCheckbox.vue';
import ARadio from '~/components/atoms/input/aRadio.vue';
import AFltrBtn from '~/components/atoms/input/aFltrBtn.vue';
import AToggle from '~/components/atoms/input/aToggle.vue';

export default {
  name:'',
  components:{ ATextField, ACheckbox, ARadio, AFltrBtn, AToggle },
  props:{},
  data(){
      return{
        textField01: {
          label: '아이디',
          desc: '아이디를 입력해주세요.',
          btn: 'close'  // close, slct, pwd_off, pwd_on
        },
        checkbox01: {
          label: '체크박스'
        },
        radio01: {
          label: '라됴버튼'
        },
        fltr01: {
          txt:'체크박스들',
          type:'checkbox',
          theme: 'black',
        },
        fltr02: {
          txt:'허호',
          type:'checkbox',
          theme: 'point',
        }
      }
  },
  methods:{
  }

}
</script>

<style lang="scss" scoped>
@import './css/components.scss';
</style>

