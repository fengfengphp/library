<template>
    <div id="app" class="themea">
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app',

        components: {},
        provide: function () {
            return {
                getMap: this.testFn
            }
        },
        methods:{
            testFn(){
                console.log(123)
            }
        }
    }
</script>
