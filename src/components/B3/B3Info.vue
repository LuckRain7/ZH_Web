<template>

  <div>
     <el-page-header @back="$router.go(-1)" ></el-page-header>
    <p v-html="html"></p>
    <p class="foo">@来源：中国农资网</p>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
      html:""
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){
    this.html=localStorage.getItem('ffdata')
  },
  mounted(){
    
  }
}
</script>
<style lang="scss">
.foo{
  position: fixed;
  bottom: 6%;
  left: 34%;
  color: #a18c8c;
}
</style>