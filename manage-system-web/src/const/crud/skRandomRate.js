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
    ,label: '概率类型'
    ,prop: 'rateType'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '关联ID'
    ,prop: 'refId'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '发包中雷概率'
    ,prop: 'sendPackRate'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '抢包中雷概率'
    ,prop: 'grabPackRate'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '金额大小概率'
    ,prop: 'moreMoneyRate'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '开始时间'
    ,prop: 'startTime'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
,{
    width: 200
    ,label: '结束时间'
    ,prop: 'endTime'
    ,align: 'center'
    ,sortable: true
    ,search:true
    }
]
}
