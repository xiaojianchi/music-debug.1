<template>
<!--
<div class="tab">
  <router-link tag="div" class="tab-item" to="/recommend">
    <span class="tab-link">推荐</span>
  </router-link>

  <router-link tag="div" class="tab-item" to="/singer">
    <span class="tab-link">歌手</span>
  </router-link>

  <router-link tag="div" class="tab-item" to="/rank">
    <span class="tab-link">排行</span>
  </router-link>

  <router-link tag="div" class="tab-item" to="/search">
    <span class="tab-link">搜索</span>
  </router-link>

</div>
-->
<div class="tab">
  <router-link tag="div" class="tab-item" to="/recommend">
    <span class="tab-link">推荐</span>
  </router-link>

  <router-link tag="div" class="tab-item" to="/singer">
    <span class="tab-link">歌手</span>
  </router-link>

  <router-link tag="div" class="tab-item" to="/rank">
    <span class="tab-link">排行</span>
  </router-link>

  <router-link tag="div" class="tab-item" to="/search">
    <span class="tab-link">搜索</span>
  </router-link>
</div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>

<style scoped lang="scss">
@use "~common/scss/veriables" as *;
/*
  .tab {
    display: flex;       //把 ul 设为 弹性容器
    height: 44px;       // 设置合适高度
    line-height: 44px;    // 把 li 元素 垂直居中
    font-size: $font-size-medium;       //设置 字体
    .tab-item {
      flex: 1;            // 弹性元素平分空间
      text-align: center;      // 水平居中
      .tab-link {
        padding-bottom: 5px;   // 使下边框距离内容 5px
        color: $color-text-l;    // 设置 文字颜色
      }
      &.router-link-active .tab-link  //设置被点击时的样式
       {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }


 .tab {
   display: flex;
   height: 44px;
   line-height: 44px;
   font-size: $font-size-medium;

   .tab-item {
     flex: 1;
     text-align: center;

     .tab-link {
       color: $color-text-l;
       padding-bottom: 5px;
     }

     // router-link-active  被点击时，vue-router自动会在该元素上添加该类
     &.router-link-active .tab-link {
       color: $color-theme;
       border-bottom: 2px solid $color-theme;
     }
   }
 }

 */
  .tab {
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-medium;

    .tab-item {
      flex: 1;
      text-align: center;

      .tab-link {
        color: $color-text-l;
        padding-bottom: 5px;
      }

      &.router-link-active .tab-link {
        color: $color-theme;
        border-bottom: 2px solid $color-theme;
      }
    }
  }
</style>
