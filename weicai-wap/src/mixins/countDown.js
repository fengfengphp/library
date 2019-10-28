import {getCodeApi} from '@/api/loginAndRegister'
import {judgePhoneNum} from '@/util/regex.js'
const countDown = {
    data(){
        return {
            mobile:'',
            
            optins:{
                words:'获取验证码',
                time:60,
            },
            codeShow:'获取验证码',
            hadClick:false,
            countDown:'',
        }
    },
    methods:{
        clickCode(){
            if(!judgePhoneNum(this.mobile)){
                this.$vux.toast.text('请输入正确的手机号', 'middle')
                return
            }
            this.getCodeFn()
        },
        getCodeFn(){
            getCodeApi(this.mobile).then(res =>{
                if(res.data.data){
                    clearInterval(this.countDown);
                    let countTime = this.optins.time;
                    this.hadClick = true;
                    this.codeShow = countTime + ' 秒';
                    this.countDown = setInterval(()=>{
                        --countTime
                        this.codeShow = countTime + ' 秒';
                        if(countTime <0){
                            clearInterval(this.countDown);
                            this.codeShow = this.optins.words;
                            this.hadClick = false;
                        }
                    },1000)
                }else {
                    this.$vux.toast.text(res.data.msg, 'middle')
                }
            })
        },
    },
    destroyed() {
        clearInterval(this.countDown)
    }
}
export {countDown}
