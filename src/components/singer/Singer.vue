<!--
  #  1. 页面布局
  #  2. 样式修改
    3. 数据抓取
    4. 页面逻辑
-->

<template>
  <div class = "container">
    <div class = "search-wrapper">
      <input type = "text" class = "input-control" placeholder = "热门歌手">
    </div>
    <div class = "list-wrapper">
      <ul class = "list-group">
        <li class = "list-item">
          <div class = "icon">
            <img src = "../../common/image/test.jpg" class = "imge">
          </div>
          <div class = "text">
            <h1 class = "name">周深</h1>
          </div>
        </li>
      </ul>
    </div>
    <div class = "fixed-wrapper">
      <ul class = "alph-group">
        <li class = "alph-item">热</li>
        <li v-for = "(item,i) in 26" :key = "i"
            class = "alph-item">{{65 + i | format }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import {getSinger} from "@/api/singer";

    export default {
        created() {
            getSinger()
                .then(data => this.list = data)
                .catch(err => console.log('错误:' + err))
        },
        data() {
            return {
                list: []
            }
        },
        filters: {
            format(val) {
                return String.fromCharCode(val)
            }
        }
    }
</script>

<style scoped lang = "scss">
  @use "@common/scss/variable" as *;

  .container {
    position: relative;
    overflow: hidden;

    .search-wrapper {
      box-sizing: border-box;
      width: 100%;
      padding: 0 10px;

      .input-control {
        width: 100%;
        border-radius: 8px;
        border-color: $color-text-d;
        background-color: $color-text-d;
        color: $color-text;

        &:focus {
          outline: none;
        }
      }
    }

    .list-wrapper {
      width: 100%;
      margin-top: 20px;
      overflow: hidden;

      .list-group {
        box-sizing: border-box;
        width: 80%;
        margin: 0 auto;
        padding: 0 20px;
        border: 1px solid red;

        .list-item {
          display: flex;
          align-items: center;
          overflow: hidden;

          .icon {
            flex: 0 0 60px;
            width: 60px;
            margin-right: 10px;

            .imge {
              width: 60px;
              height: 60px;
              border-radius: 50%;
            }
          }

          .text {
            flex: 1;

            .name {
              font-size: $font-size-medium-x;
              color: $color-text;
              margin-left: 10px;
            }
          }
        }
      }
    }

    .fixed-wrapper {
      position: fixed;
      top: 130px;
      bottom: 50px;
      width: 20px;
      right: 0;
      border: 1px solid red;
      overflow: hidden;

      .alph-group {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .alph-item {
          font-size: $font-size-small;
          color: $color-text;
        }
      }
    }
  }
</style>
