export const tableOption = {
    'border': true,
    'stripe': true,
    'menuAlign': 'center',
    'align': 'center',
    'editBtn': false,
    'delBtn': false,
    'addBtn': false,
    'column': [{}
,{
    label: '用户ID'
    ,prop: 'userId'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入',
        trigger: 'blur'
        }]
    }
,{
    label: '谷歌安全码'
    ,prop: 'securityGoogle'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    label: '是否禁用'
    ,prop: 'disable'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
    ]
}
