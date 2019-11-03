<template>
  <div>
    <div class="wccl-top">
      <div style="margin-right:20px;">蔬菜病虫害及防治</div>
    </div>
     <el-page-header @back="$router.go(-1)" ></el-page-header>
    <div class="bcff">
      <el-collapse accordion>
        <el-collapse-item title="葱">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">葱霜霉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">葱紫斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">葱褐斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">葱小菌核病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">葱软腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">葱炭疽病</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="大蒜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜软腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜叶疫病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜煤斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜黑粉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜红根腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜菌核病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜锈病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜匐柄霉叶枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">大蒜炭疽病</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="白菜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜软腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜干烧心</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜温室菜小菜蛾</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜炭疽病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜白斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜根结线虫</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜细菌性叶斑病</el-button>
          </el-row>

          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜角斑病</el-button>
          </el-row>

          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜病毒病</el-button>
          </el-row>

          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">白菜霜霉病</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="菠菜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜枯萎病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜炭疽病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜潜叶蝇</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜霜霉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜病毒病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">菠菜白斑病</el-button>
          </el-row>
        </el-collapse-item>

        <el-collapse-item title="香菜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">香菜菌核病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">香菜白粉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">香菜根腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">香菜叶斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">香菜立枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">香菜黑腐病</el-button>
          </el-row>
        </el-collapse-item>
        <el-collapse-item title="油菜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">油菜菌核病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">油菜黑腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">油菜细菌性褐斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">油菜猝倒病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">油菜白粉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">油菜霜霉病</el-button>
          </el-row>
        </el-collapse-item>

        <el-collapse-item title="黄瓜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜灰霉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜霜霉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜花打顶</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜花叶病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜细茵性绿枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜镰刀菌枯萎病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜角斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜化瓜</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜黄瓜苗沤根</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">黄瓜病毒病</el-button>
          </el-row>
        </el-collapse-item>

        <el-collapse-item title="丝瓜">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜链格孢黑斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜蔓枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜果腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜炭疽病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜褐腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜菌核病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜病毒病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">丝瓜轮纹斑病</el-button>
          </el-row>
        </el-collapse-item>

        <el-collapse-item title="西葫芦">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">西葫芦立枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">西葫芦茎腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">西葫芦白粉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">西葫芦笄霉褐腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">西葫芦细菌性叶斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">西葫芦烟粉虱</el-button>
          </el-row>
        </el-collapse-item>

        <el-collapse-item title="辣椒">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒早疫病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒斑萎病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒白斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒污霉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒枯顶病毒病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒霜霉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒褐腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒立枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">辣椒炭疽病</el-button>
          </el-row>
        </el-collapse-item>

        <el-collapse-item title="茄子">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">茄子果实疫病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">茄子红粉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">茄子茎基腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">茄子蠕孢褐斑病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">茄子霜霉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">茄子青枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">茄子圆星病</el-button>
          </el-row>
        </el-collapse-item>

        <el-collapse-item title="番茄">
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄黄化曲叶病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄早疫病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄白粉病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄蒂腐病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄扁茎和果实木栓化硬皮</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄猝倒病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄叶霉病的防治</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄芽枯病</el-button>
          </el-row>
          <el-row type="flex" align="middle">
            <el-button type="primary" @click="getinfo($event)">番茄软腐病</el-button>
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
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    getinfo(e) {
      const info = e.target.innerText;
      axios
        .get("http://182.92.164.58:3000/json/" + info + ".json")
        .then(data => {
          localStorage.setItem('ffdata',data.data.html)
          this.$router.push("/info");
        });
         
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 1%;
}
.bcff {
  margin-top: 10%;
}
.el-page-header{
  margin-top:20px;
}
.el-button{
  width: 100%
}
</style>