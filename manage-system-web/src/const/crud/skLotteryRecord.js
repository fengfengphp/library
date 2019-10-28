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
      , label: '会员ID'
      , prop: 'userId'
      , align: 'center'
      , sortable: true
      , search: true
      , rules: [{
        required: true,
        message: '请输入会员ID',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '参与活动ID'
      , prop: 'lotteryId'
      , align: 'center'
      , sortable: false
      , search: true
    }
    , {
      width: 250
      , label: '活动名称'
      , prop: 'subTitle'
      , align: 'center'
      , sortable: false
      , search: false
      , rules: [{
        required: true,
        message: '请输入中奖Item',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '奖励金额'
      , prop: 'money'
      , align: 'center'
      , sortable: false
      , search: false
      , rules: [{
        required: true,
        message: '请输入奖励金额',
        trigger: 'blur'
      }]
    }
    , {
      width: 250
      , label: '明细项描述'
      , prop: 'descprition'
      , align: 'center'
      , sortable: false
      , search: false
    }
    , {
      width: 200
      , label: '参与时间'
      , prop: 'createTime'
      , align: 'center'
      , sortable: true
      , search: false
      , rules: [{
        required: true,
        message: '请输入奖励金额',
        trigger: 'blur'
      }]
    }
  ]
}
