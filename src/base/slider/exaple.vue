<template>
  <div class = "slider" ref = "slider">
    <div class = "slider-group" ref = "sliderGroup">
      <slot></slot>
    </div>
  </div>
</template>

<!--
    better-scroll 的原理： 父容器有固定 width / height，
                       里面第一个子元素大于父容器
-->
<script>
    import {addClass} from "@/common/js/dom"
    import BScroll from '@better-scroll/core'
    import Slider from  '@better-scroll/slide'
    BScroll.use(Slider)

    export default {
        props: {
            loop: {
                type: Boolean,
                default: true
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            intervel: {
                type: Number,
                default: 4000
            }
        },
        methods: {
            _setSliderWith() {
                const clientWidth = this.$refs.slider.clientWidth;
                const childs = this.$refs.sliderGroup.children;
                let width = 0;

                for (let i = 0; i < childs.length; i++) {
                    let sliderItem = childs[i];
                    addClass(sliderItem, 'slider-item');
                    sliderItem.style.width = clientWidth + 'px';
                    width += clientWidth;
                }

                if(this.loop)
                    width += clientWidth * 2;

                // this.$refs.slider.style.width = clientWidth + 'px';
                this.$refs.sliderGroup.style.width = width + 'px';
            },
            _initSlider() {
                this.slider = new BScroll(this.$refs.slider, {
                    scrollX: true,
                    scrollY: false,
                    momentum: false,
                    slide: {
                        loop: this.loop,
                        threshold: .3,
                        speed: 4000
                    },
                    useTransition: true,
                    bounce: false
                })

                this.slider.on('slideWillChange',(page)=>{
                    console.log(page.pageX)
                });

                setTimeout(()=>{
                    this.slider.prev();
                    this.slider.next();
                    this.slider.goToPage(3);

                },2000)
            }
        },
       mounted() {
            setTimeout(()=>{
                this._setSliderWith();
                this._initSlider();
            },20)
       }

    }

</script>

<style scoped lang = "scss">
  .slider {
    min-height: 1px;

    .slider-group {
      position: relative;
      overflow: hidden; //BFC  消除浮动
      .slider-item {
        float: left;
        box-sizing: border-box;
        overflow: hidden; //BFC

        a {
          display: block;
          width: 100%;
          overflow: hidden; //BFC
          text-decoration: none;
        }

        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>
