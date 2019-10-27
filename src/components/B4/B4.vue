<template>
  <div class="my">
    <div class="wccl-top">
      <div style="margin-right:20px;">我的</div>
    </div>
    <div class="tips-info">
      <el-row type="flex" align="middle">
        <el-button @click="wcdf()" type="primary">尾菜堆肥历史</el-button>
      </el-row>
      <el-row type="flex" align="middle">
        <el-button @click="gwmp()" type="primary">高温闷棚历史</el-button>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        wcdf(){
            this.$router.push( '/wcclinfo')
        },
        gwmp(){
             this.$router.push('/gwmpinfo')
        }
    }
}
</script>
<style lang="scss" scoped>
.tips-info {
    margin-top: 30%;
  .el-row {
    margin-bottom: 40px;
    width: 100%;
    .el-button{
        width: 100%;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>