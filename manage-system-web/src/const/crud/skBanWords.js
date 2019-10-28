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
      width: 600
      , label: '用词'
      , prop: 'name'
      , align: 'center'
      , sortable: false
      , search: true
      , rules: [{
        required: true,
        message: '请输入用词',
        trigger: 'blur'
      }]
    }
  ]
}
