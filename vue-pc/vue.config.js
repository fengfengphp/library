const baseUrl = 'http://localhost:7001';   //测试环境
module.exports = {
    lintOnSave: false,
    baseUrl: './', // baseUrl 设置为相对路径
    productionSourceMap: false, // 生成环境不生成sourceMap文件
    devServer: {
        proxy: {
            '/api': {
                target: baseUrl,
                ws: true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':''
                }
            },
        }
    }
}
