<template>
    <div ref="wrapper" style="width: 100%;height: 100%">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'scroll',
    props: {
        mainData: Number
    },
    data () {
        return {
            scroll: ''
        }
    },
    watch: {
        mainData () {
            this.$nextTick(() => {
                this.scroll.refresh()
            })
        }
    },
    methods: {
        initScrollFn () {
            this.scroll = new BScroll(this.$refs.wrapper, {
                pullDownRefresh: {
                    threshold: 50,
                    stop: 20
                }
            })
            this.scroll.on('touchend', (pos) => {
                if (pos.y > 50) {
                    console.log('上拉')
                } else if (pos.y < (this.scroll.maxScrollY - 30)) {
                    console.log('滚动到底部')
                }
            })
            this.scroll.on('scrollEnd', (pos) => {
                // 滚动到底部
                if (pos.y > 30) {
                    console.log('上拉')
                } else if (pos.y < (this.scroll.maxScrollY - 30)) {
                    console.log('滚动到底部')
                }
                // if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                //     // this.$emit('scrollToEnd')
                //     console.log(133)
                // }
            })
            console.log(this.scroll)
        },
        refresh () {
            this.scroll && this.scroll.refresh()
        }
    },
    mounted () {
        this.$nextTick(() => {
            this.initScrollFn()
        })
    }
}
</script>

<style scoped>

</style>
