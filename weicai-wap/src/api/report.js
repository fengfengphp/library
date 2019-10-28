import {api,formatParams,config} from '@/config/axios'

export function getReportApi(params){
    return api(Object.assign(formatParams('POST',params),{
        url:`${config.proxy}/bms/agentreport/allData`
    }))
}