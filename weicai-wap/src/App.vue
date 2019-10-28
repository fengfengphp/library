<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
import {getWebBasedataApi} from '@/api/my.js'
import store2 from 'store2'
import {Decrypt} from '@/util/util'
export default {
  name: 'App',
  data () {
    return {}
  },
  created(){
      this.getData();
  },
  methods:{
      getData(){
          getWebBasedataApi().then(res =>{
              if(res){
                  let decryptData = Decrypt(res.data.data)
                  // let decryptData = res.data.data
                  this.$store.commit('set_webData',decryptData);
                  store2('webData',decryptData);
                  this.reviseWeb(decryptData)
              }
          })
      },         //获取网页数据
      reviseWeb(data){
          let link = document.createElement('link');
          link.type = 'image/x-icon';
          link.rel = 'shortcut icon';
          link.href = data.website_logo;
          let title = document.createElement('title');
          title.innerHTML = data.website_title;
          document.getElementsByTagName('head')[0].appendChild(link);
          document.getElementsByTagName('head')[0].appendChild(title);
          let script = document.createElement('script');
          script.src = `/static/js/${data.website_title}.js`;
          document.getElementsByTagName('head')[0].appendChild(script);
      }    //插入logo 和 title
  },
}
</script>
<style>
    #app{
        height: 100%;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
        position: relative;
    }
</style>




