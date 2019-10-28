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
      label: '代理域名'
      , prop: 'proxyDomain'
      , align: 'center'
      , sortable: true
      , search: true
    }
    , {
      label: '变化前的域名'
      , prop: 'changeBefore'
      , align: 'center'
      , sortable: true
      , search: true
    }
    , {
      label: '用户ID'
      , prop: 'userId'
      , align: 'center'
      , sortable: true
      , search: true
    }
    , {
      label: '域名是否封禁'
      , prop: 'close'
      , align: 'center'
      , sortable: true
      , search: true,
      type: 'select',
      dicData: [
        {
          label: '封禁',
          value: true
        },
        {
          label: '未封禁',
          value: false
        }]
    }
  ]
}
