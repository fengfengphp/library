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
    width: 200
    ,label: 'id'
    ,prop: 'id'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入id',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '用户id'
    ,prop: 'userId'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入用户id',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '起始时间'
    ,prop: 'beginDate'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入起始时间',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '结束时间'
    ,prop: 'endDate'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入结束时间',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '盈亏下发合计天数'
    ,prop: 'totalDay'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入盈亏下发合计天数',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '下发金额'
    ,prop: 'money'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入下发金额',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '是否已支付'
    ,prop: 'payFlag'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入是否已支付',
        trigger: 'blur'
        }]
    }
,{
    width: 200
    ,label: '打款人id'
    ,prop: 'payId'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '打款时间'
    ,prop: 'payTime'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '创建时间'
    ,prop: 'createTime'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '创建人'
    ,prop: 'createBy'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '最后更新人'
    ,prop: 'lastUpdateBy'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '最后更新时间'
    ,prop: 'lastUpdateTime'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: ''
    ,prop: 'delFlag'
    ,align: 'center'
    ,sortable: true
    ,search:true
            ,rules: [{
        required: true,
        message: '请输入',
        trigger: 'blur'
        }]
    }
    ]
}
