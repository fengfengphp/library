<template>
    <div class="main">
        <router-link to="richTextTinymce">richTextTinymce富文本</router-link>
        <br>
        <router-link to="richtextQuill">richtextQuill富文本</router-link>
        <br>
        <router-link to="froalaEditor">froala-editor 富文本 好看又好用，只不过要收费，这里是破解版</router-link>
        <br>
        <router-link to="/api">api</router-link>
        <br>
        <router-link to="/waves">waves水波纹</router-link>
        <br>
        <router-link to="/colorfulWaves">移入变色水波纹</router-link>
        <br>
        <router-link to="/bubbling">冒泡效果</router-link>
        <br>
        <router-link to="/test">上传图片、图片放大、移动端页面滑动、换行</router-link>
        <br>
        <router-link to="/readJson">读取json文件</router-link>
        <br>
        <router-link to="/drag">拖拽</router-link>
        <br>
        <router-link to="/imgRotate">图片翻转 和 监听滚动 图片效果</router-link>
    </div>
</template>

<script>
import '../../node_modules/animate.css/animate.css'
export default {
  name: 'index',
  components: {},
  data () {
    return {
      themeData: [
        {
          index: '0',
          to: 'theme',
          title: '换肤'
        },
        {
          index: '1',
          to: 'animation',
          title: '动画'
        },
        {
          index: '2',
          to: 'test2',
          title: '待定2'
        }
      ],
      activeIndex1: '0',
        dialogVisible:true
    }
  },
  created () {
    this.activeIndex1 = String(this.$route.meta.index)
  },
  methods: {
    themeSelect (key, keyPath) {
      let path = this.themeData[key].to
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>
    /*@import  '../../node_modules/animate.css/animate.css';*/
    .main {
        width: 100%;
        .menu {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .menu-item {
                flex: none;
            }
        }
    }
</style>
