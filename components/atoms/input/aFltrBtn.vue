<template>
  <div
    :class="'fltr_btn ' + ( fltr.theme ? `fltr_btn-${fltr.theme}` : `` )"
  >
    <input :type="fltr.type" class="fltr_btn__input" />
    <label class="fltr_btn__label"> {{ fltr.txt }}</label>
  </div>
</template>

<script>
export default {
  name:'AFltrBtn',
  components:{},
  props:{
    fltr: {
      type: Object,
      default: () => ({
        txt: '확인',
        type: 'checkbox',    // radio, checkbox
        theme: 'b',  // black, point
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
