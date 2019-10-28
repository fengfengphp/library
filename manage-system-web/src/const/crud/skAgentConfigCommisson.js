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
    width: 450
    ,label: 'id（层级）'
    ,prop: 'id'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入id（层级）',
        trigger: 'blur'
        }]
    }
,{
    width: 450
    ,label: '扫雷包分佣'
    ,prop: 'bomb'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入扫雷包分佣',
        trigger: 'blur'
        }]
    }
,{
    width: 450
    ,label: '牛牛包分佣'
    ,prop: 'niuniu'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入牛牛包分佣',
        trigger: 'blur'
        }]
    }
    ]
}
