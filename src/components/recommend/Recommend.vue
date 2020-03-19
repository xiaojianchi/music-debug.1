<template>
  <div class = "recommend" ref = "recommend">
    <!--轮播图-->
    <div class="recommend-content">
    <div v-if = "slideItems.length" class="slider-wrapper">
    <slider>
      <div v-for = "item in slideItems" :key = "item.id">
        <a :href = item.linkUrl>
          <img :src = "item.picUrl">
        </a>
      </div>
    </slider>
    </div>
    </div>
  </div>
</template>

<script>
    import {getSlider} from "@/api/recommend";
    import slider from "@/base/slider/slider";

    export default {
        data() {
            return {
                slideItems: []
            }
        },
        created() {
            getSlider()
                .then(result => {
                    console.log(result);
                    this.slideItems = result;
                })
                .catch(err => console.log(err));

        },
        components: {
            slider
        }
    }
</script>

<style scoped lang="scss">
  @use "~common/scss/veriables" as *;

  .recommend {
    position: fixed;
    width: 100%;
    top: 88px;
    bottom: 0;
    .recommend-content {
      height: 100%;
      overflow: hidden;
      .slider-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
      }
    }
  }
</style>
