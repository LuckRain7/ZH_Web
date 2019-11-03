<template>
  <div class="wccl">
    <!-- 顶部 -->
    <div class="wccl-top">
      <div style="margin-right:20px;">高温闷棚</div>
    </div>
    <el-page-header @back="$router.go(-1)"></el-page-header>
    <div style="height:10px;"></div>
    <el-row>
      <el-timeline>
        <el-timeline-item placement="top" hide-timestamp="true">
          <h4>物料</h4>
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:120px" src="http://182.92.164.58:8080/高温闷棚-1-撒有机物料.jpg" />
              <img v-if="feibian!='不选择'" style="width:100%;height:120px" src="http://182.92.164.58:8080/高温闷棚-2-畜禽粪便.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '0px' }">
              <p>将所有的蔬菜废弃物与{{second}}公斤{{jiegan}}等利用器械成 <br/> 3-5 cm，均匀铺洒在土壤表面</p>
            </el-card>
            <el-card :body-style="{ padding: '0px' }" v-if="feibian!='不选择'" >
              <p >将{{first}}公斤{{feibian}}均匀铺撒在有机物料表面,均匀喷洒菌剂</p>
            </el-card>
          </el-row>
        </el-timeline-item>
        <el-timeline-item hide-timestamp="true" placement="top">
          <h4>灌水</h4>
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:120px" src="http://182.92.164.58:8080/高温闷棚-3-施菌剂.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '0px' }">
              <p>对棚室内土壤或基质进行灌水至充分湿润，相对湿度达到85%左右，地表无明水，用水攥土壤不散即可</p>
            </el-card>
          </el-row>
        </el-timeline-item>
        <el-timeline-item hide-timestamp="true" placement="top">
          <h4>覆盖</h4>
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:120px" src="http://182.92.164.58:8080/高温闷棚-4-覆盖.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '0px' }">
              <p>选用地膜或整块塑料薄膜进行地面覆盖，搭接严密无漏缝。</p>
            </el-card>
          </el-row>
        </el-timeline-item>
        <el-timeline-item hide-timestamp="true" placement="top">
          <h4>闷棚</h4>
          <el-row>
            <el-col :span="10" style="margin-right:10px">
              <img style="width:100%;height:120px" src="http://182.92.164.58:8080/高温闷棚-5-闷棚.jpg" />
            </el-col>
            <el-card :body-style="{ padding: '0px' }">
              <p>棚室密闭后，保持棚内高温高湿状态25-30天，其中至少有累计15天以上的晴热天气。</p>
            </el-card>
          </el-row>
          <el-card>
            <p>
              高温闷棚期间应防止雨水灌入棚室内。闷棚可以持续到下茬作物定植前5到10天。结束后需进行晾棚，揭去地膜并进行通风。
              此过程可相当于{{result}}公斤商品有机肥，后期施入无机肥料即可。
            </p>
          </el-card>
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
      jiegan: "",
      feibian: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.first = localStorage.getItem("resultgw").split(",")[0];
    this.second = localStorage.getItem("resultgw").split(",")[1];
    this.result = localStorage.getItem("resultgw").split(",")[2];
    this.feibian = localStorage.getItem("resultgw").split(",")[3];
    this.jiegan = localStorage.getItem("resultgw").split(",")[4];
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
    height: 110px;
    margin: 5px 0 10px 0;
    .el-card__body {
      p {
        margin: 10px 5px;
        text-align: left;
        // line-height: 100px

      }
    }
  }
}
</style>