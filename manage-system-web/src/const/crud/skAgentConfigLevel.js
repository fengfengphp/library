export const tableOption = {
    'border': true,
    'stripe': true,
    'menuAlign': 'center',
    'align': 'center',
    'editBtn': false,
    'delBtn': false,
    'addBtn': false,
    'column': [
{
    width: 250
    ,label: 'id（等级）'
    ,prop: 'id'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入id（等级）',
        trigger: 'blur'
        }]
    }
,{
    width: 250
    ,label: '直推发抢包流水'
    ,prop: 'directWater'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入直推发抢包流水',
        trigger: 'blur'
        }]
    }
,{
    width: 250
    ,label: '直推玩家数'
    ,prop: 'directPlayer'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入直推玩家数',
        trigger: 'blur'
        }]
    }
,{
    width: 250
    ,label: '直推代理数'
    ,prop: 'directAgent'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入直推代理数',
        trigger: 'blur'
        }]
    }
,{
    width: 250
    ,label: '可享受分佣层数'
    ,prop: 'commissionLevel'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入可享受分佣层数',
        trigger: 'blur'
        }]
    }
    ]
}
