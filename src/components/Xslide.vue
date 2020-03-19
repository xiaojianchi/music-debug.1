<template>
  <div class = "slide-banner">
    <div class = "slide" ref = "slide">
      <div class = "slide-group" ref = "slideGroup">
       <slot></slot>
      </div>
    </div>
    <div class = "docs-wrapper">
      <span class = "doc"
            v-for = "(doc,index) in docs" :key = "index"
            :class = "{'active': index === currentPageIndex}"></span>
    </div>
  </div>
</template>

<script>
    import BScroll from '@better-scroll/core'
    import Slide from '@better-scroll/slide'
    import {addClass} from "@/common/js/dom";

    BScroll.use(Slide)

    export default {
        props: {
            loop: {
                type: Boolean,
                default: true
            },
            auto: {
                type: Boolean,
                default: true
            },
            interval: {
                type: Number,
                default: 2000
            }
        },
        data() {
            return {
                docs: 0,
                slide: null,
                timer: 0,
                currentPageIndex: 0
            }
        },
        mounted() {
            setTimeout(() => {
                this.init();
            }, 20)
        },
        beforeDestroy() {
            clearTimeout(this.timer)
            this.slide.destory()
        },
        methods: {
            init() {
                /*
                 老师， 如果这段代码在 new BScroll() 之前执行，就能正确的计算出 slide-group的宽度

                 反之，就会得到 slide-group , slide-item 的  width 为 0

                 这个应该是插件的计算规则，你主要帮我看一下底下的 CSS，我主要不明白那里
                 */
                const childs = this.$refs.slideGroup.children
                for(let i = 0; i < childs.length; i++)
                    addClass(childs[i],'slide-item')


                this.slide = new BScroll(this.$refs.slide, {
                    scrollY: false,
                    scrollX: true,
                    slide: {
                        loop: this.loop,
                        threshold: .3
                    },
                    momentum: false,
                    useTransition: true,
                    bounce: false,
                    stopPropagation: true,
                    probeType: 2
                })

                if (this.loop)
                    this.docs = this.$refs.slideGroup.children.length - 2
                else
                    this.docs = this.$refs.slideGroup.children
                if (this.auto)
                    this.autoGoNext()

                // 只有用户手动操作slide区域，才会触发该事件.
                this.slide.on('beforeScrollStart',this.beforeStart)

                // scroll结束
                this.slide.on('scrollEnd', this._endScroll)

                // 在scroll 过程中触发
                this.slide.on('slideWillChange', (page) => {
                    this.currentPageIndex = page.pageX
                })
            },
            beforeStart() {
                //用户操作后，清空计时器.
                clearTimeout(this.timer)
            },
            next() {
                this.slide.next()
            },
            prev() {
                this.slide.prev()
            },
            _endScroll() {
                this.autoGoNext()
            },
            autoGoNext() {
                clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                    this.next()
                }, this.interval)
            }

        }
    }
</script>

<style lang = "scss" scoped>
  .slide-banner {
    position: relative;
    .slide {
      /*
       横向滚动 父容器必须有固定宽度，子容器靠内容撑开才能有滚动效果，但是我这里根本没给父容器宽度，
       加了 border 观察了一下，发现确实被 slide-group 撑开了.那为什么还有滚动的效果？
      */
      min-height: 1px;
      overflow: hidden;

      .slide-group {
        display: flex;

        .slide-item {
          flex-shrink: 0;
          /*
          这里的宽度设置为什么能生效？ 父级元素的宽度根本没有设置啊
          如果参照 Slide 插件 后来加的 style，那因该是 1366* 5 才对啊 (我抓了5张图片)
           */
          width: 100%;

          a {
            display: block;
            width: 100%;
            overflow: hidden;
          }

          img {
            width: 100%;
          }

        }
      }
    }

    .docs-wrapper {
      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translate(-50%);

      .doc {
        margin: 0 4px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #eeeeee;

        &.active {
          width: 20px;
          border-radius: 5px;
          background-color: #eeeeee;
        }
      }
    }
  }
</style>
