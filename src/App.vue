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
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.nav {
  height: 80px;
  line-height: 80px;
  display: flex;
  text-align: center;
  bottom: 0;
}
.nav-item {
  flex: 1;
  text-decoration: none;
}
.nav-item:link,
.nav-item:visited {
  background-color: white;
  color: black;
}
.nav-item:hover,
.nav-item:active {
  color: white;
  background-color: #c8c6c6;
}
</style>
