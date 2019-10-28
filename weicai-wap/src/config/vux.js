import Vue from 'vue'
import { XHeader,XInput,Group,XButton,Box,Cell,CellBox,PopupPicker,Grid,XDialog ,Badge,GridItem,ViewBox,XSwitch,Datetime,Confirm,Popup,TransferDom,
    ToastPlugin,AlertPlugin,ConfirmPlugin,LoadingPlugin,DatetimePlugin } from 'vux'

Vue.component('x-header', XHeader)
Vue.component('x-input', XInput)
Vue.component('group', Group)
Vue.component('x-button', XButton)
Vue.component('box', Box)
Vue.component('cell', Cell)
Vue.component('cell-box', CellBox)
Vue.component('grid', Grid)
Vue.component('grid-item', GridItem)
Vue.component('popup-picker', PopupPicker)
Vue.component('view-box', ViewBox)
Vue.component('x-switch', XSwitch)
Vue.component('datetime', Datetime)
Vue.component('confirm', Confirm)
Vue.component('popup', Popup)
Vue.component('x-dialog', XDialog)
Vue.component('badge', Badge)

Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)

Vue.directive('transfer-dom', TransferDom)

