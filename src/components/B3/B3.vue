<template>
  <div class="tips">
    <div class="wccl-top">
      <div style="margin-right:20px;">小贴士</div>
    </div>
    <div class="tips-info">
      <el-row type="flex" align="middle">
        <el-button type="primary" @click="$router.push('/bcff')">病虫害及防治</el-button>
      </el-row>
      <el-row type="flex" align="middle">
        <el-button type="primary" @click="$router.push('/zzjs')">种植技术</el-button>
      </el-row>
      <el-row type="flex" align="middle">
        <el-button type="primary" @click="weicai()">尾菜堆肥</el-button>
      </el-row>
      <el-row type="flex" align="middle" >
        <el-button type="primary" @click="gaowen()"
          >高温闷棚</el-button
        >
      </el-row>
      <div v-html="htmlData"></div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    weicai(){
      window.open('http://182.92.164.58:8080/尾菜堆肥.pdf')
    },
    gaowen(){
       window.open('http://182.92.164.58:8080/高温闷棚.pdf')
    }
  }
};
</script>
<style lang="scss" scoped>
.imga{

width:100%;

height:auto;
}
.tips-info {
  margin-top: 20%;
  .el-row {
    margin-bottom: 40px;
    width: 100%;
    .el-button {
      width: 100%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>