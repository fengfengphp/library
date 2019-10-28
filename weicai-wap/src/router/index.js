import store2 from 'store2'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueRouter from 'vue-router'
import mainRules from './model/rules'
NProgress.configure({
    easing: 'ease',   // 动画方式
    speed: 500,       // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
})
const isTokenBeforEnter = (to,from,next) =>{
    if(to.query.accesstoken){
        store2('accesstoken',to.query.accesstoken)
    }        //从APP跳转网站 存token
    if(store2('accesstoken')){
        next()
    }else {
        next('/main')
    }
}    //拦截未登录
const RouterConfig = {
    routes: [
        {
            path:'/' ,
            redirect: '/index/home/message'
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('@/page/index'),
            beforeEnter: isTokenBeforEnter,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('@/page/home'),
                    children: [
                        {
                            path: 'message',
                            name: 'Message',
                            component:() => import('@/page/message'),
                            meta: {id:'message',title: '消息'}
                        },
                        {
                            path: 'group',
                            name: 'Group',
                            component:() => import('@/page/group'),
                            meta: {id:'group',title: '群组'}
                        },
                        {
                            path: 'reward',
                            name: 'reward',
                            component:() => import('@/page/my/reward'),
                            meta: {id:'activity',title: '奖励'}
                        },
                        {
                            path: 'My',
                            name: 'My',
                            component: () => import('@/page/my'),
                            meta: {id:'my',title: '我的'}
                        },
                        {
                            path: 'find',
                            name: 'Find',
                            component: () => import('@/page/find'),
                            meta: {id:'find',title: '发现'}
                        }
                    ]
                },
                {
                    path: 'groupBomb',
                    name: 'groupBomb',
                    component: () => import('@/page/message/group_bomb'),
                },     //雷雷包
                {
                    path: 'groupNiuniu',
                    name: 'groupNiuniu',
                    component: () => import('@/page/message/group_niuniu'),
                },     //牛牛包
                {
                    path: 'groupBan',
                    name: 'groupBan',
                    component: () => import('@/page/message/group_ban'),
                },     //禁枪包
                {
                    path: 'helpCenter',
                    name: 'helpCenter',
                    component: () => import('@/page/my/helpCenter'),
                },     //帮助中心
                {
                    path: 'luckyActivity',
                    name: 'luckyActivity',
                    component: () => import('@/page/find/lucky_activity'),
                },     //幸运大转盘
                {
                    path: 'luckygame',
                    name: 'luckygame',
                    component: () => import('@/page/find/luckygame'),
                },   //水果机
                {
                    path: 'detailsBomb',
                    name: 'detailsBomb',
                    component: () => import('@/page/redpack/details_bomb'),
                },     //雷包详情
                {
                    path: 'detailsBan',
                    name: 'detailsBan',
                    component: () => import('@/page/redpack/details_ban'),
                },     //禁抢包详情
                {
                    path: 'detailsWelfare',
                    name: 'detailsWelfare',
                    component: () => import('@/page/redpack/details_welfare'),
                },     //福利包详情
                {
                    path: 'detailsNiuniu',
                    name: 'detailsNiuniu',
                    component: () => import('@/page/redpack/details_niuniu'),
                },     //牛牛包详情
                {
                    path: 'billMain',
                    name: 'billMain',
                    component: () => import('@/page/my/bill_main'),
                },     //账单 main
                {
                    path: 'bill',
                    name: 'Bill',
                    component: () => import('@/page/my/bill'),
                    meta:{
                        keepAlive:false
                    }
                },     //账单
                {
                    path:'makeMoney',
                    name:'MakeMoney',
                    component:()=>import('@/page/my/makeMoney',)
                },  //推广海报
                {
                    path: 'recharge',
                    name: 'recharge',
                    component: () => import('@/page/my/recharge'),
                },   //充值
                {
                    path: 'rechargeThirdPay',
                    name: 'rechargeThirdPay',
                    component: () => import('@/page/my/recharge_thirdPay'),
                },   //第三方充值
                {
                    path: 'rechargeBank',
                    name: 'rechargeBank',
                    component: () => import('@/page/my/recharge_bank'),
                },   //银行卡充值
                {
                    path: 'rechargeBankPay',
                    name: 'rechargeBankPay',
                    component: () => import('@/page/my/recharge_bankPay'),
                },   //银行卡 确认提交
                {
                    path:'beProxy',
                    name:'beProxy',
                    component: () => import('@/page/my/beProxy'),
                },
                {
                    path: 'withdrawal',
                    name: 'withdrawal',
                    component: () => import('@/page/my/withdrawal'),
                },     //提现
                {
                    path: 'userInfo',
                    name: 'userInfo',
                    component: () => import('@/page/my/userInfo'),
                },     //个人信息
                {
                    path:'/activity',
                    name:'activity',
                    component:() => import('@/page/my/activity'),
                },  //活动
                {
                    path:'activity_detail',
                    name:'activity_detail',
                    component:()=> import('@/page/my/activity_detail'),
                },  //活动查看详情
                {
                    path:'activity_first',
                    name:'activity_first',
                    component:()=> import('@/page/my/activity_first'),
                },
                {
                    path:'activity_second',
                    name:'activity_second',
                    component:()=> import('@/page/my/activity_second'),
                },
                {
                    path:'proxy',
                    name:'proxy',
                    component:()=> import('@/page/my/proxy'),
                },
                {
                    path:'/share',
                    name:'share',
                    component:()=>import('@/page/my/share',)
                },
                {
                    path:'report',
                    name:'report',
                    component:()=> import('@/page/my/report'),
                },{
                    path:'setting',
                    name:'setting',
                    component:()=> import('@/page/my/setting'),
                },
                {
                    path:'group',
                    name:'Detailgroup',
                    component:() => import('@/page/group/detailgroup'),
                },
                {
                    path:'memberlist',
                    name:'Memberlist',
                    component:() => import('@/page/group/memberlist'),
                },
                {
                    path:'setredpack',
                    name:'Setredpack',
                    component:() => import('@/page/message/setredpack'),
                },
                {
                    path:'setbanpack',
                    name:'Setbanpack',
                    component:() => import('@/page/message/setbanpack'),
                },
                {
                    path:'groupRule',
                    name:'groupRule',
                    component:() => import('@/page/message/groupRule'),
                },
                {
                    path:'agentedu',
                    name:'agentedu',
                    component:() => import('@/page/my/agent_edu'),
                },
                {
                    path:'agentcenter',
                    name:'agentcenter',
                    component:() => import('@/page/my/agent_center'),
                },
            ]
        },
        {
            path: '/main',
            name: 'main',
            component: () => import('@/page/main'),
        },     //首页
        {
            path: '/login',
            name: 'login',
            component: () => import('@/page/login'),
        },
        {
            path: '/loginCode',
            name: 'loginCode',
            component: () => import('@/page/login_code'),
        },   //验证码登录
        {
            path: '/register',
            name: 'Register',
            component: () => import('@/page/register'),
        },
        {
            path: '/forget',
            name: 'Forget',
            component: () => import('@/page/forget'),
        },
        {
            path:'/groupRule',
            name:'groupRule',
            component:()=>import('@/page/group_rule')
        },
        {
            path:'/tgProxy',
            name:'tgProxy',
            component:()=>import('@/page/tg_proxy')
        },
        {
            path:'*' ,
            redirect: '/'
        },
    ]
}
import summary from '@/router/summary'
RouterConfig.routes = RouterConfig.routes.concat(summary,mainRules)
const router = new VueRouter(RouterConfig)
router.beforeEach((to, from , next) => {
    NProgress.start();
    next();
});
router.afterEach(() => {
    NProgress.done()
})
export default router

