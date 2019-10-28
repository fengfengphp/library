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
      , label: 'id'
      , prop: 'id'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入id',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '用户id'
      , prop: 'userId'
      , align: 'center'
      , sortable: true
      , search: true
      , rules: [{
        required: true,
        message: '请输入用户id',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '日期'
      , prop: 'dataDate'
      , align: 'center'
      , sortable: true
      , search: true
      , rules: [{
        required: true,
        message: '请输入日期',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '当日盈亏'
      , prop: 'totalProfit'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入当日盈亏',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '分成比例'
      , prop: 'profitRate'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入分成比例',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '预计分成金额'
      , prop: 'profitPre'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入预计分成金额',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '实际分成金额'
      , prop: 'profitActual'
      , align: 'center'
      , sortable: true
    }
    , {
      width: 200
      , label: '下級伞下盈亏'
      , prop: 'childProfit'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入所有下級的盈亏',
        trigger: 'blur'
      }]
    }
    // , {
    //   width: 200
    //   , label: '下級盈亏分成'
    //   , prop: 'childProfitMoney'
    //   , align: 'center'
    //   , sortable: true
    //   , rules: [{
    //     required: true,
    //     message: '请输入所有下級的盈亏得到的分成',
    //     trigger: 'blur'
    //   }]
    // }
    , {
      width: 200
      , label: '下級伞下盈亏分成'
      , prop: 'selfChildProfitMoney'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入所有自己依靠下級的盈亏（派出下发的）',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '个人伞下盈亏'
      , prop: 'selfProfit'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入自己不依靠下级的盈亏',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '个人伞下盈亏分成'
      , prop: 'selfProfitMoney'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入自己不依靠下级的盈亏分成',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '是否已生成下发单'
      , prop: 'payFlag'
      , align: 'center'
      , sortable: true
      , search: true
      , rules: [{
        required: true,
        message: '请输入是否已下发',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '生成下发单人id'
      , prop: 'payId'
      , align: 'center'
      , sortable: true
      , search: true
    }
    , {
      width: 200
      , label: '下发账号'
      , prop: 'payAccount'
      , align: 'center'
      , sortable: true
      , search: true
    }
    , {
      width: 200
      , label: '下发时间'
      , prop: 'payTime'
      , align: 'center'
      , sortable: true
      , search: true
    }
    , {
      width: 200
      , label: '创建时间'
      , prop: 'createTime'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入创建时间',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '最后更新时间'
      , prop: 'lastUpdateTime'
      , align: 'center'
      , sortable: true
    }
  ]
}
