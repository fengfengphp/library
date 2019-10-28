export const tableOption = {
  'border': true,
  'stripe': true,
  'menuAlign': 'center',
  'align': 'center',
  'editBtn': false,
  'delBtn': false,
  'addBtn': false,
  'column': [{
    width: 100
    , label: 'ID'
    , prop: 'id'
    , align: 'center'
    , sortable: true
    , rules: [{
      required: true,
      message: '请输入主键ID',
      trigger: 'blur'
    }]
  }
    , {
      width: 200
      , label: '用户名'
      , prop: 'name'
      , align: 'center'
      , sortable: true
      , rules: [{
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '角色'
      , prop: 'roles'
      , align: 'center'
      ,solt: true
    }
  ]
}
