<template>
    <div>
        进来自动获取userInfo <br>
       <button @click="postTestFn">post请求</button> <br>
       <button @click="postTestIdFn">post请求带 id</button>
    </div>
</template>

<script>
    import {getUserinfoApi} from '@/api/my.js'
    export default {
        name: "api",
        created() {
            this.getData();
        },
        methods:{
            getData(){
                getUserinfoApi().then(res =>{
                    console.log(res)

                })
            },         //获取网页数据
            postTestFn(){
                postTestApi().then( res =>{
                    console.log(res)
                })
            },
            postTestIdFn(){
                postIdApi('judy').then( res =>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
