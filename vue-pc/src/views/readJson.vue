<template>
    <div>
        <p>原生ajax请求</p>
        <div></div>
        <el-button @click="getUserFn">默认按钮</el-button>
        <el-button type="primary" @click="postUserFn">主要按钮</el-button>
    </div>
</template>

<script>
    import {getUserApi,postUserApi} from '@/api/my'
    export default {
        name: "readJson",
        data(){

        },
        created() {
            let appData = {};
            //请求函数
            function getWebDataFn(){
                console.log('start');
                //1.创建AJAX对象
                var ajax = new XMLHttpRequest();

                //4.给AJAX设置事件(这里最多感知4[1-4]个状态)
                ajax.onreadystatechange = function(){
                    //5.获取响应
                    //responseText		以字符串的形式接收服务器返回的信息
                    if (ajax.readyState == 4){
                        if ((ajax.status >= 200 && ajax.status < 300) || ajax.status == 304){
                            console.log(ajax);
                            appData = JSON.parse(ajax.response);
                        } else {
                            console.log("Request was unsuccessful: " + xhr.status);
                        }
                    }
                }

                //2.创建http请求,并设置请求地址
                ajax.open('get','./appJson.json');    //地址是相对路径写法
                // ajax.setRequestHeader("Content-Type","multipart/form-data/");//设置请求头，需要就设置，不需要可没有
                //3.发送请求(get--null    post--数据)
                ajax.send(null);
            }
            // getWebDataFn()
        },
        methods:{
            getUserFn(){
                getUserApi().then(res =>{

                })
            },
            postUserFn(){
                postUserApi().then(res =>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
