<template>
  <div class="wccl">
    <!-- 顶部 -->
    <div class="wccl-top">
      <div style="margin-right:20px;">尾菜处理</div>
    </div>
    <el-page-header @back="$router.go(-1)"></el-page-header>
    <div style="height:10px;"></div>
    <el-row>
      <el-timeline>
        <el-timeline-item timestamp="第1-3天" placement="top">
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-1-蔬菜废弃物.jpg" />
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-2-农作物秸秆.jpg" />
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-3-畜禽粪便.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '37px 0px 0px 0px' }">
              <p>全部蔬菜废弃物</p>
            </el-card>
            <el-card :body-style="{ padding: '37px 0px 0px 0px' }">
              <p>{{first}}公斤{{jiegan}}</p>
            </el-card>
            <el-card :body-style="{ padding: '37px 0px 0px 0px' }">
              <p>{{second}}公斤{{feibian}}</p>
            </el-card>
          </el-row>
          <el-card>
            <p>进行晾晒，注意通风</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="第4天" placement="top">
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-4-粉碎.jpg" />
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-5-制堆.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '37px 0px 0px 0px' }">
              <p>物料粉碎至1-2cm</p>
            </el-card>
            <el-card :body-style="{ padding: '0px' }">
              <div class="testaa"><p style="text-align: left;margin: 15px 7px;">分3-4层制堆，每层厚度20cm～50cm之间，均匀喷洒菌剂</p></div>
            </el-card>
          </el-row>
        </el-timeline-item>
        <el-timeline-item timestamp="第7-22天" placement="top">
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-6-翻堆.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '37px 0px 0px 0px' }">
              <p>每2天翻堆一次</p>
            </el-card>
          </el-row>
        </el-timeline-item>
        <el-timeline-item timestamp="第23天" placement="top">
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-7-菌丝明显.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '0px' }">
<div class="testaa"><p style="text-align: left;margin: 10px 7px;">堆体体积下降，物料萎蔫变软，外表呈棕黄色，结构疏松微臭，表面菌丝明显</p></div>


            </el-card>
          </el-row>
        </el-timeline-item>
        <el-timeline-item timestamp="第23-48天" placement="top">
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-8-陈化.jpg" />
              <img style="width:100%;height:100px" src="http://182.92.164.58:8080/堆肥-9-白色菌丝.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '0px' }" style="margin-top:50px;height:110px" >
              <div class="testaa"><p style="text-align: left;margin: 10px 7px;">
                不再翻堆，
                静置陈化，
                堆体呈泥土色，
                散发酒曲香味，
                白色菌丝增多，
                发酵成功，
                相当{{result}}公斤商品有机肥。
              </p></div>
            </el-card>
          </el-row>
        </el-timeline-item>
      </el-timeline>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      first: 0,
      second: 0,
      result: 0,
      feibian: "",
      jiegan: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.first = localStorage.getItem("result").split(",")[0];
    this.second = localStorage.getItem("result").split(",")[1];
    this.result = localStorage.getItem("result").split(",")[2];
    this.feibian = localStorage.getItem("result").split(",")[3];
    this.jiegan = localStorage.getItem("result").split(",")[4];
  }
};
</script>
<style lang="scss" scoped>
.el-page-header {
  // line-height: 80px !important;
  margin-top:20px;
}
.el-timeline {
  padding: 0;
}
.el-row {
  > .el-card {
    height: 90px;
    margin: 5px 0 10px 0;
    .el-card__body {
      p {
        margin: 0;
        text-align: center;
        // line-height: 100px
      }
    }
  }
}
p {
  // text-align: left;
  margin: 0;
}
.testaa{
  width:100%;
  height:100%;
  
}
</style>