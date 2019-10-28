<template>
    <div>
        <div class="box-el" :class="{'active':isrotate}">
            <div>
                <img src="./logo.png" alt="">
            </div>
            <div>
                <img src="./pic-logo.png" alt="">
            </div>
        </div>
        <div class="main-div">
            <div class="blue-div">
                <img src="./theme-blue.png" alt="">
            </div>
            <div class="red-div">
                <img src="./theme-red.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'imgRotate',
  data () {
    return {
      isrotate: false
    }
  },
  created () {
    setInterval(() => {
      this.isrotate = !this.isrotate
    }, 2000)
  },
  methods: {
    getScrollTop () {
      var scroll_top = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop
      } else if (document.body) {
        scroll_top = document.body.scrollTop
      }
      if (scroll_top > 530) {
        return 530
      } else {
        return scroll_top
      }
    }
  },
  mounted () {
    document.addEventListener('scroll', () => {
      document.getElementsByClassName('red-div')[0].style.height = this.getScrollTop() + 'px'
    })
  }
}
</script>

<style scoped lang="scss">
    .box-el{
        background-color: grey;
        transition: transform 1s linear;
        width: 56px;height: 39px;
        >div{
            width: 56px;height: 39px;
            text-align: center;
            background-color: grey;
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            transition: .8s ease-in-out;
            overflow: hidden;
        }
    }
    .box-el >div:first-child{
        transform: rotateY(0);
        z-index: 2;
    }
    .box-el >div:last-child{
        transform: rotateY(180deg);
        z-index: 1;
    }
    .active >div:first-child{
        transform: rotateY(180deg);
        z-index: 1;
    }
    .active >div:last-child{
        transform: rotateY(0);
        z-index: 2;
    }
    .main-div{
        width: 890px;height: 530px;
        margin:200px auto 800px;
        position: relative;
        background-color: white;
        .blue-div{
            position: absolute;
            top: 0;left: 0;
            z-index: 1;
            width: 100%;
            img{
                width: 100%;
            }
        }
        .red-div{
            position: absolute;
            top: 0;left: 0;
            z-index: 2;
            width: 100%;
            height: 0;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
</style>
