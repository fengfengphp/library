<template>
    <transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
        <div  class="main-dialog" >
            <div class="content-div">
                <img :src="zoomImgUrl" alt="">
            </div>
        </div>
    </transition>
</template>

<script>
    import testCompnont from '@/views/test-compnont'
    export default {
        name: "test-compnont",
        components:{
            testCompnont
        },
        props:{
            zoomImgUrl:String
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
