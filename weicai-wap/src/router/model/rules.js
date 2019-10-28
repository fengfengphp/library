export default [
    {
        path: '/mainRules',
        name: 'mainRules',
        component: () => import('@/page/mainRules/mainRules'),
    },
    {
        path: '/banGame',
        name: 'banGame',
        component: () => import('@/page/mainRules/banGame'),
    },
    {
        path: '/banRule1',
        name: 'banRule1',
        component: () => import('@/page/mainRules/banRule1'),
    },
    {
        path: '/banRule2',
        name: 'banRule2',
        component: () => import('@/page/mainRules/banRule2'),
    },
    {
        path: '/niuniuGame',
        name: 'niuniuGame',
        component: () => import('@/page/mainRules/niuniuGame'),
    },
    {
        path: '/niuniuRule1',
        name: 'niuniuRule1',
        component: () => import('@/page/mainRules/niuniuRule1'),
    },
    {
        path: '/niuniuRule2',
        name: 'niuniuRule2',
        component: () => import('@/page/mainRules/niuniuRule2'),
    },
    {
        path: '/boomGame',
        name: 'boomGame',
        component: () => import('@/page/mainRules/boomGame'),
    },
    {
        path: '/boomRule1',
        name: 'boomRule1',
        component: () => import('@/page/mainRules/boomRule1'),
    },
    {
        path: '/boomRule2',
        name: 'boomRule2',
        component: () => import('@/page/mainRules/boomRule2'),
    },
]
