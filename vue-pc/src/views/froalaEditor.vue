<template>
  <div>
    <div id="example" class="edit-el"></div>
    <div @click="getHtml">获取数据</div>
    <div v-html="contenEl" class="fr-view"></div>
  </div>
</template>

<script>
export default {
  name: 'froalaEditor',
  data () {
    return {
      editer: {},
      contenEl: ''
    }
  },
  methods: {
    getHtml () {
      console.log(this.editer.html.get())
      this.contenEl = this.editer.html.get()
    }
  },
  mounted () {
    this.editer = new FroalaEditor('#example', {
      language: 'zh_cn',
      attribution: false
    })
    console.log(this.editer)
  }
}
</script>
<style lang="scss" scoped>
  /deep/ .fr-box.fr-basic .fr-element{
    min-height: 200px;
  }
  .edit-el{
    width: 800px;
    padding: 50px 100px;
  }
</style>
