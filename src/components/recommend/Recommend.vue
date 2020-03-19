<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="sliderItems.length" class="slider-wrapper">
        <my-slider>
          <div v-for="item in sliderItems" :key="item.id">
            <a :href="item.linkUrl">
              <img :src = "item.picUrl">
            </a>
          </div>
        </my-slider>
      </div>
    </div>
  </div>
</template>

<script>
    import {getSlider} from "@/api/recommend";
    import Xslide from "@/components/Xslide";
    export default {
        data() {
            return {
                sliderItems: []
            }
        },
        created() {
            getSlider()
                .then(result => {
                    this.sliderItems = result.splice(1,5);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        components: {
            'my-slider': Xslide
        }
    }
</script>

<style scoped lang = "scss">

</style>
