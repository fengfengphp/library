export const tableOption = {
    'border': true,
    'stripe': true,
    'menuAlign': 'center',
    'align': 'center',
    'editBtn': false,
    'delBtn': false,
    'addBtn': false,
    'column': [{
    width: 200
    ,label: '主键ID'
    ,prop: 'id'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入主键ID',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '客户端id'
    ,prop: 'clientId'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入客户端id',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '角色名'
    ,prop: 'roleName'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入角色名',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '角色码'
    ,prop: 'roleCode'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入角色码',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '描述'
    ,prop: 'roleDesc'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入描述',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '删除标识'
    ,prop: 'delFlag'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入删除标识',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '创建时间'
    ,prop: 'createTime'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入创建时间',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '最后更新时间'
    ,prop: 'lastUpdateTime'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入最后更新时间',
        trigger: 'blur'
        }]
    }
    ]
}
