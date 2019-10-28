import {getUserinfoApi} from '@/api/my.js'
import store2 from "store2"
const user = {
    state:{
        userInfo:'',
        isAppDownloadImg:true,
        webData:''
    },
    getters:{

    },
    mutations:{
        set_userInfo:(state,data) =>{
            state.userInfo = data
        },//设置用户个人信息
        set_appDownload:(state,data) =>{
            state.isAppDownloadImg = data
        },//设置app下载图片显示
        set_webData:(state,data) =>{
            state.webData = data
        },//设置 webData
    },
    actions:{
        userInfoAction({commit}){
            getUserinfoApi().then(res =>{
                if(res){
                    commit('set_userInfo',res.data.data)
                    store2('userInfo',res.data.data)
                }
            })
        },    //获取userInfo 存起来
    }
}
export default user
