//默认头像的线上地址
const defaultPortrait = 'http://10.10.15.175:8080/group1/M00/00/03/CgoPr1xROM2AEItvAAAKPC8mIGM452.jpg'
//客服地址
const customerUrl = 'http://api.pop800.com/chat/458076'
//APP下载链接地址
const appDownloadUrl = 'http://520qun.com/'
//bill type数据
const billTypeMain = [
    {
        img:require('@/assets/images/my_bill/billm_all.png'),
        title:'全部记录',
        category:'',
        billName:'全部累计',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_reward.png'),
        title:'奖励记录',
        category:'reward',
        billName:'累计奖励',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_recharge.png'),
        title:'充值记录',
        category:'recharge',
        billName:'累计充值',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_draw.png'),
        title:'提现记录',
        category:'withdraw',
        billName:'累计提现',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_send.png'),
        title:'发包记录',
        category:'send_red_packet',
        billName:'累计发包',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_grab.png'),
        title:'抢包记录',
        category:'rob_red_packet',
        billName:'累计抢包',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_win.png'),
        title:'盈亏记录',
        category:'win_loss',
        billName:'余额',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_moneyget.png'),
        title:'佣金收入',
        category:'commission_in',
        billName:'累计佣金收入',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_fruit.png'),
        title:'水果机记录',
        category:'fruit',
        billName:'累计盈亏',
        show:true,
    },
    {
        img:require('@/assets/images/my_bill/billm_moneyout.png'),
        title:'佣金支出',
        category:'commission_out',
        billName:'累计佣金支出',
        show:true,
    },
]

export {defaultPortrait,customerUrl,appDownloadUrl,billTypeMain}



