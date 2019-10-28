
const message = {
    state:{
        msg:{},        //所有消息
        groupRed:{},      //是否显示红点
        all:0          //所有消息计数，因为数组更新 没有触发 计算属性
    },
    getters:{
    },
    mutations:{
        set_msg(state, msg){
            let groupId = msg.groupId
            state.groupRed[groupId] = true;
            if(state.msg[groupId]){
                let oneMsg = showTime(state.msg[groupId],msg)
                state.msg[groupId].push(oneMsg);
                if(state.msg[groupId].length>100){
                    state.msg[groupId].splice(0,1)
                }
            }else{
                msg.showTime = true;
                state.msg[groupId]=[msg];
            }
            state.all++;
        },    //消息进来添加进入
        delete_msg(state,data){
            let groupMsg = state.msg[data.groupId];
            if(groupMsg){
                for(let i=0;i<groupMsg.length;i++){
                    if(data.id == groupMsg[i].id){
                        state.msg[data.groupId].splice(i,1);
                        state.all++
                        return
                    }
                }
            }
        },     //用作撤回消息
        set_group(state,data){
            if(state.groupRed[data.id]){
                state.groupRed[data.id] = data.show;
            }
        },
        set_all(state){
            state.all++
        }
    },
    actions:{

    }
}
export default message

function showTime(arr,msg) {
    let time = 10 * 60 * 1000
    let intervalTime = msg.createTime - (arr[arr.length - 1].createTime);
    if(intervalTime > time){
        msg.showTime = true
    }else {
        msg.showTime = false
    }
    return msg
}       //是否显示时间
