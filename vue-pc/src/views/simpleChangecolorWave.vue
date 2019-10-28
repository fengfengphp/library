<template>
    <div>
        <button class="div2" style="position: relative;margin-left: 200px;margin-top: 200px">
            移动到此按钮
        </button>
    </div>
</template>

<script>
    export default {
        name: "simpleChangecolorWave",
        data(){
            return{
                colorInterval:''
            }
        },
        created() {
            this.colorInterval = setInterval(this.init,2000);
        },
        methods:{
            init(){
                let arr = []
                for(let i=0;i<3;i++){
                    arr.push(Math.ceil(Math.random() * 256));
                }
                let color = `rgb(${arr[0]},${arr[1]},${arr[2]})`
                let element = document.querySelector('.div2');
                element.style.color = color;
            }
        },
        destroyed() {
            clearInterval(this.colorInterval)
        }
    }
</script>

<style lang="scss" scoped>
    .div2{
        display: inline-block;
        position: relative;
        vertical-align: baseline
    }
    .div2:after{
        display: block;
        position: absolute;
        content: "";
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: currentColor;
        top: calc(50% - 40px);
        left: calc(50% - 40px);
        transform: scale(0);
        will-change: transform,opacity;
        opacity: 0;
    }
    .div2:hover:after{
        animation: emph 0.5s ease ;
    }
    @keyframes emph {
        10% {
            transform: none;
            opacity: .5
        }
        to {
            opacity: 0;
            transform: scale(1.2)
        }
    }
</style>