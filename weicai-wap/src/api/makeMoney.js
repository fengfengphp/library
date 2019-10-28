import {api,formatParams,config} from '@/config/axios'

export function getImgApi(){
    return api(Object.assign(formatParams('GET'),{
        url:`${config.proxy}/social/promotionShare/page`
    }))
}