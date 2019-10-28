<template>
    <div>
        <el-button type="primary" style="margin-top: 40px" v-waves>waves 水波纹</el-button>
    </div>
</template>

<script>
    import waves from '@/directives/waves/index'
    export default {
        name: "waves",
        directives:{
            waves,
        }
    }
</script>

<style scoped>

</style>