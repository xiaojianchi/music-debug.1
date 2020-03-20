<template>
  <div class = "m-header">
    <div class = "icon"></div>
    <h1 class = "text">Chicken Music</h1>
    <div class = "mine">
      <span class = "icon-mine"></span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang = "scss">
  /*
  用use不行 ?  使用 use 会引入 命名空间 是 Sass 的模块化策略.

  可以使用 as 给 命名空间定义名字.
   @use "~common/scss/veriables.scss" as name
  如果使用 as * --> 消除命名空间
  如果不指定，默认使用最后引入的文件名----> veriables

  访问变量时需要使用 命名空间.变量的形式

     veriables.$color
  */
  // @import "~common/scss/veriables.scss";
  @use "@common/scss/variable" as *;
  @use "@common/scss/mixin" as *;

  .m-header {
    position: relative;
    text-align: center;
    color: $color-theme;
    height: 44px;
    border: 1px solid red;
    .icon {
      width: 30px;
      height: 32px;
      margin-top: 6px;
      margin-right: 10px;
      display: inline-block;
      @include bg-imgage('logo');
      background-size: 30px 32px;
    }
    .text {
      display: inline-block;
      vertical-align: top;
      margin-top: 14px;
    }

    .mine {
      position: absolute;
      top: 0;
      right: 0;
      .icon-mine {
        display: inline-block;
        font-size: $font-size-large-x;
        margin: 10px;
      }
    }
  }
</style>

