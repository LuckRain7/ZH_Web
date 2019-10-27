<template>
  <div class="wccl">
    <!-- 顶部 -->
    <div class="wccl-top">
      <div style="margin-right:20px;">高温闷棚</div>
    </div>

    <!-- 表单 -->
    <div style="height:40px;"></div>
    <el-form :model="data" ref="data" class="demo-data">
      <el-form-item label="蔬菜名称" prop="shucaimingcheng" required>
        <br />
        <el-select
          v-model="data.shucaimingcheng"
          placeholder="请选择蔬菜名称"
          style="width:95%;"
        >
          <template v-for="(item, index) in mainName">
            <el-option :label="item" :value="item" :key="index"></el-option>
          </template>
        </el-select>
      </el-form-item>

      <el-form-item required label="大棚面积(亩)" prop="shucaimingcheng">
        <br />
        <el-input
          placeholder="请输入种植面积"
          v-model.number="data.zhongzhimianji"
          autocomplete="off"
          style="width:95%;"
        ></el-input>
      </el-form-item>

      <el-form-item label="农作物秸秆" prop="fuliao2" required>
        <br />
        <el-select
          v-model="data.fuliao2"
          placeholder="请选择农作物秸秆"
          style="width:95%;"
        >
          <template v-for="(item, index) in helpJname">
            <el-option :label="item" :value="item" :key="index"></el-option>
          </template>
        </el-select>
      </el-form-item>

      <el-form-item label="畜禽粪便" prop="fuliao1">
        <br />
        <el-select
          v-model="data.fuliao1"
          placeholder="请选择畜禽粪便"
          style="width:95%;"
        >
          <template v-for="(item, index) in helpKname">
            <el-option :label="item" :value="item" :key="index"></el-option>
          </template>
        </el-select>
      </el-form-item>
      <!-- ---------------- -->
      <template v-if="isShowM">
        <el-form-item
          label="现有重量(公斤)"
          :rules="[{ type: 'number', message: '必须为数字值' }]"
        >
          <br />
          <el-input
            placeholder="请输入畜禽粪便重量"
            v-model.number="data.m"
            autocomplete="off"
            style="width:95%;"
          ></el-input>
        </el-form-item>
      </template>
      <!-- ---------------- -->
      <span style="color:red;font-size:14px;"
        >提示:若填写畜禽粪便，则必填现有重量</span
      >
      <br />
      <br />
      <!-- ---------------- -->
      <el-form-item>
        <el-button type="primary" @click="submitForm()">
          生成
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
.wccl-top {
  background-color: rgba(36, 128, 255, 1);
  width: 100%;
  position: fixed;

  top: 0;
  left: 0;
  padding: 10px 10px;
  color: white;
  text-align: center;
  .fanhui {
    color: white;
  }
}
</style>
<script>
export default {
  data() {
    return {
      data: {
        zhongzhimianji: null,
        shucaimingcheng: "",
        fuliao1: "不选择",
        fuliao2: "",
        m: null
      },
      mainName: [
        "白菜",
        "番茄",
        "黄瓜",
        "辣椒",
        "大蒜",
        "其他叶菜类",
        "其他根茎类",
        "其他瓜果类"
      ],
      helpKname: ["牛粪", "羊粪", "猪粪", "鸡粪", "不选择"],
      helpJname: ["玉米秸秆", "小麦秸秆", "树叶", "木屑"],
      main: {
        白菜: { z: 222.324, d: 0.033, e: 0.3, m: 350 },
        番茄: { z: 54.12, d: 0.031, e: 0.541, m: 560 },
        黄瓜: { z: 62.525, d: 0.045, e: 0.312, m: 700 },
        辣椒: { z: 31.47, d: 0.032, e: 0.34, m: 350 },
        大蒜: { z: 35.666, d: 0.027, e: 0.28, m: 350 },
        其他叶菜类: { z: 222.324, d: 0.031, e: 0.3, m: 350 },
        其他根茎类: { z: 105.515, d: 0.012, e: 0.34, m: 560 },
        其他瓜果类: { z: 95.038, d: 0.031, e: 0.312, m: 560 }
      },
      helpK: {
        牛粪: { p: 0.4, d: 0.013, e: 0.318 },
        羊粪: { p: 0.4, d: 0.006, e: 0.16 },
        猪粪: { p: 0.4, d: 0.02, e: 0.25 },
        鸡粪: { p: 0.4, d: 0.03, e: 0.3 },
        不选择: { p: 0, d: 0, e: 0 }
        // 尿素: { p: 0.03, d: 0.46, e: 0 }
      },
      helpJ: {
        玉米秸秆: { e: 0.433, d: 0.005 },
        小麦秸秆: { e: 0.416, d: 0.006 },
        树叶: { e: 0.49, d: 0.02 },
        木屑: { e: 0.492, d: 0.01 }
      },
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        age: 1
      }
    };
  },
  methods: {
    //   提交
    submitForm() {
      const first = this.first();
      console.log("第一种辅料质量:", first);

      const second = this.second(first);
      console.log("第二种辅料质量:", second);

      const there = this.there(first, second);
      console.log("腐熟有机肥量:", there);

     localStorage.setItem("resultgw", first + "," + second + "," + there+","+this.data.fuliao1+","+this.data.fuliao2);
      this.$router.push("/gwmpinfo");

    },
    first() {
      let first_m = this.data.m || 0;// M表示输入畜禽粪便量，可为0
      return first_m;
    },
    second(mk) {
      const data = this.data;
      const main = this.main;

      let ek = this.helpK[data.fuliao1].e,
        dk = this.helpK[data.fuliao1].d,
        s = data.zhongzhimianji,
        zi = main[data.shucaimingcheng].z,
        ei = main[data.shucaimingcheng].e,
        di = main[data.shucaimingcheng].d;
      let top = 0.6 * mk * (ek - 25 * dk) + s * zi * (ei - 25 * di);
      console.log('top',top);
      

      let dj = this.helpJ[data.fuliao2].d,
        ej = this.helpJ[data.fuliao2].e;
      let dowm = (25 * dj - ej) * 0.65;

      return this.keepTwoDecimal(top / dowm);
    },
    there(mk, nj) {
      let s = this.data.zhongzhimianji,
        zi = this.main[this.data.shucaimingcheng].z;
      let result = (mk + nj + s * zi) / 0.65;
      return this.keepTwoDecimal(result);
    },
    keepTwoDecimal(number) {
      return Number(number.toFixed(2));
    }
  },
  computed: {
    isShowM() {
      let is = true;
      if (this.data.fuliao1 == "不选择") {
        is = false;
      }
      return is;
    }
  }
};
</script>