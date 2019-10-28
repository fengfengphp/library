import {api,formatParams,config} from '@/config/axios'
//上传图片
export function uploadImgApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/admin/user/upload`
    }))
}
//修改头像 昵称 性别
export function changeUserInfoApi (params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/admin/user/updateAvatarNickName`
    }))
}
