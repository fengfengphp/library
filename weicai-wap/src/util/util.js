import store2 from 'store2'
import CryptoJS from 'crypto-js'
//判断红包详情用于哪个接口
export function judgeRedpackType(id) {
    if(id == 5 || id == 6 || id == 18|| id == 34|| id == 35){
        return 1      //发包
    }else if(id == 3 || id == 4 || id == 16|| id == 17){
        return 2      //抢包
    }
}
//根据type 返回 红包聊天页面路径
export function returnRedPage(type) {
    let redType = [
        {
            type:0,
            link:'/index/groupBomb'
        },
        {
            type:1,
            link:'/index/groupBomb'
        },
        {
            type:2,
            link:'/index/groupNiuniu'
        },
        {
            type:3,
            link:'/index/groupBan'
        },
    ]
    for(let i=0;i<redType.length;i++){
        if(type == redType[i].type){
            return redType[i].link;
        }
    }
}
//退出登录  403退出登录，我的页面退出登录，IM封号退出登录
export function loginOutUtil(){
    window.$pig.$store.commit('set_userInfo','');
    let webData = store2('webData');
    localStorage.clear();
    store2('webData',webData)
    window.$pig.$router.push('/main')
}
//解密
export const Decrypt = (word) =>{
    let key1 = CryptoJS.enc.Utf8.parse("1234567887654321")
    let decrypted =CryptoJS.AES.decrypt(word, key1, {iv:key1, mode:CryptoJS.mode.CBC, padding:CryptoJS.pad.Pkcs7});
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
}
