# dbw-front
Vue全家桶+axios+element的前后端分离项目


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 注意事项：
1. element-ui勿全局加载，使用按需加载的方式引入（样式也是按需引入）   
    
        import { Message } from 'element-ui';  // 引入组件
        Message('Hello')    // 使用组件
        

2. 全局组件放在components/common，在GlobalComponents.js注册
3. 接口请求统一放在api/index.js，统一使用async语法调用

        // ./api/index.js
        // 获取维权数据汇总
        export const totalComplaint = () => {
            return http.get('/complaint/totalComplaint')
        }

        // components
        import { totalComplaint } from '@/api/index.js'
        async totalComplaint() {
            const res = await totalComplaint()
                if (res.code === 200) {
                this.complaintData = res.data
            }
        }

