(function () {
    window.onload = function () {
        //防止抖动
        function throttle(fun, delay, time) {
            var timeout,
                startTime = new Date();

            return function() {
                var context = this,
                    args = arguments,
                    curTime = new Date();

                clearTimeout(timeout);
                // 如果达到了规定的触发时间间隔，触发 handler
                if (curTime - startTime >= time) {
                    fun.apply(context, args);
                    startTime = curTime;
                    // 没达到触发间隔，重新设定定时器

                } else {
                    timeout = setTimeout(fun, delay);
                }
            };
        };
        window.onscroll = throttle(watchscroll, 200,500);
        //判断在可视区 就替换图片
        function watchscroll () {
            var bodyScrollHeight = document.documentElement.scrollTop || document.body.scrollTop;// body滚动高度
            var windowHeight = window.innerHeight;// 视窗高度
            var imgs = document.getElementsByClassName('lazyloadimg');
            if(imgs && imgs.length>0){
                for (var i =0; i < imgs.length; i++) {
                    var imgHeight = imgs[i].offsetTop;// 图片距离顶部高度
                    if (imgHeight  < windowHeight  + bodyScrollHeight) {
                        imgs[i].src = imgs[i].getAttribute('data-src');
                        imgs[i].className = imgs[i].className.replace('lazyloadimg','')
                    }
                }
            }
        }
    }
})()
