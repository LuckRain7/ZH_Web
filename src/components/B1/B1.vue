<template>
  <div class="wccl">
    <!-- 顶部 -->
    <div class="wccl-top">
      <div style="margin-right:20px;">尾菜处理</div>
    </div>

    <!-- 表单 -->
    <div style="height:40px;"></div>
    <el-form :model="data" ref="ruleForm" class="demo-ruleForm">
      <el-form-item label="蔬菜名称" prop="shucaimingcheng">
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

      <el-form-item
        label="种植面积(亩)"
        prop="zhongzhimianji"
        :rules="[
         { required: true, message: '请填写种植面积', trigger: 'blur' },
        { type: 'number', message: '必须为数字值',trigger: 'blur' }]"
      >
        <br />
        <el-input
          placeholder="请输入种植面积"
          v-model.number="data.zhongzhimianji"
          autocomplete="off"
          style="width:95%;"
        ></el-input>
      </el-form-item>

      <el-form-item label="农作物秸秆" prop="fuliao2">
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
  z-index: 1;
  top: 0;
  left: 0;
  padding: 10px 10px;
  color: white;
  text-align: center;
  .fanhui {
    color: white;
  }
}
.el-form-item__content{
  .el-button{
  font-size: 18px !important
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
        fuliao1: "",
        fuliao2: ""
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
      helpKname: ["牛粪", "羊粪", "猪粪", "鸡粪", "尿素"],
      helpJname: ["玉米秸秆", "小麦秸秆", "树叶", "木屑"],
      main: {
        白菜: { z: 222.324, d: 0.033, e: 0.3 },
        番茄: { z: 54.12, d: 0.031, e: 0.541 },
        黄瓜: { z: 62.525, d: 0.045, e: 0.312 },
        辣椒: { z: 31.47, d: 0.032, e: 0.34 },
        大蒜: { z: 35.666, d: 0.027, e: 0.28 },
        其他叶菜类: { z: 222.324, d: 0.031, e: 0.3 },
        其他根茎类: { z: 105.515, d: 0.012, e: 0.34 },
        其他瓜果类: { z: 95.038, d: 0.031, e: 0.312 }
      },
      helpK: {
        牛粪: { p: 1, d: 0.013, e: 0.318 },
        羊粪: { p: 1, d: 0.006, e: 0.16 },
        猪粪: { p: 1, d: 0.02, e: 0.25 },
        鸡粪: { p: 1, d: 0.03, e: 0.3 },
        尿素: { p: 0.03, d: 0.46, e: 0 }
      },
      helpJ: {
        玉米秸秆: { e: 0.433, d: 0.005 },
        小麦秸秆: { e: 0.416, d: 0.006 },
        树叶: { e: 0.49, d: 0.02 },
        木屑: { e: 0.492, d: 0.001 }
      }
    };
  },
  methods: {
    //   提交
    submitForm() {
      const data = this.data;
      const first = this.first();
      console.log("第一种辅料的质量", first);

      const second = this.second(first);
      console.log("第二种辅料质量" + second);

      const result = this.result(first, second);
      console.log("商品有机肥质量" + result);

  
        console.log("商品有机肥质量" + result);
      localStorage.setItem("result", first + "," + second + "," + result+","+data.fuliao1+","+data.fuliao2);
      this.$router.push("/wcclinfo");
    },
    first() {
      const data = this.data;
      let s = data.zhongzhimianji,
        z = this.main[data.shucaimingcheng].z,
        p = this.helpK[data.fuliao1].p;
      let result = (s * z * 0.3 * p) / 0.6;

      return this.keepTwoDecimal(result);
    },
    //
    second(nk) {
      const data = this.data,
        main = this.main,
        k = this.helpK,
        j = this.helpJ;
      let s = data.zhongzhimianji,
        z = main[data.shucaimingcheng].z,
        d = main[data.shucaimingcheng].d,
        e = main[data.shucaimingcheng].e,
        dk = k[data.fuliao1].d,
        ek = k[data.fuliao1].e,
        ej = j[data.fuliao2].e,
        dj = j[data.fuliao2].d;

      let top = s * z * (25 * d - e) + 0.6 * nk * (25 * dk - ek);
      let bottom = (ej - 25 * dj) * 0.65;

      return this.keepTwoDecimal(top / bottom);
    },
    result(m1, m2) {
      const data = this.data,
        main = this.main;
      let s = data.zhongzhimianji,
        z = main[data.shucaimingcheng].z;

      let result = (s * z + m1 + m2) * 0.2;
      return this.keepTwoDecimal(result);
    },
    keepTwoDecimal(number) {
      return Number(number.toFixed(1));
    }
  }
};
</script>