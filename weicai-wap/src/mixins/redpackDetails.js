import {getRedpackApi,getRedpackDetailsApi} from '@/api/message.js'
import store2 from 'store2';
import headImg from '@/components/common/head_img'
const redpackDetails = {
    components:{
        headImg
    },
    data(){
        return {
            id:'',
            billtId:'',
            userInfo:'',
            showRecord:true
        }
    },
    created(){
        this.userInfo = store2('userInfo');
        this.id = this.$route.query.id;
        this.billtId = this.$route.query.billtId;
        if(this.$route.query.from == 'bill'){
            this.showRecord = false
        }
    },
    methods:{
        //红包详情
        getRedpack() {
            return getRedpackApi(this.id).then(res =>{
                if(res){
                    return res.data.data
                }
            })
        },
        //抢包id获取红包详情
        getRedpackDetails(){
            return getRedpackDetailsApi(this.id).then(res =>{
                if(res){
                    return res.data.data
                }
            })
        }
    },
    // beforeRouteLeave(to, from, next) {
    //     if (to.path == "/index/bill") {
    //         to.meta.keepAlive = true;
    //     } else {
    //         to.meta.keepAlive = false;
    //     }
    //     next();
    // }
}
export {redpackDetails}
