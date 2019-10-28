<template>
    <div class="bubbling" @click="clickBg($event)">
        <div class="checkbox-div">
            <el-checkbox v-model="rainbowState">彩虹色</el-checkbox>
            <el-checkbox v-model="automoveState" :disabled="mousemoveState">自动</el-checkbox>
            <el-checkbox v-model="mousemoveState">鼠标移动</el-checkbox>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bubbling",
        data(){
            return {
                rainbow:['#FF0000','#FF7F00','#FFFF00','#00FF00','#00FFFF','#0000FF','#8B00FF'],
                count:-1,
                rainbowState:false,
                automoveState:false,
                mousemoveState:true,
                bubblingRect:''
            }
        },
        created() {

        },
        watch:{
            automoveState(){
                this.autoRipple();
            }
        },
        methods:{
            clickBg(e){
                let top = e.clientY;
                let left = e.clientX;
                this.count++
                this.createRipple(top,left)
            },
            createRipple(top,left){
                let divouter = document.createElement('div');
                divouter.className = 'ripple-outer';
                divouter.style.top = (top - 25) + 'px';
                divouter.style.left = (left - 25) + 'px';
                let divInner = document.createElement('div');
                divInner.className = 'ripple-inner';
                divInner.style.top = (top - 25) + 'px';
                divInner.style.left = (left - 25) + 'px';
                if(this.rainbowState){
                    divouter.style.borderColor = this.rainbow[(this.count%7)];
                    divInner.style.borderColor = this.rainbow[(this.count%7)];
                }
                let mainEl = document.querySelector('.bubbling')
                mainEl.appendChild(divouter)
                mainEl.appendChild(divInner)
                setTimeout(function () {
                    let mainEl = document.querySelector('.bubbling')
                    mainEl.removeChild(divouter)
                    mainEl.removeChild(divInner)
                }, 2300);
            },
            autoRipple(){
                if(this.automoveState){
                    this.count++
                    let top = Math.ceil(Math.random() * this.bubblingRect.width);
                    let left = Math.ceil(Math.random() * this.bubblingRect.height);
                    this.createRipple(top,left)
                    setTimeout(this.autoRipple,100)
                }
            },
        },
        mounted() {
            let el = document.querySelector('.bubbling');
            this.bubblingRect = el.getBoundingClientRect();
            window.onresize =  () => {
                let el = document.querySelector('.bubbling');
                this.bubblingRect = el.getBoundingClientRect();
            }
            document.addEventListener('mousemove',(e)=>{
                if(this.mousemoveState){
                    this.automoveState = false;
                    this.count++
                    let top = e.clientY;
                    let left = e.clientX;
                    this.createRipple(top,left)
                }
            })
        }
    }
</script>

<style lang="scss">
    .bubbling{
        position: absolute;top: 0;left: 0;bottom: 0;z-index: 2;
        width: 100%;background-color: #464646;
        overflow: hidden;
        .checkbox-div{
            position: absolute;top: 30px;left: 30px;z-index: 3;
        }
    }
    .ripple-outer, .ripple-inner {
        position: absolute;
        width: 50px;
        height: 50px;
        border: 1px solid #87ceeb;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 2s ease-out;
        z-index: 2;
    }
    .ripple-inner {
        animation-delay: .3s;
    }
    @keyframes ripple {
        to {
            transform: scale(3);
            opacity: 0;
        }
    }
</style>