<template>
  <div>
    <header class="header">
      <h1>我的</h1>
    </header>
    <section class="content">

    </section>
    <footer class="footer">
      <footer-tab></footer-tab>
    </footer>
  </div>
</template>

<script>
  import footerTab from "@/components/footerTab"
  export default {
    name: "my",
    components:{
      footerTab
    }
  }
</script>

<style lang="less" scoped>
  .header{
    position: absolute;top: 0;left: 0;z-index: 101;
    width: 100%;height: 96px;background:@main-color;
  }
  .content{
    position: absolute;top:96px;bottom: 105px;left: 0;z-index: 101;
    width: 100%;
  }
  .footer{
    position: absolute;bottom: 0;left: 0;z-index: 101;
    width: 100%;height: 104px;
  }
</style>
