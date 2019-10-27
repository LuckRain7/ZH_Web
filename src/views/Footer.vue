<template>
  <div class="tabs">
    <!--命名路由-->
    <ul>
      <!--this inspection reports XML/HTML tags with missing mandatory attrbutes ,you can specify attrbute name that should not  be reported-->
      <!--home被点击后，一直处于激活状态，因此需要使用精确匹配模式，在router-link中添加exact属性-->
      <router-link to="/weicaichuli" tag="li" exact>
        <!-- <div>
          <i class="icon iconfont icon-31shouye"></i>
        </div> -->
        <div>尾菜处理</div>
      </router-link>
      <router-link to="/gaowenmenpeng" tag="li">
        <!-- <div>
          <i class="icon iconfont icon-zhubaoshipin"></i>
        </div> -->
        <div>高温闷棚</div>
      </router-link>
      <router-link to="/tips" tag="li">
        <!-- <div>
          <i class="icon iconfont icon-huiyuanqia"></i>
        </div> -->
        <div>小贴士</div>
      </router-link>
      <!-- <router-link to="/my" tag="li">
        <div>
          <i class="icon iconfont icon-gouwucheman"></i>
        </div>
        <div>我的</div>
      </router-link> -->
    </ul>
  </div>
</template>
<script >
export default {};
</script>
<style lang="scss">
.tabs {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 2px 4px #000;
  width: 100%;
  & > ul,
  & > ul > li {
    margin: 0;
    padding: 0;
  }
  ul {
    display: table;
    width: 100%;
    & > li {
      text-align: center;
      font-size: 16px;
      display: table-cell;
      padding: 15px 12px;
      cursor: pointer;
      &.router-link-active {
        color: rgba(36, 128, 255, 1);
      }
      & > div {
        font-size: 14px;
        & > i {
          font-size: 30px;
        }
      }
    }
  }
}
</style>