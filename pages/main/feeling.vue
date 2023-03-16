<template>
  <TFeel />
</template>

<script>
import TFeel from '~/components/templates/TFeel.vue';
export default {
  layout:'SubLayout',
  name:'',
  components:{ TFeel },
  props:{},
  data(){
      return{
        menuList:[
          {
            name: 'component Page',
            path: '/temp/components',
          }
        ]
      }
  },
  methods:{
    goback() {
      this.$router.back();
    }
  }

}
</script>
