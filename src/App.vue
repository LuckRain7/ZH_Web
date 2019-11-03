<template>
  <div id="app">
    <el-container>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Footer from "./views/Footer.vue";
export default {
  components: {
    Footer
  }
};
</script>
<style lang="scss">
html,
body,
#app,
.el-container{
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
