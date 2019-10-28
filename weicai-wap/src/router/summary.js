let xz = [
    // {
    //     path: '/main',
    //     name: 'main',
    //     component: () => import('@/page_summary/xz/index'),
    // },
]      //小猪红包
let xz1 = [
    {
        path: '/tg',
        name: 'tg',
        component: () => import('@/page_summary/xz/xztui1'),
    },
]      //小猪红包
let tt = [
    // {
    //     path: '/main',
    //     name: 'main',
    //     component: () => import('@/page_summary/tt/main'),
    // },
]       //天天红包
let qq2 = [
    {
        path: '/tg',
        name: 'tg',
        component: () => import('@/page_summary/qq/qqtui2'),
    },
    {
        path: '/appdownload',
        name: 'appdownload',
        component: () => import('@/page_summary/qq/qqdownload'),
    },  //APP下载页
    {
        path: '/registerNeedCode',
        name: 'registerNeedCode',
        component: () => import('@/page_summary/qq/register-need-code'),
    },  //登录需要用户 手输邀请码
]       //全球红包2

function getRouter() {
    switch (process.env.BRANCH_ENV) {
        case 'xz':
            return xz
        case 'xz1':
            return xz1
        case 'tt':
            return tt
        case 'qq2':
            return qq2

    }
}
export default getRouter()
