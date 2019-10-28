<template>
    <div>
        <h1>asdfasd</h1>
        <div style="width: 100px;height: 100px;background-color: #0a76a4;margin-top: 1000px" v-scrolltop></div>
    </div>
</template>

<script>
    import scrolltop from '../directives/scrolltop/scrolltop'
    export default {
        name: "scrolltop",
        directives: {
            scrolltop
        },
    }
</script>

<style scoped>

</style>