const DIC = {
  group: [
    {
      label: 'app',
      value: 'app'
    },
    {
      label: 'app_init',
      value: 'app_init'
    }
  ]
}
export const tableOption = {
  'border': true,
  'stripe': true,
  'menuAlign': 'center',
  'align': 'center',
  'editBtn': false,
  'delBtn': false,
  'addBtn': false,
  dicData: DIC,
  'column': [
    {
      width: 200
      , label: '主键ID'
      , prop: 'id'
      , align: 'center'
      , addVisdiplay: false
      , editVisdiplay: false
      , sortable: true
    }
    , {
      width: 200
      , label: '变量名'
      , prop: 'name'
      , align: 'center'
      , sortable: true
      , search: true
      , rules: [{
        required: true,
        message: '请输入变量名',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '分组'
      , type: 'select'
      , prop: 'group'
      , align: 'center'
      , dicData: 'group'
      , sortable: true
      , search: true
      , rules: [{
        required: true,
        message: '请输入分组',
        trigger: 'blur'
      }]
    }
    , {
      width: 200
      , label: '变量标题'
      , prop: 'title'
      , align: 'center'
      , sortable: true
      , search: true
      , rules: [{
        required: true,
        message: '请输入变量标题',
        trigger: 'blur'
      }]
    }
    , {
      width: 500
      , label: '值'
      , prop: 'value'
      , align: 'center'
      , sortable: true

      , rules: [{
        required: true,
        message: '请输入变量值',
        trigger: 'blur'
      }]
    }
  ]
}
