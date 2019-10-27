<template>
  <div>
    <div class="wccl-top">
      <div style="margin-right:20px;">种植技术</div>
    </div>
     <el-page-header @back="$router.go(-1)" ></el-page-header>
    <div class="zzjs">
      <el-collapse accordion>
        <el-collapse-item title="大蒜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜的冬季田间管理</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜高产新技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜浇水用肥管理方法</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜套姜巧种获得高产</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜种植的前期管理要点</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">秋播大蒜高产抓好七要点</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="黄瓜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">冬季大棚黄瓜打弯处理</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜的整枝技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜覆膜栽培工作细则</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜嫁接后苗床的管理</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜嫁接育苗技术要点</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜提前栽培增温措施</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">露地双茬黄瓜高产的栽培技术</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="番茄">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大棚番茄高产关键技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大棚番茄高产施肥技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">冬番茄受冻后快速恢复有方法</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄苗床土消毒处理</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄育苗技巧</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">如何高效控制番茄徒长</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">如何减少温室番茄落花落果</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">深冬期棚室套种番茄注意</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="辣椒">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒高产种植技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒落叶重 注意防四病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">秋延辣椒栽培管理技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">有机辣椒高产育苗技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">有机辣椒田间管理技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">怎么做好辣椒苗管理</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="白菜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜春管需注意</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大白菜莲座期管理技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">无公害白菜栽培技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">有机大白菜田间管理技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">有机大白菜种植技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">怎样防御大白菜冻害</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="菠菜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">6月菠菜田间管理技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜施肥新技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜优质高产巧栽培技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜在种植过程中需要注意的事项</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">有机菠菜无公害种植技巧</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="芹菜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大棚秋芹菜的栽培技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">管理芹菜死苗少有大学问</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">芹菜栽培管理实用技术</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">芹菜栽培新方法</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">秋芹菜如何培育壮苗</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">香芹菜夏季的田间管理</el-button>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    getinfo(e){
        const info=e.target.innerText
        axios.get(
          "http://182.92.164.58:3000/json/"+info+".json"
        ).then(data => {
         localStorage.setItem('ffdata',data.data.html);
              this.$router.push("/info");
        });

    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.el-row{
  margin-bottom: 1%
}
.zzjs {
  margin-top: 10%;
}
.el-page-header{
  // line-height: 80px !important
  margin-top: 20px;
}
</style>