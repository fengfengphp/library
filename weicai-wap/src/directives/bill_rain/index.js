import './index.css'

export default {
    bind(el){
        startRedPacket()
        function startRedPacket(){
            el.className = 'rain-main-div';
            let win = document.documentElement.clientWidth || document.body.clientWidth     //屏幕宽度
            if(win>500){win=500};
            let left = parseInt(Math.random() * (win - 60) + 30);                        //img距离左边的距离
            let {rotateDeg,scalesSize,durTime} = optionsFn();

            let imgDiv = document.createElement('div');
            imgDiv.className = 'rain-img-div';
            imgDiv.style.left = left + 'px';
            imgDiv.style.animationDuration = durTime/1000 + 's';

            let iElement = document.createElement('i');
            iElement.className = 'rain-img-child';
            iElement.style.transform = `rotate(${rotateDeg}) scale(${scalesSize})`;
            imgDiv.appendChild(iElement)
            el.appendChild(imgDiv)
            setTimeout(()=>{
                el.removeChild(imgDiv)
            },durTime)
            setTimeout(() => {
                startRedPacket()
            }, 1000)
        }
        function optionsFn(){
            let rotateDeg = parseInt(Math.random() * 360) + "deg";     // 旋转角度
            let scalesSize = 1 + Math.random() * 0.3;                    // 图片放大
            let durTime =6000;                                           // 下落时间
            return {rotateDeg,scalesSize,durTime}
        }
    }
}
