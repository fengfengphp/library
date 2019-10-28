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
    ,label: 'ID'
    ,prop: 'id'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入ID',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '客户端ID'
    ,prop: 'clientId'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入客户端ID',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '资源名称'
    ,prop: 'name'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入资源名称',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '权限标识'
    ,prop: 'permission'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入权限标识',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '请求链接'
    ,prop: 'url'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入请求链接',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '请求方法'
    ,prop: 'method'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入请求方法',
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
