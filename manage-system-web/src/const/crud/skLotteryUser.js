export const tableOption = {
    'border': true,
    'stripe': true,
    'menuAlign': 'center',
    'align': 'center',
    'addBtn': false,
    'editBtn': false,
    'delBtn': false,
    'column': [
{
    width: 400
    ,label: '抽奖活动Id'
    ,prop: 'lotteryId'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 400
    ,label: '用户ID'
    ,prop: 'userId'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 400
    ,label: '剩余抽奖次数'
    ,prop: 'lotteryNum'
    ,align: 'center'
    ,sortable: false
    ,search:false
    }
    ]
}
