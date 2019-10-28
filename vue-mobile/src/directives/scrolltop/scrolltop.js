let scrolltop = {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.addEventListener('click', () => {
            var timer = null;
            var leader = scroll().top;
            clearInterval(timer);
            timer = setInterval(function () {
                //获取步长
                var step = leader / 10;
                //二次处理步长
                step = Math.ceil(step);
                leader = leader - step;
                //屏幕(页面)滚动
                window.scrollTo(0, leader);  //屏幕(页面)滚动到某个位置
                //清除定时器
                if (leader <= 1) {
                    clearInterval(timer);
                }
            }, 25);
        })

        //获取scrollTop(获取滚动卷起的高度)
        function scroll() {
            return {
                "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
                "left": window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
            }
        }
    }
}
export default scrolltop;