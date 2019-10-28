import store2 from 'store2'
import {defaultPortrait} from '@/config/anotherUrl.js'
import {getRedpackApi,grab} from '@/api/message.js'
import { dateFormat } from 'vux';
import headImg from '@/components/common/head_img'
const messageMixins = {
    components: {headImg},
    data(){
        return {
            defaultPortrait, // 默认头像
            groupid:'',    //groupid
            groupData:'',   //群组信息
            redpackRotate:false,
            dialog:{
                index:'',
                show:false,
                data:''
            },
            content:{
                0:'福利包',
                1:'扫雷红包',
                2:'牛牛红包',
                3:'禁抢红包',
            },
            detailLink:{
                0:`/index/detailsWelfare?billtId=5&id=`,
                1:`/index/detailsBomb?billtId=5&id=`,
                2:`/index/detailsNiuniu?billtId=5&id=`,
                3:`/index/detailsBan?billtId=5&id=`
            },
            longTime:''
        }
    },
    computed: {
        chatData(){
            if(this.$store.state.message.all){}      //触发监听
            if(this.$store.state.message.msg[this.groupid]){
                return this.$store.state.message.msg[this.groupid];
            }else {
                return []
            }
        }
    },
    created(){
        this.groupData = store2('group');
        this.groupid = this.groupData.id;
    },
    filters:{
        formatTime(value){
            // value = 1553675034000;
            let today = new Date().getDate();
            let valueToday = new Date(value).getDate();
            if(today == valueToday){
                return dateFormat(value,'HH:mm')
            }else {
                return dateFormat(value,'YYYY-MM-DD HH:mm')
            }
        }
    },
    watch:{
        chatData(newValue, oldValue){
            let divsTags = document.getElementById('content')
            setTimeout(function(){divsTags.scrollTop = divsTags.scrollHeight+5000;},200)
        }
    },
    methods:{
        closeTool(){
            this.$refs.send.closeTool();
        },               //关闭tool组件里面更多
        getredpake(index){
            if(this.chatData[index].cellStatus == 1){
                let type = JSON.parse(this.chatData[index].content).type;
                let packetId = JSON.parse(this.chatData[index].content).redpacketId;
                let links = this.detailLink[type] + packetId
                this.$router.push(links);
            }else {
                let id = JSON.parse(this.chatData[index].content).redpacketId;
                this.dialog.index = index;
                this.$vux.loading.show()
                getRedpackApi(id).then(res =>{
                    this.$vux.loading.hide()
                    if(res){
                        this.dialog.data = res.data.data;
                        if(this.dialog.data.detail.status==2){//过期
                            this.$vux.toast.text('红包已经过期', 'middle')
                            this.chatData[index].cellStatus = 2;
                        }else if(this.dialog.data.detail.left == 0){ //已经抢完了
                            this.chatData[index].cellStatus = 2;
                            this.dialog.data.status = 0;
                            this.dialog.show = true;
                        }else{//抢红包
                            this.dialog.data.status = 1;
                            if(this.dialog.data.skRedbonusGrabModels.length>0){
                                this.dialog.data.skRedbonusGrabModels.forEach(element => {
                                    if(element.userId == this.$store.state.user.userInfo.userId){
                                        this.seeredpaket();
                                    }
                                });
                            }
                            this.dialog.show = true;
                        }
                    }
                });
            }
        },
        openredpaket(){
            let audio = document.querySelector('#grabRedSuccess');
            audio.play();
            this.redpackRotate = true
            let type = this.dialog.data.detail.type;
            let packetId = this.dialog.data.detail.id;
            let params = {
                type:type,
                packetId:packetId
            }
            grab(params).then(res=>{
                if(res){
                    this.chatData[this.dialog.index].cellStatus = 1;
                    let links = this.detailLink[type] + packetId
                    this.$router.push(links);
                }else {
                    this.redpackRotate = false
                    this.chatData[this.dialog.index].cellStatus = 2;
                    this.dialog.show = false;
                }
            })

        },            //点击抢包
        seeredpaket(){
            let type = this.dialog.data.detail.type;
            let packetId = this.dialog.data.detail.id;
            let links = this.detailLink[type] + packetId
            this.$router.push(links);
        },             //查看大家手气
        niuniuSeeredpaket(id){
            let type = 2;
            let packetId = id;
            let links = this.detailLink[type] + packetId
            this.$router.push(links);
        },     //牛牛报奖查看详情

        touchStartFn(index){
            this.longTime = setTimeout(()=>{
                let nick = this.chatData[index].user.nick;
                this.$refs.send.inputAbout.data = `@${nick} `
            },700)
        },       //长按开始
        touchendFn(){
            clearTimeout(this.longTime)
        }               //长按结束
    },
    mounted(){
        this.$nextTick(()=>{
            let top = document.getElementById('header').offsetHeight + 'px';
            let bottom = document.getElementById('send').offsetHeight + 'px';
            let divTags = document.getElementById('content')
            divTags.style.top = top;
            divTags.style.bottom = bottom;
            setTimeout(function(){divTags.scrollTop = divTags.scrollHeight+5000;},200)
        })
    },
    beforeDestroy() {
        this.$store.commit('set_all')      //离开设置消息提醒为false
        let groupRed = {
            id:this.groupData.id,
            show:false
        }
        this.$store.commit('set_group',groupRed)
    }
}
export default messageMixins
