module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-plugin-px2rem')({ rootValue: 75 }) // 换算的基数
                ]
            }
        }
    },
    devServer:{
        proxy: {
            '/api': {
                target: 'http://10.10.13.191:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        },
    },
}
