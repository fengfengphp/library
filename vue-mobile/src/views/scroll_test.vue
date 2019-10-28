<template>
    <div class="main">
        <div class="title"></div>
        <!--:updateData="list"-->
        <div class="content">
            <Scroll
                    ref="scroll"
                    :autoUpdate="true"
                    @pullingDown="loadRefresh"
                    @pullingUp="loadMore">
                <ul>
                    <li style="width: 100%;height: 50px;border-bottom: 1px solid red" v-for="(item, index) in list" :key="index">{{ item }}</li>
                </ul>
            </Scroll>
        </div>
    </div>
</template>

<script>
import Scroll from 'vue-slim-better-scroll'
import { scrollMixin } from '@/mixins/scroll/scroll-mixin.js'
export function timeout (time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}
export default {
    name: 'scroll_test',
    components: {
        Scroll
    },
    data () {
        return {
            list: []
            // pageNum: 1,
            // pageSize: 10
        }
    },
    mixins: [
        scrollMixin
    ],
    created () {
        // 不会引起DOM变化的数据在此定义
        this.page = 1
        this.pageSize = 20
    },
    mounted () {
        this.loadRefresh()
    },
    methods: {

        // 加载刷新数据
        async loadRefresh () {
            const data = await this._fetchList()
            // 初始化数据
            this.list = data
            console.log(this.list)
            this.page = 1
        },
        // 加载更多数据
        async loadMore () {
            const page = this.page + 1
            const data = await this._fetchList(page)
            this.list.push(...data)
            data.length < this.pageSize ? this.$refs.scroll.update(true) : this.page++ // 判断是否已达最后一页?如果已是最后一页，可调用this.$refs.scroll.update(true)关闭上拉
        },
        // 模拟一个异步获取列表操作
        async _fetchList (page = 1, pageSize = this.pageSize) {
            try {
                await timeout(1000)
                if (page < 3) {
                    // 模拟数据返回
                    return Array.from({ length: pageSize }, (value, index) => `第${page}页的数据${index}`)
                } else {
                    // 模拟已到达最后一页时的数据返回
                    return Array.from({ length: pageSize / 2 }, (value, index) => `最后一页,第${page}页的数据${index}`)
                }
            } catch (e) {
                return false
            }
        }
    // // 滚动到顶部
    //     scrollToTop () {
    //         this.$refs.scroll.scrollToTop()
    //     },
    //     // 滚动到底部
    //     scrollToBottom () {
    //         this.$refs.scroll.scrollToBottom()
    //     },
    //     // 模拟一个异步获取列表操作
    //     getData (page = 1, pageSize = this.pageSize) {
    //         return new Promise(function (resolve) {
    //             setTimeout(() => {
    //                 let listArray = []
    //                 for (let i = (page - 1) * pageSize; i < page * pageSize; i++) {
    //                     listArray.push(i)
    //                 }
    //                 resolve(listArray)
    //             }, 2000)
    //         })
    //     },
    //
    //     // 下拉刷新
    //     loadRefresh: async function () {
    //         this.pageNum = 1
    //         let data = await this.getData()
    //         this.list = data
    //         this.$refs.scroll.update(false)
    //     },
    //     // 加载更多数据
    //     loadMore: async function () {
    //         this.pageNum = this.pageNum + 1
    //         let data = await this.getData(this.pageNum)
    //         this.list = this.list.concat(data)
    //         if (this.pageNum > 2) {
    //             this.$refs.scroll.update(true)
    //         }
    //     }
    }
}
</script>

<style lang="scss" scoped>
    $headerHeight:50px;
    .gotoTop{
        position: absolute;bottom: 20px;right: 10px;z-index: 10;
    }
    .main {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .title {
            position: relative;
            z-index: 3;
            width: 100%;
            height: 50px;
            background-color: aqua;
        }
        .content {
            overflow: hidden;
            position: absolute;
            top: 50px;
            bottom: 0;
            left: 0;
            z-index: 2;
            width: 100%;
        }
    }
</style>
