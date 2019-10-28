let scrollMixin = {
    data () {
        return {
            list: [],
            pageNum: 1,
            pageSize: 10
        }
    },
    methods: {
        // 下拉刷新
        loadRefresh: async function () {
            this.pageNum = 1;
            let data = await this.getData();
            this.list = data;
            this.$refs.scroll.update(false);
        },
        // 加载更多数据
        loadMore: async function () {
            this.pageNum = this.pageNum + 1
            let data = await this.getData(this.pageNum)
            this.list = this.list.concat(data)
            if (this.pageNum > 2) {
                this.$refs.scroll.update(true)
            }
        }
    }
}
export { scrollMixin }
