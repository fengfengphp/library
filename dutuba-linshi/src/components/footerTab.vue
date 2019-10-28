<template>
  <div class="footer-tab">
    <div class="tab-ul">
      <router-link class="tab-li" :class="{'tab-li-active': isCurPath('/home')}" to="/home">
        <div class="img-div home"></div>
        <p>首页</p>
      </router-link>
      <router-link class="tab-li" :class="{'tab-li-active': isCurPath('/mall')}" to="/mall">
        <div class="img-div mall"></div>
        <p>商城</p>
      </router-link>
      <router-link class="tab-li" :class="{'tab-li-active': isCurPath('/message')}" to="/message">
        <div class="img-div message"></div>
        <p>消息</p>
      </router-link>
      <router-link class="tab-li" :class="{'tab-li-active': isCurPath('/my')}" to="/my">
        <div class="img-div my"></div>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footerTab",
    methods:{
      isCurPath (path) {
        return this.$route.fullPath.indexOf(path) > -1
      },
    }
  }
</script>

<style lang="less" scoped>
  /*@import "../assets/css/theme";*/
  .footer-tab{
    width: 100%;height:104px;background:white;
    border-top: 1px solid #CACACA;
    .tab-ul{
      display: flex;
      height: 100%;
      .tab-li{
        flex: 1;display: block;
        height: 100%;
        color: rgba(153,153,153,1);
        text-align: center;
        .img-div{
          margin: 10px auto;
        }
        .home{
          width: 45px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-home.png");
          background-size: 100% 100%;
        }
        .mall{
          width: 48px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-mall.png");
          background-size: 100% 100%;
        }
        .message{
          width: 49px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-message.png");
          background-size: 100% 100%;
        }
        .my{
          width: 41px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-my.png");
          background-size: 100% 100%;
        }
        p{
          font-size: 22px;
        }
      }
      .tab-li-active{
        .home{
          width: 45px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-home-active.png");
          background-size: 100% 100%;
        }
        .mall{
          width: 48px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-mall-active.png");
          background-size: 100% 100%;
        }
        .message{
          width: 49px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-message-active.png");
          background-size: 100% 100%;
        }
        .my{
          width: 41px;height: 45px;
          background-image: url("~@/assets/img/footer/footer-my-active.png");
          background-size: 100% 100%;
        }
        p{

          color: @eye-color;
        }
      }
    }
  }
</style>
